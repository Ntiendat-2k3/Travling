"use client";
import Header from "./components/Header";
import { SectionBestSellingTour, SectionHero } from "./components/section";

const HomePage = () => {
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

      {/* Main Section - Tour Bán Chạy */}
      <main className="container mx-auto px-4 py-8">
        <SectionBestSellingTour />
      </main>

      <footer></footer>
    </div>
  );
};

export default HomePage;
