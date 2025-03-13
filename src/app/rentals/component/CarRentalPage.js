"use client";
import Header from "@/app/components/Header";
import React, { useState } from "react";
import NavbarCar from "./NavbarCar";
import CarPriceTable from "./CarPriceTable";
import Footer from "@/app/components/Footer";
import { carRentalData } from "@/app/data/rentalCar";

const CarRentalPage = () => {
  const [selectedCarType, setSelectedCarType] = useState("4-chỗ");

  const handleCarSelect = (carType) => {
    setSelectedCarType(carType);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#F2F7FC] to-[#D6E8E1]">
      <div className="bg-gradient-to-l from-[#cce9f5] to-[#c6e7d8] py-5">
        <Header />
      </div>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-extrabold text-center text-[#1D4E89] mb-6">
          Bảng Giá Xe Tham Khảo 2025
        </h1>
        <NavbarCar onSelect={handleCarSelect} />
        <CarPriceTable data={carRentalData[selectedCarType]} />
      </div>
      <Footer />
    </div>
  );
};

export default CarRentalPage;
