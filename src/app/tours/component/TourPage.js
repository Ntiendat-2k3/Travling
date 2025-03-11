"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchTours } from "@/app/utils/fetchTours";
import CardTour from "@/app/components/CardTour";
import CardTourSkeleton from "@/app/utils/loading/LoadingSkeleton";

const TourPage = () => {
  const { type } = useParams(); // Lấy tham số 'type' từ URL
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!type) return; // Tránh render trước khi 'type' có giá trị

    const getTours = async () => {
      try {
        const data = await fetchTours();
        // Lọc tour theo 'type'
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

  const pageTitle = type === "domestic" ? "Tour Trong Nước" : "Tour Nước Ngoài";

  return (
    <>
      <div className="py-6 text-center">
        <h1 className="text-2xl font-bold text-gray-700">{pageTitle}</h1>
        {type === "domestic" ? (
          <p className="text-sm text-gray-500">
            Khám phá những tour du lịch nội địa hấp dẫn
          </p>
        ) : (
          <p className="text-sm text-gray-500">
            Khám phá những tour du lịch quốc tế đặc sắc
          </p>
        )}
      </div>

      <div className="flex-grow">
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
          <p className="text-center mt-6">Hiện không có tour phù hợp</p>
        )}
      </div>
    </>
  );
};

export default TourPage;
