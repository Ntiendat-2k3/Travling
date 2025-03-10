import React from "react";

const CardTourSkeleton = () => {
  return (
    <div className="max-w-sm h-[454px] rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse">
      <div className="relative h-[40%] bg-gray-300" />

      <div className="h-[60%] flex flex-col justify-between p-6 bg-white/80 backdrop-blur-sm rounded-b-xl">
        <div className="flex-shrink-0 space-y-3">
          {/* Dòng 1: placeholder cho địa điểm */}
          <div className="w-1/2 h-4 bg-gray-300 rounded" />
          {/* Dòng 2: placeholder cho tên tour */}
          <div className="w-3/4 h-5 bg-gray-300 rounded" />
          {/* Dòng 3: placeholder cho số ngày */}
          <div className="w-1/3 h-4 bg-gray-300 rounded" />
          {/* Dòng 4: placeholder cho giá */}
          <div className="w-1/2 h-5 bg-gray-300 rounded" />
        </div>

        {/* Dòng nút bấm */}
        <div className="w-full flex items-center justify-between mt-4">
          <div className="w-10 h-8 bg-gray-300 rounded" />
          <div className="w-24 h-8 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  );
};

export default CardTourSkeleton;
