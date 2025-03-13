"use client";
import React from "react";

const NavbarCar = ({ onSelect }) => {
  const carTypes = ["4-chỗ", "7-chỗ", "9-chỗ", "16-chỗ", "29-chỗ"];

  return (
    <div className="bg-gradient-to-r from-[#2D9CDB] to-[#56CCF2] p-3 py-1 rounded-lg shadow-lg w-full mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <span className="text-lg">Chọn Loại Xe</span>
        </div>
        <div className="flex space-x-6">
          {carTypes.map((type) => (
            <button
              key={type}
              onClick={() => onSelect(type)}
              className="text-white text-lg font-semibold hover:bg-[#2980B9] px-3 py-1 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarCar;
