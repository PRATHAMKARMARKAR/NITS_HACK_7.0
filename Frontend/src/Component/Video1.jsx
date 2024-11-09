import React from "react";
import firstVideo from "../assets/first.mp4"; // adjust the path as needed

const Video1 = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[60%]">
          <video className="w-full" controls>
            <source src={firstVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default Video1;