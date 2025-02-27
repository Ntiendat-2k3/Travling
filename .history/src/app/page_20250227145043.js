"use client";
import { useState } from "react";
import Header from "./components/Header";
import { SectionBestSellingTour, SectionHero } from "./components/section";
import Sidebar from "./components/Sidebar";
import useTours from "./utils/useTours";
import Footer from "./components/Footer";

const HomePage = () => {
  const [filters, setFilters] = useState({
    location: [], // Mảng chứa địa điểm đã chọn
    price: { min: "", max: "" }, // Mảng chứa giá đã chọn
  });

  const { filteredTours, loading, error } = useTours(filters); // Sử dụng hook

  return (
    <div>
      {/* Header */}
      <div className="absolute top-0 left-0 w-full p-4 shadow-md z-10 flex items-center">
        <h2 className="absolute text-2xl font-bold ml-5 text-blue-500">
          Travling!
        </h2>
        <Header />
      </div>

      <SectionHero />

      {/* Main Section */}
      <main className="container mx-auto px-4 py-8 flex">
        {/* Sidebar */}
        <Sidebar setFilters={setFilters} />

        {/* Section Best Selling Tours */}
        <SectionBestSellingTour
          tours={filteredTours}
          loading={loading}
          error={error}
        />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
