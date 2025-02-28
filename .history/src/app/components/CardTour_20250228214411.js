import Image from "next/image";
import {
  FaEye,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaMoneyBillAlt,
} from "react-icons/fa";

const CardTour = ({ tour }) => {
  return (
    <div className="max-w-sm h-[454px] rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-green-300 to-teal-400 transform transition-all duration-300 hover:shadow-xl cursor-pointer">
      {/* Hình ảnh Tour */}
      <div className="relative h-[40%] overflow-hidden rounded-t-xl">
        <Image
          src={tour.image}
          alt={tour.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>

      <div className="h-[60%] flex flex-col justify-between p-6 bg-white/80 backdrop-blur-sm rounded-b-xl">
        {/* Địa điểm */}
        <div className="flex-shrink-0">
          <div className="flex items-center text-sm text-gray-700 mb-2">
            <span className="text-green-500">
              <FaMapMarkerAlt className="mr-2" />
            </span>
            <span>{tour.location}</span>
          </div>
          {/* Tên Tour */}
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            {tour.name}
          </h3>
          {/* Thời gian */}
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <FaCalendarAlt className="mr-2" />
            <span>{tour.days} Days</span>
          </div>
          {/* Giá */}
          <div className="flex items-center text-lg font-bold text-blue-600 mb-4">
            <FaMoneyBillAlt className="mr-2" />
            <span>{tour.price}</span>
          </div>
        </div>

        {/* Nút đặt tour */}
        <button className="w-full flex items-center justify-between">
          <span>
            <FaEye className="text-xl text-blue-500" />
          </span>
          <p className="w-[120px] py-2 rounded-md border border-transparent bg-green-500 text-white hover:border-green-500 hover:text-green-500 hover:bg-transparent transition duration-300">
            Đặt ngay
          </p>
        </button>
      </div>
    </div>
  );
};

export default CardTour;
