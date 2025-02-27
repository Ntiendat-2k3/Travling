import Image from "next/image";
import { FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillAlt } from "react-icons/fa";

const CardTour = ({ tour }) => {
  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transform hover:scale-105 transition duration-500 ease-in-out">
      {/* Hình ảnh Tour */}
      <div className="relative h-64 overflow-hidden rounded-t-3xl">
        <Image
          src={tour.image}
          alt={tour.name}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-110 transition duration-500 ease-in-out"
        />
      </div>

      <div className="p-6 bg-black/60 backdrop-blur-sm rounded-b-3xl">
        {/* Địa điểm */}
        <div className="flex items-center text-sm text-white mb-2">
          <span className="text-green-300">
            <FaMapMarkerAlt className="mr-2" />
          </span>
          <span>{tour.location}</span>
        </div>

        {/* Tên Tour */}
        <h3 className="text-2xl font-bold text-white mb-3">{tour.name}</h3>

        {/* Thời gian */}
        <div className="flex items-center text-sm text-white mb-3">
          <FaCalendarAlt className="mr-2" />
          <span>{tour.days} Days</span>
        </div>

        {/* Giá */}
        <div className="flex items-center text-xl font-semibold text-yellow-300 mb-4">
          <FaMoneyBillAlt className="mr-2" />
          <span>{tour.price}</span>
        </div>

        {/* Nút đặt tour */}
        <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-xl shadow-md hover:scale-105 transition duration-300 ease-in-out">
          Đặt Ngay
        </button>
      </div>
    </div>
  );
};

export default CardTour;
