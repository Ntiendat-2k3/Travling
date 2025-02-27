import Image from "next/image";
import { FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillAlt } from "react-icons/fa";

const CardTour = ({ tour }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-green-300 to-teal-400">
      {/* Hình ảnh Tour */}
      <div className="relative h-56 overflow-hidden rounded-t-xl">
        <Image
          src={tour.image}
          alt={tour.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>

      <div className="p-6 bg-white/80 backdrop-blur-sm rounded-b-xl">
        {/* Địa điểm */}
        <div className="flex items-center text-sm text-gray-700 mb-2">
          <span className="text-green-500">
            <FaMapMarkerAlt className="mr-2" />
          </span>
          <span>{tour.location}</span>
        </div>

        {/* Tên Tour */}
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
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

        {/* Nút đặt tour */}
        <button className="w-full">
          <p className="text-right text-green-500 py-2 px-4 rounded transition duration-300 border ">
            Đặt Ngay
          </p>
        </button>
      </div>
    </div>
  );
};

export default CardTour;
