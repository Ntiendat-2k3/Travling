import { useState } from "react";
import TourDetailModal from "./TourDetailModal";
import TourBookingModal from "./TourBookingModal";
import Image from "next/image";
import {
  FaCalendarAlt,
  FaEye,
  FaMapMarkerAlt,
  FaMoneyBillAlt,
} from "react-icons/fa";

const CardTour = ({ tour }) => {
  const [openModalType, setOpenModalType] = useState(null); // Quản lý loại modal nào đang mở

  const openModal = (modalType) => {
    if (openModalType !== modalType) {
      setOpenModalType(modalType); // Mở modal mới và đóng modal cũ
    }
  };

  const closeModal = () => setOpenModalType(null); // Đóng tất cả modal

  return (
    <div className="max-w-sm h-[454px] rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-green-300 to-teal-400 transform transition-all duration-300 hover:shadow-xl cursor-pointer">
      {/* Hình ảnh Tour */}
      <div className="relative h-[40%] overflow-hidden rounded-t-xl">
        <Image
          src={tour.image}
          alt={tour.name}
          style={{ objectFit: "cover" }}
          className="rounded-t-xl"
          width={500}
          height={300}
          priority
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
        <div className="w-full flex items-center justify-between">
          <button onClick={() => openModal("detail")}>
            <FaEye className="text-2xl text-violet-600" />
          </button>
          <button
            onClick={() => openModal("booking")}
            className="w-[120px] py-2 rounded-md border border-transparent bg-green-500 text-white hover:border-green-500 hover:text-green-500 hover:bg-transparent transition duration-300"
          >
            Đặt ngay
          </button>
        </div>
      </div>

      {/* Hiển thị Modal khi mở */}
      {openModalType === "detail" && (
        <TourDetailModal tour={tour} onClose={closeModal} />
      )}
      {openModalType === "booking" && (
        <TourBookingModal tour={tour} onClose={closeModal} />
      )}
    </div>
  );
};

export default CardTour;
