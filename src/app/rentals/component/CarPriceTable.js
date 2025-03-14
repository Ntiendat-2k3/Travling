"use client";
import React, { useState, memo } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ModalRentalCar from "./ModalRentalCar";

const CarPriceTable = memo(({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState("");
  const [selectedCarType, setSelectedCarType] = useState("");

  const handleCarSelect = (carType, route) => {
    setSelectedCarType(carType);
    setSelectedRoute(route);
    setShowModal(true); // Mở modal khi chọn Đặt Xe
  };

  const closeModal = () => setShowModal(false); // Đóng modal

  return (
    <>
      <div className="overflow-x-auto mx-auto mt-8 px-4">
        <table className="table-auto w-full border-collapse border border-[#B0D0B6] bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg">
          <thead>
            <tr className="bg-gradient-to-r from-[#D1E6F0] to-[#7D9C9C] text-[#2C3A3C]">
              <th className="border px-4 py-2 text-left">TT</th>
              <th className="border px-4 py-2 text-left">
                Lộ Trình (Khu vực Đà Nẵng)
              </th>
              <th className="border px-4 py-2 text-left">Lượt</th>
              <th className="border px-4 py-2 text-left">Giá Tiền</th>
              <th className="border px-4 py-2 text-center">Đặt Xe</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr
                key={item.id}
                className="odd:bg-[#E7F5F0] even:bg-[#F1F9F5] hover:bg-[#c3e3dd] transition"
              >
                <td className="border px-4 py-2 text-center">{item.id}</td>
                <td className="border px-4 py-2">{item.route}</td>
                <td className="border px-4 py-2 text-center">{item.trip}</td>
                <td className="border px-4 py-2 text-center">{item.price}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    className="flex items-center justify-center px-4 py-2 text-white bg-[#4BB5B9] hover:bg-[#3A9F92] rounded-md transition duration-300"
                    onClick={() => handleCarSelect(item.type, item.route)}
                  >
                    <FaShoppingCart className="mr-2" /> Đặt Xe
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Component */}
      <ModalRentalCar
        isOpen={showModal}
        closeModal={closeModal}
        selectedCarType={selectedCarType}
        selectedRoute={selectedRoute}
      />
    </>
  );
});

CarPriceTable.displayName = "CarPriceTable";

export default CarPriceTable;
