import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ImageCard = (props) => {
  return (
    <div class="max-w-xs rounded overflow-hidden shadow-lg my-3 mx-auto">
      <Zoom>
        <img
          class="w-full object-cover h-48 w-96 "
          src={props.image.urls.regular}
          alt="Sunset in the mountains"
        />
      </Zoom>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
          📷: {props.image.user.username}
        </div>

        <p class="text-grey-darker text-base">
          <span>Instagram: </span>
          {props.image.user.instagram_username}
        </p>
      </div>
      <div class="px-6 py-5 mb-5 text-center flex justify-evenly">
        <a
          href={props.image.links.html}
          className=" border-2 border-black text-center px-10 py-2 "
        >
          View Profile
        </a>
        {/* 
        <a
          href={props.image.links.html}
          className=" border-2 border-black text-center px-2 py-2 "
        >
          Download
        </a> */}
      </div>
    </div>
  );
};

export default ImageCard;
