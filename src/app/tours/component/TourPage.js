"use client";
import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  lazy,
  Suspense,
} from "react";
import { useParams } from "next/navigation";
import { fetchTours } from "@/app/utils/fetchTours";
import CardTourSkeleton from "@/app/utils/loading/CardTourSkeleton";
import Paginate from "@/app/utils/Paginate";
import SearchFilter from "./SearchFilter";
import LazyLoadCardTour from "@/app/utils/loading/LazyLoadCardTour";

const CardTour = lazy(() => import("@/app/components/CardTour"));

const TourPage = () => {
  const { type } = useParams();
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State để lưu từ khóa tìm kiếm
  const [toursToShow, setToursToShow] = useState([]); // State để lưu các TourCard sẽ hiển thị

  // Fetch data từ API hoặc localStorage
  useEffect(() => {
    if (!type) return;

    const getTours = async () => {
      const cachedTours = localStorage.getItem(`tours_${type}`);
      if (cachedTours) {
        setTours(JSON.parse(cachedTours));
        setToursToShow(JSON.parse(cachedTours));
        setLoading(false);
        return;
      }

      try {
        const data = await fetchTours();
        const filteredTours = data?.filter((tour) => tour.type === type);
        setTours(filteredTours || []);
        localStorage.setItem(`tours_${type}`, JSON.stringify(filteredTours));
        setToursToShow(filteredTours || []);
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setLoading(false);
      }
    };

    getTours();
  }, [type]);

  // Memoize page title to avoid unnecessary re-renders
  const pageTitle = useMemo(
    () => (type === "domestic" ? "Tour Trong Nước" : "Tour Nước Ngoài"),
    [type]
  );

  // Memoize rendering of tour card
  const renderTourCard = useCallback((tour) => {
    return (
      // C1:
      // <Suspense fallback={<CardTourSkeleton />}>
      //   <CardTour key={tour.id} tour={tour} />
      // </Suspense>
      // C2:
      <LazyLoadCardTour
        key={tour.id}
        tour={tour}
        renderTourCard={(tour) => <CardTour tour={tour} />}
      />
    );
  }, []);

  // Function to handle search and filter tours (will be called after pressing Enter)
  const handleSearch = useCallback(() => {
    const filteredTours = tours.filter((tour) =>
      tour.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setToursToShow(filteredTours);
  }, [tours, searchQuery]);

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
          tours={tours}
          setSelectedTour={() => {}}
          onEnterPress={handleSearch} // Gọi hàm handleSearch sau khi nhấn Enter
          setToursToShow={setToursToShow}
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
