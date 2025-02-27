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
      <div className="!bg-transparent p-4 shadow-lg z-10 relative">
        <Header />
      </div>

      {/* Video intro */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          ref={videoIntroRef}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            isIntroFinished ? "opacity-0" : "opacity-100"
          }`} // Khi video intro kết thúc, opacity giảm xuống 0
          src="/assets/video/intro.mp4"
          type="video/mp4"
          autoPlay
          muted
          onEnded={handleIntroEnd} // Khi video intro kết thúc, gọi handleIntroEnd
        />
        {isIntroFinished && (
          <div className="relative w-full h-screen overflow-hidden">
            <video
              ref={videoMainRef}
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="/assets/video/main.mp4"
              type="video/mp4"
              autoPlay
              muted
              loop // Video này sẽ tự động lặp lại
            />
          </div>
        )}
      </div>

      {/* Video chính */}
      {isIntroFinished && (
        <div className="relative w-full h-screen overflow-hidden">
          <video
            ref={videoMainRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/assets/video/main.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop // Video này sẽ tự động lặp lại
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
