"use client";
import React, { useRef, useState, useEffect } from "react";
import Header from "./components/Header";

const HomePage = () => {
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const [textIndex, setTextIndex] = useState(0); // Mới: Để điều khiển việc hiện thị từng chữ
  const videoIntroRef = useRef(null);
  const videoMainRef = useRef(null);
  const text = "Welcome to Travling!";

  const handleIntroEnd = () => {
    setIsIntroFinished(true); // Khi video intro kết thúc, hiển thị video chính
  };

  useEffect(() => {
    if (isIntroFinished) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setTextIndex(index + 1); // Cập nhật textIndex từng chữ
          index++;
        } else {
          clearInterval(interval); // Dừng lại khi đã hết
        }
      }, 200); // Điều chỉnh thời gian cho từng chữ xuất hiện
      return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }
  }, [isIntroFinished]);

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
            {/* Render từng chữ một với hiệu ứng */}
            {text.split("").map((char, index) => (
              <span
                key={index}
                className={`inline-block ${
                  index < textIndex
                    ? "opacity-100 transform translate-y-0 transition-all duration-500"
                    : "opacity-0 transform translate-y-10"
                }`}
              >
                {char}
              </span>
            ))}
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
