import CardTour from "../CardTour";
import { FaSpinner } from "react-icons/fa";

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

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mb-8 relative">
        Tour Bán Chạy
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[50px] h-[4px] bg-blue-500 rounded"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <CardTour key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default SectionBestSellingTour;
