"use client";
import React, { useRef, useState } from "react";
import Header from "./components/Header";

const HomePage = () => {
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const videoIntroRef = useRef(null);
  const videoMainRef = useRef(null);

  const handleIntroEnd = () => {
    setIsIntroFinished(true); // Khi video intro kết thúc, hiển thị video chính
  };

  return (
    <div>
      {/* Header */}
      <div className="absolute top-0 left-0 w-full p-4 shadow-md z-10 flex items-center">
        <h2 className="absolute text-2xl font-bold ml-5 text-blue-500">
          Travling!
        </h2>
        <Header />
      </div>

      <div className="relative w-full h-screen overflow-hidden">
        {/* Video intro */}
        <video
          ref={videoIntroRef}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isIntroFinished ? "opacity-0" : "opacity-100"
          }`} // Tăng thời gian transition
          src="/assets/video/intro2.mp4"
          type="video/mp4"
          autoPlay
          muted
          onEnded={handleIntroEnd} // Khi video intro kết thúc, gọi handleIntroEnd
        />

        {/* Video chính */}
        <div
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            isIntroFinished ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-white">
            <span className="relative overflow-hidden">
              {/* Thanh quét */}
              <span className="absolute top-0 left-0 w-full h-full bg-white animate-swipe"></span>

              {/* Nội dung chữ */}
              <span className="relative z-10">Welcome to Travling!</span>
            </span>
          </h1>
          {isIntroFinished && (
            <video
              ref={videoMainRef}
              className="w-full h-full object-cover"
              src="/assets/video/main.mp4"
              type="video/mp4"
              autoPlay
              muted
              loop
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
