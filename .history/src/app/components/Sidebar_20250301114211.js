import { useState } from "react";
import {
  FilterButton,
  LocationFilter,
  PriceFilter,
  TypeFilter,
} from "../utils/filter";

const Sidebar = ({ setFilters }) => {
  // Các state để lưu giá trị lọc
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [selectedType, setSelectedType] = useState([]);

  // Hàm xử lý thay đổi địa điểm
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  // Hàm xử lý thay đổi giá
  const handlePriceChange = (name, value) => {
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  // Hàm xử lý thay đổi loại tour
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  // Hàm xử lý khi bấm nút lọc
  const handleFilter = () => {
    // Gửi giá trị lọc cho `setFilters`
    setFilters({
      location: selectedLocation,
      price: priceRange,
      type: selectedType,
    });

    // // Sau khi lọc xong, reset lại các trạng thái lọc
    // setSelectedLocation([]); // Reset địa điểm
    // setPriceRange({ min: "", max: "" }); // Reset giá
    // setSelectedType([]); // Reset loại tour
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
