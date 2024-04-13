import React, { useState, useEffect } from "react";
import { landsListApi } from "../api";

const useApiCallsHandler = () => {
  const [landsList, setLandsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const listApiCall = async (pageNo) => {
    try {
      setIsLoading(true);
      const response = await landsListApi(pageNo);
      setLandsList((prev) => [...prev, ...response.results]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Error in listApiCall: ", error);
    }
  };

  useEffect(() => {
    listApiCall(pageNumber);
  }, [pageNumber]);

  return { landsList, setPageNumber, isLoading };
};

export default useApiCallsHandler;
