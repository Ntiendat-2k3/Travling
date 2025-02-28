import { FaSpinner } from "react-icons/fa";
import CardTour from "../CardTour";
import Paginate from "@/app/utils/Paginate";

const SectionBestSellingTour = ({ tours, loading, error }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (tours.length === 0) {
    return (
      <div className="text-center text-lg text-gray-700">
        <p>Chưa có tour phù hợp</p>
      </div>
    );
  }

  const renderTourCard = (tour) => {
    return <CardTour key={tour.id} tour={tour} />;
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mb-8 relative">
        Tour bán chạy
        <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] w-[80px] h-[4px] bg-green-300 rounded"></span>
      </h2>

      <Paginate
        data={tours}
        itemsPerPage={6} // Hiển thị 6 tour mỗi trang
        renderItem={renderTourCard} // Hàm render để render mỗi CardTour
      />
    </div>
  );
};

export default SectionBestSellingTour;
