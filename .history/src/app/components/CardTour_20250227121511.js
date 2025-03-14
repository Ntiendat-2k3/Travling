import { FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillAlt } from "react-icons/fa"; // Icons từ react-icons

const CardTour = ({ tour }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Hình ảnh Tour */}
      <img
        src={tour.image}
        alt={tour.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        {/* Địa điểm */}
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <FaMapMarkerAlt className="mr-2" />
          <span>{tour.location}</span>
        </div>

        {/* Tên Tour */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {tour.name}
        </h3>

        {/* Thời gian */}
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <FaCalendarAlt className="mr-2" />
          <span>{tour.days} Days</span>
        </div>

        {/* Giá */}
        <div className="flex items-center text-lg font-bold text-blue-500 mb-2">
          <FaMoneyBillAlt className="mr-2" />
          <span>{tour.price}</span>
        </div>

        {/* Nút đặt tour */}
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
          Đặt Ngay
        </button>
      </div>
    </div>
  );
};

export default CardTour;
