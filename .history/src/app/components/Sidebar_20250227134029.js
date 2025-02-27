import { useState } from "react";

const Sidebar = ({ tours, setFilteredTours }) => {
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);

  // Xử lý khi checkbox thay đổi
  const handleLocationChange = (e) => {
    const value = e.target.value;
    setSelectedLocation((prev) =>
      prev.includes(value)
        ? prev.filter((location) => location !== value)
        : [...prev, value]
    );
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setSelectedPrice((prev) =>
      prev.includes(value)
        ? prev.filter((price) => price !== value)
        : [...prev, value]
    );
  };

  // Filter tours theo location và price
  const filterTours = () => {
    let filtered = tours;

    if (selectedLocation.length > 0) {
      filtered = filtered.filter((tour) =>
        selectedLocation.includes(tour.location)
      );
    }

    if (selectedPrice.length > 0) {
      filtered = filtered.filter((tour) => selectedPrice.includes(tour.price));
    }

    setFilteredTours(filtered);
  };

  return (
    <div className="w-full sm:w-64 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Lọc Tour</h3>

      {/* Lọc theo địa điểm */}
      <div className="mb-6">
        <h4 className="text-lg font-medium mb-2">Địa điểm</h4>
        <div>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              value="Hà Nội"
              checked={selectedLocation.includes("Hà Nội")}
              onChange={handleLocationChange}
              className="mr-2"
            />
            Hà Nội
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              value="Sài Gòn"
              checked={selectedLocation.includes("Sài Gòn")}
              onChange={handleLocationChange}
              className="mr-2"
            />
            Sài Gòn
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              value="Đà Nẵng"
              checked={selectedLocation.includes("Đà Nẵng")}
              onChange={handleLocationChange}
              className="mr-2"
            />
            Đà Nẵng
          </label>
        </div>
      </div>

      {/* Lọc theo giá */}
      <div className="mb-6">
        <h4 className="text-lg font-medium mb-2">Giá</h4>
        <div>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              value="3,500,000 VND"
              checked={selectedPrice.includes("3,500,000 VND")}
              onChange={handlePriceChange}
              className="mr-2"
            />
            3,500,000 VND
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              value="4,200,000 VND"
              checked={selectedPrice.includes("4,200,000 VND")}
              onChange={handlePriceChange}
              className="mr-2"
            />
            4,200,000 VND
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              value="3,800,000 VND"
              checked={selectedPrice.includes("3,800,000 VND")}
              onChange={handlePriceChange}
              className="mr-2"
            />
            3,800,000 VND
          </label>
        </div>
      </div>

      {/* Lọc Button */}
      <button
        onClick={filterTours}
        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Lọc
      </button>
    </div>
  );
};

export default Sidebar;
