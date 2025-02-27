import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-blue-200 p-4 shadow-lg z-10 relative">
        <Header />
      </div>

      {/* Video intro chiếm toàn màn hình */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/path-to-your-video.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        />
      </div>
    </div>
  );
};

export default HomePage;
