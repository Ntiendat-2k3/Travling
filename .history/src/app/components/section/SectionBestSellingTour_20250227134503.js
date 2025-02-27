import Image from "next/image";

const SectionBestSellingTour = ({ tours, loading, error }) => {
  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tours.map((tour) => (
        <div
          key={tour.id}
          className="border rounded-lg overflow-hidden shadow-md"
        >
          <Image
            src={tour.image}
            alt={tour.name}
            fill
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
  );
};

export default SectionBestSellingTour;
