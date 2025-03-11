import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ToursLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className=" bg-gradient-to-l from-[#cce9f5] to-[#c6e7d8] py-5">
        <Header />
      </div>
      {children} {/* Hiển thị nội dung trang con */}
      <Footer />
    </div>
  );
};

export default ToursLayout;
