"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";
import InputField from "@/app/components/input/InputField";
import { FaRegTimesCircle } from "react-icons/fa";

const ModalRentalCar = ({
  isOpen,
  closeModal,
  selectedCarType,
  selectedRoute,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    closeModal(); // Đóng modal sau khi submit
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Booking Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <div className="modal-wrapper">
        <h2 className="modal-title">{`Xe ${selectedCarType} - ${selectedRoute}`}</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Tên"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <InputField
            label="Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <InputField
            label="Số điện thoại"
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <InputField
            label="Nội dung"
            id="message"
            name="message"
            type="textarea"
            value={formData.message}
            onChange={handleInputChange}
          />
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-[#2db6ba] text-white px-6 py-2 rounded-md hover:bg-[#2db6ba]/90 transition-all duration-300 transform hover:scale-105"
            >
              Xác nhận đặt xe
            </button>
          </div>
        </form>
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-2xl text-white"
        >
          <FaRegTimesCircle />
        </button>
      </div>
    </Modal>
  );
};

export default ModalRentalCar;
