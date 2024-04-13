import React from "react";

const useResolveLandPrice = (props) => {
  const { price_per_acre_crore: price, total_land_size_in_acres: size } = props;

  const priceString =
    (price?.crore !== 0 ? `${price.crore} crore ` : "") +
    (price?.lakh !== 0 ? `${price.lakh} lakh ` : "");

  const sizeString =
    (size?.acres !== 0 ? `${size.acres} acres ` : "") +
    (size?.guntas !== 0 ? `${size.guntas} guntas ` : "");


  return { priceString, sizeString };
};

export default useResolveLandPrice;
