import React from "react";
import Zoom from "react-img-hover-zoom";

const ZoomingImage = ({width,image}) => {
  return (
    <Zoom
      img={image}
      zoomScale={1.5}
      width={width}
      height={width}
      style={{}}
      transitionTime={0.3}
      className="cursor-move hidden lg:block p-16"
      id='scalediv'
    />
  );
};

export default ZoomingImage;
