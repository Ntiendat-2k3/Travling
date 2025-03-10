"use client";
import React, { useEffect, useState } from "react";
import CardTour from "./CardTour";
import { fetchTours } from "../utils/fetchTours";
import CardTourSkeleton from "../utils/loading/loadingSkeleton";

export default function ToursPage({ type, title, subtitle }) {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTours = async () => {
      try {
        const data = await fetchTours();
        const filteredTours = data?.filter((tour) => tour.type === type);
        setTours(filteredTours || []);
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setLoading(false);
      }
    };

    getTours();
  }, [type]);

  return (
    <div className="flex-grow">
      <div className="py-6 text-center">
        <h1 className="text-2xl font-bold text-gray-700">{title}</h1>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      {/* Nếu đang loading thì hiển thị skeleton, nếu xong thì hiển thị dữ liệu */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-8 max-w-6xl mx-auto">
          <CardTourSkeleton />
          <CardTourSkeleton />
          <CardTourSkeleton />
        </div>
      ) : tours.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-8 max-w-6xl mx-auto">
          {tours.map((tour) => (
            <CardTour key={tour.id} tour={tour} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-6">Không có tour nào cho {title}</p>
      )}
    </div>
  );
}
