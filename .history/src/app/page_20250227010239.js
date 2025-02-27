"use client";
import React, { useRef, useState } from "react";
import Header from "./components/Header";

const HomePage = () => {
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const [isVideoIntroFading, setIsVideoIntroFading] = useState(false);
  const videoIntroRef = useRef(null);
  const videoMainRef = useRef(null);

  const handleIntroEnd = () => {
    setIsVideoIntroFading(true); // Bắt đầu hiệu ứng mờ dần cho video intro
    setTimeout(() => {
      setIsIntroFinished(true); // Sau khi video intro đã mờ dần, hiển thị video chính
    }, 500); // Thời gian fade-out, có thể điều chỉnh (500ms)
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-transparent p-4 shadow-lg z-10 relative">
        <Header />
      </div>

      {/* Video intro */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          ref={videoIntroRef}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            isVideoIntroFading ? "opacity-0" : "opacity-100"
          }`} // Video intro mờ dần
          src="/assets/video/intro.mp4"
          type="video/mp4"
          autoPlay
          muted
          onEnded={handleIntroEnd} // Khi video intro kết thúc, gọi handleIntroEnd
        />
      </div>

      {/* Video chính */}
      {isIntroFinished && (
        <div className="relative w-full h-screen overflow-hidden">
          <video
            ref={videoMainRef}
            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 opacity-100" // Video chính thay thế video intro
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
