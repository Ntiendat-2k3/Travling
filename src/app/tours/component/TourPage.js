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
import LoadingHamster from "@/app/utils/loading/LoadingHamster";

const CardTour = lazy(() => import("@/app/components/CardTour"));

const TourPage = () => {
  const { type } = useParams();
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State để lưu từ khóa tìm kiếm
  const [toursToShow, setToursToShow] = useState([]); // State để lưu các TourCard sẽ hiển thị

  const pageTitle = useMemo(() => {
    return type === "domestic" ? "Tour Trong Nước" : "Tour Nước Ngoài";
  }, [type]);

  const fetchTourData = useCallback(async (tourType) => {
    setLoading(true);

    const cachedTours = localStorage.getItem(`tours_${tourType}`);
    if (cachedTours) {
      setTours(JSON.parse(cachedTours));
      setToursToShow(JSON.parse(cachedTours));
      setLoading(false);
      return;
    }

    try {
      const data = await fetchTours();
      const filteredTours = data?.filter((tour) => tour.type === tourType);
      setTours(filteredTours || []);
      setToursToShow(filteredTours || []);
      localStorage.setItem(`tours_${tourType}`, JSON.stringify(filteredTours));
    } catch (error) {
      console.error("Error fetching tours:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!type) return;
    fetchTourData(type);
  }, [type, fetchTourData]);

  const renderTourCard = useCallback((tour) => {
    return (
      <CardTour key={tour.id} tour={tour} />
      // <LazyLoadCardTour
      //   key={tour.id}
      //   tour={tour}
      //   renderTourCard={(tour) => <CardTour tour={tour} />}
      // />
    );
  }, []);

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
          <div className="w-full mx-auto flex flex-col items-center gap-3 my-6">
            <p className="">Hiện không có tour phù hợp😳.</p>
            <LoadingHamster />
          </div>
        )}
      </div>
    </>
  );
};

export default TourPage;
