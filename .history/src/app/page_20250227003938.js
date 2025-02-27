"use client";
import React, { useRef, useState } from "react";
import Header from "./components/Header";

const HomePage = () => {
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const videoIntroRef = useRef(null);
  const videoMainRef = useRef(null);

  const handleIntroEnd = () => {
    setIsIntroFinished(true);
    videoMainRef.current.play(); // Kiểm tra nếu videoMainRef.current không phải null rồi mới phát video chính
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-blue-200 p-4 shadow-lg z-10 relative">
        <Header />
      </div>

      {/* Video intro */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          ref={videoIntroRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
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
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/assets/video/intro.mp4"
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
