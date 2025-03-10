import React from "react";
import Header from "../components/Header";
import ToursPage from "../components/ToursPage";
import Footer from "../components/Footer";

export default function TourNuocNgoai() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className=" bg-gradient-to-l from-[#cce9f5] to-[#c6e7d8] py-5">
        <Header />
      </div>
      <ToursPage
        type="international"
        title="Tour Nước Ngoài"
        subtitle="Khám phá những tour du lịch quốc tế đặc sắc"
      />
      <Footer />
    </div>
  );
}
