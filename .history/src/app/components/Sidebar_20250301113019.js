import { useState } from "react";
import {
  FilterButton,
  LocationFilter,
  PriceFilter,
  TypeFilter,
} from "../utils/filter";

const Sidebar = ({ setFilters }) => {
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [selectedType, setSelectedType] = useState([]); // Thêm state cho loại tour

  const handleLocationChange = (location) => {
    setSelectedLocation(location); // Đặt lại location sau mỗi thay đổi
  };

  const handlePriceChange = (name, value) => {
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (type) => {
    setSelectedType(type); // Đặt lại loại tour đã chọn
  };

  const handleFilter = () => {
    setFilters({
      location: selectedLocation,
      price: priceRange,
      type: selectedType,
    });
  };

  return (
    <div className="mr-5 w-full h-[700px] sm:w-64 bg-gradient-to-tr from-[#cce9f5] to-[#c6e7d8] p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Lọc Tour</h3>

      {/* Lọc theo địa điểm */}
      <LocationFilter
        selectedLocation={selectedLocation}
        onLocationChange={handleLocationChange}
      />

      {/* Lọc theo giá */}
      <PriceFilter priceRange={priceRange} onPriceChange={handlePriceChange} />

      {/* Lọc theo loại tour */}
      <TypeFilter selectedType={selectedType} onTypeChange={handleTypeChange} />

      {/* Nút Lọc */}
      <FilterButton onClick={handleFilter} />
    </div>
  );
};

export default Sidebar;
