import React from "react";
import Carousel from "./Carousel";
import Details from "./Details";
import useResolveLandPrice from "../hooks/useResolveLandPrice";

const Card = React.forwardRef((props, ref) => {
  const { item } = props;
  const {
    village_name: villageName,
    mandal_name: mandalName,
    district_name: district_name,
  } = item;
  const { priceString, sizeString } = useResolveLandPrice(item);
  const cardDetailsProp = {
    villageName,
    mandalName,
    district_name,
    priceString,
    sizeString,
  };

  return (
    <div
      ref={ref}
      className="min-h-64 w-full rounded-lg border-2 border-gray-200 hover:shadow-xl ease-in duration-300 cursor-pointer"
    >
      <Carousel key={item.id} images={item?.land_media} />
      <Details key={'details'+item.id} cardDetailsProp={cardDetailsProp} />
    </div>
  );
});

export default Card;
