import Image from "next/image";
import { FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillAlt } from "react-icons/fa";

const CardTour = ({ tour }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg backdrop-blur-lg bg-white/10 border border-white/30 hover:bg-white/20 transition duration-300">
      {/* Hình ảnh Tour */}
      <div className="relative h-48">
        <Image
          src={tour.image}
          alt={tour.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      <div className="p-6">
        {/* Địa điểm */}
        <div className="flex items-center text-sm text-gray-200 mb-2">
          <span className="text-green-500">
            <FaMapMarkerAlt className="mr-2" />
          </span>
          <span>{tour.location}</span>
        </div>

        {/* Tên Tour */}
        <h3 className="text-2xl font-semibold text-white mb-3">{tour.name}</h3>

        {/* Thời gian */}
        <div className="flex items-center text-sm text-gray-200 mb-3">
          <FaCalendarAlt className="mr-2" />
          <span>{tour.days} Days</span>
        </div>

        {/* Giá */}
        <div className="flex items-center text-lg font-bold text-blue-400 mb-4">
          <FaMoneyBillAlt className="mr-2" />
          <span>{tour.price}</span>
        </div>

        {/* Nút đặt tour */}
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 backdrop-blur-sm">
          Đặt Ngay
        </button>
      </div>
    </div>
  );
};

export default CardTour;
