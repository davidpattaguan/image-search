import React from "react";
import ImageCard from "../imagecard/ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return (
    <div className="ImageList grid grid-cols-1 gap-1 md:grid-cols-3 border mt-5 pt-5">
      {images}
    </div>
  );
};

export default ImageList;
