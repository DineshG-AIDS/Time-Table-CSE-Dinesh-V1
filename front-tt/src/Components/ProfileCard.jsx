import React from "react";
import PropImage from "../home/profImage.jpg";
const ProfileCard = () => {
  return (
    <>
      <div
        className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800"
        style={{ maxWidth: "500px" }}
      >
        <div className="w-full pt-1 pb-5">
          <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
            <img src={PropImage} alt="" />
          </div>
        </div>
        <div className="w-full mb-10">
          <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
            “
          </div>
          <p className="text-sm text-gray-600 text-center px-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            obcaecati laudantium recusandae, debitis eum voluptatem ad, illo
            voluptatibus temporibus odio provident.
          </p>
          <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
            ”
          </div>
        </div>
        <div className="w-full">
          <p className="text-lg text-indigo-500 font-bold text-center">
            Sanjay S
          </p>
          <p className="text-xs text-gray-500 text-center">@SanjayS</p>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
