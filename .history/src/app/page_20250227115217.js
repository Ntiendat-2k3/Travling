"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SectionHero from "./components/SectionHero";
import { fetchTours } from "./utils/fetchTours";
import Image from "next/image";

const HomePage = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTours = async () => {
      try {
        const toursData = await fetchTours();
        setTours(toursData);
      } catch (err) {
        setError("Lỗi khi tải dữ liệu tours");
      } finally {
        setLoading(false);
      }
    };

    getTours();
  }, []);

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
      <main className="mt-20 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Tour Bán Chạy
        </h2>
        {loading ? (
          <p>Đang tải...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="border rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={tour.image}
                  alt={tour.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{tour.name}</h3>
                  <p className="text-gray-600">{tour.location}</p>
                  <p className="text-sm text-gray-500">{tour.description}</p>
                  <p className="text-lg font-bold mt-2">{tour.price}</p>
                  <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-700">
                    Đặt Ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer></footer>
    </div>
  );
};

export default HomePage;
