"use client";
import React, { useRef, useState } from "react";

const SectionHero = () => {
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const videoIntroRef = useRef(null);
  const videoMainRef = useRef(null);

  const handleIntroEnd = () => {
    setIsIntroFinished(true); // Khi video intro kết thúc, hiển thị video chính
  };

  return (
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-6xl font-bold shadow-lg">Welcome to Travling!</h1>
          <p className="ml-2 mt-2 text-lg">Chào mừng bạn đã quay trở lại! 🥰</p>
        </div>
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
  );
};

export default SectionHero;
