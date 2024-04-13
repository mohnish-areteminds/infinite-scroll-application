import React, { useState } from "react";

const Carousel = (props) => {
  const { images } = props;
  let [current, setCurrent] = useState(0);

  let prevImage = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  let nextImage = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
    
  };

  if (images.length === 0) {
    return (
      <div className="flex overflow-hidden w-[100%] h-[190px]">
        <img
          src={"https://placehold.co/600x400"}
          className="w-full h-full object-cover"
          alt="Card Image"
        />
      </div>
    );
  }

  if (images.length > 0) {
    return (
        <div className="overflow-hidden relative">
          <div
            className="h-[190px] flex transition ease-in-out duration-1000"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div className="w-[100%] flex-shrink-0">
              <img 
              className='rounded-t-md w-full h-full object-cover'
              key={index} src={image.image} alt="Card Image" />
              </div>
            ))}
          </div>
      
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 ml-4 focus:outline-none hover:bg-gray-100 bg-opacity-50 cursor-pointer"
            onClick={prevImage}
          >
            {"<"}
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 mr-4 focus:outline-none b hover:bg-gray-100 bg-opacity-50 cursor-pointer"
            onClick={nextImage}
          >
            {">"}
          </button>
        </div>
    );
  }
};

export default Carousel;
