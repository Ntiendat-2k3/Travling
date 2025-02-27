import { useState } from "react";
import { FilterButton, LocationFilter, PriceFilter } from "../utils/filter";

const Sidebar = ({ setFilters }) => {
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const handleLocationChange = (location) => {
    setSelectedLocation(location); // Đặt lại location sau mỗi thay đổi
  };

  const handlePriceChange = (name, value) => {
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilter = () => {
    setFilters({ location: selectedLocation, price: priceRange });
  };

  return (
    <div className="mr-5 w-full sm:w-64 bg-white/80 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Lọc Tour</h3>

      {/* Lọc theo địa điểm */}
      <LocationFilter
        selectedLocation={selectedLocation}
        onLocationChange={handleLocationChange}
      />

      {/* Lọc theo giá */}
      <PriceFilter priceRange={priceRange} onPriceChange={handlePriceChange} />

      {/* Nút Lọc */}
      <FilterButton onClick={handleFilter} />
    </div>
  );
};

export default Sidebar;
