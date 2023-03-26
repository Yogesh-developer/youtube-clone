import React from "react";
import Content from "./Content";
const Aside = () => {
  return (
    <div className="flex flex-row">
      <div className="w-28 h-[91vh] shadow-sm flex flex-col items-center">
        <div>
          <div className="m-3 flex flex-col items-center">
            <img
              src="https://img.icons8.com/material-outlined/24/null/home-page.png"
              alt="home"
            />
            <h6>Home</h6>
          </div>
          <div className="m-3 flex flex-col items-center">
            <img
              src="https://img.icons8.com/ios/24/null/laptop-play-video--v1.png"
              alt="short video"
            />
            <h6>Short</h6>
          </div>
          <div className="m-3 flex flex-col items-center">
            <img
              src="https://img.icons8.com/ios/24/null/video-playlist.png"
              alt="video playlist"
            />
            <h6>Subscriptions</h6>
          </div>
          <div className="m-3 flex flex-col items-center">
            <img
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/24/000000/external-video-library-dating-app-flaticons-lineal-color-flat-icons.png"
              alt="liberary"
            />
            <h6>Liberary</h6>
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
};

export default Aside;
