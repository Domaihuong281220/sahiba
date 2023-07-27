/** @format */

import React from "react";
// How you are

import media_01 from "../../../assets/image/media_01.mp4";
import media_02 from "../../../assets/image/media_02.mp4";
import media_03 from "../../../assets/image/media_03.mp4";

const MediaPage = () => {
  return (
    <div className="grid grid-cols-3 py-20 ">
      <div className="flex justify-center pt-3">
        <video
          className="h-[300px] w-10/12 rounded-lg"
          controls
          autoPlay
          muted="true"
        >
          <source src={media_01} type="video/mp4" />
        </video>
      </div>
      <div className="flex justify-center pt-3">
        <video
          className="h-[300px] w-10/12 rounded-lg"
          controls
          autoPlay
          muted="true"
        >
          <source src={media_02} type="video/mp4" />
        </video>
      </div>
      <div className="flex justify-center pt-3">
        <video
          className="h-[300px] w-10/12 rounded-lg"
          controls
          autoPlay
          muted="true"
        >
          <source src={media_03} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default MediaPage;
