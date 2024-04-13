import React from "react";

import useApiCallsHandler from "../hooks/useApiCallsHandler";
import useInfiniteScrollHandler from "../hooks/useInfiniteScrollHandler";
import { loaderSVG } from "../utils";
import Card from "../component/Card";

const LandingPage = () => {
  const { landsList, setPageNumber, isLoading } = useApiCallsHandler();
  const { lastElementRef } = useInfiniteScrollHandler({
    isLoading,
    setPageNumber,
  });

  if (landsList.length > 0) {
    return (
      <>
        <div className="grid grid-cols-1 gap-8  sm:grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-2 lg:p-8 xl:grid-cols-3 2xl:p-12">
          {landsList.map((item, index) => (
            <Card ref={lastElementRef} key={index} item={item} />
          ))}
        </div>
        {isLoading && (
          <div className="flex w-full justify-center h-16 mt-8">
            {loaderSVG}
          </div>
        )}
      </>
    );
  }
};

export default LandingPage;
