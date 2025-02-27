import React from "react";
import CardTour from "../CardTour";
import useTours from "@/app/utils/useTours";

const SectionBestSellingTour = () => {
  const { tours, loading, error } = useTours(); // fetch

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mb-8">Tour Bán Chạy</h2>
      {loading ? (
        <p>Đang tải...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <CardTour key={tour.id} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionBestSellingTour;
