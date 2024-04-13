import React, { useRef, useCallback } from "react";

const useInfiniteScrollHandler = ({ isLoading, setPageNumber }) => {
  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  return { lastElementRef };
};

export default useInfiniteScrollHandler;
