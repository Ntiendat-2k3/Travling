"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchTours } from "@/app/utils/fetchTours";
import CardTour from "@/app/components/CardTour";
import CardTourSkeleton from "@/app/utils/loading/LoadingSkeleton";
import Paginate from "@/app/utils/Paginate";
import SearchFilter from "./SearchFilter";

const TourPage = () => {
  const { type } = useParams();
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State để lưu từ khóa tìm kiếm
  const [selectedTour, setSelectedTour] = useState(null); // State để lưu tour đã chọn
  const [toursToShow, setToursToShow] = useState([]); // State để lưu các TourCard sẽ hiển thị

  useEffect(() => {
    if (!type) return;

    const getTours = async () => {
      // caching
      const cachedTours = localStorage.getItem(`tours_${type}`);
      if (cachedTours) {
        setTours(JSON.parse(cachedTours)); // Sử dụng dữ liệu từ localStorage
        setLoading(false);
        setToursToShow(JSON.parse(cachedTours)); // Hiển thị tất cả tour ban đầu
        return;
      }

      try {
        const data = await fetchTours();
        const filteredTours = data?.filter((tour) => tour.type === type);
        setTours(filteredTours || []);
        localStorage.setItem(`tours_${type}`, JSON.stringify(filteredTours)); // Lưu vào localStorage
        setToursToShow(filteredTours || []); // Hiển thị tất cả tour ban đầu
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setLoading(false);
      }
    };

    getTours();
  }, [type]);

  const pageTitle = type === "domestic" ? "Tour Trong Nước" : "Tour Nước Ngoài";

  const renderTourCard = (tour) => {
    return <CardTour key={tour.id} tour={tour} />;
  };

  const handleEnterPress = () => {
    // Khi nhấn Enter, lọc tour theo searchQuery và chỉ render các TourCard tương ứng
    const filteredTours = tours.filter((tour) =>
      tour.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setToursToShow(filteredTours);
  };

  return (
    <>
      <div className="py-6 text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-1">{pageTitle}</h1>
        {type === "domestic" ? (
          <p className="text-md text-gray-500">
            Khám phá những tour du lịch nội địa hấp dẫn
          </p>
        ) : (
          <p className="text-md text-gray-500">
            Khám phá những tour du lịch quốc tế đặc sắc
          </p>
        )}
      </div>

      <div className="flex-grow">
        <SearchFilter
          setSearchQuery={setSearchQuery}
          tours={tours} // Truyền danh sách các tour để tìm kiếm
          setSelectedTour={setSelectedTour}
          onEnterPress={handleEnterPress} // Truyền function vào để xử lý nhấn Enter
        />
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-8 max-w-6xl mx-auto">
            <CardTourSkeleton />
            <CardTourSkeleton />
            <CardTourSkeleton />
          </div>
        ) : toursToShow.length > 0 ? (
          <div className="px-4 pb-8 max-w-6xl mx-auto">
            <Paginate
              data={toursToShow}
              itemsPerPage={6}
              renderItem={renderTourCard}
            />
          </div>
        ) : (
          <p className="text-center mt-6">Hiện không có tour phù hợp</p>
        )}
      </div>
    </>
  );
};

export default TourPage;
