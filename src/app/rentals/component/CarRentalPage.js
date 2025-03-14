"use client";
import { carRentalData } from "@/app/data/rentalCar";
import React, { Suspense, lazy, useState } from "react";

const Header = lazy(() => import("@/app/components/Header"));
const Footer = lazy(() => import("@/app/components/Footer"));
const NavbarCar = lazy(() => import("./NavbarCar"));
const CarPriceTable = lazy(() => import("./CarPriceTable"));
const SkeletonLoader = lazy(() => import("@/app/utils/loading/SkeletonLoader"));

const CarRentalPage = () => {
  const [selectedCarType, setSelectedCarType] = useState("4-chỗ");

  const handleCarSelect = (carType) => {
    setSelectedCarType(carType);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#F2F7FC] to-[#D6E8E1]">
      <div className="bg-gradient-to-l from-[#cce9f5] to-[#c6e7d8] py-5">
        <Suspense
          fallback={
            <div className="w-full">
              <SkeletonLoader height="60px" />
            </div>
          }
        >
          <Header />
        </Suspense>
      </div>

      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-extrabold text-center text-[#1D4E89] mb-6">
          Bảng Giá Xe Tham Khảo 2025
        </h1>

        <Suspense
          fallback={
            <div className="w-full">
              <SkeletonLoader height="50px" />
            </div>
          }
        >
          <NavbarCar onSelect={handleCarSelect} />
        </Suspense>

        <Suspense
          fallback={
            <div className="w-full mt-8">
              <SkeletonLoader height="50px" />
              <SkeletonLoader height="400px" />
            </div>
          }
        >
          <CarPriceTable data={carRentalData[selectedCarType]} />
        </Suspense>
      </div>

      <Suspense
        fallback={
          <div className="w-full">
            <SkeletonLoader height="60px" />
          </div>
        }
      >
        <Footer />
      </Suspense>
    </div>
  );
};

export default CarRentalPage;
