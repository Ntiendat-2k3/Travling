import { useState } from "react";
import LocationFilter from "./LocationFilter";
import PriceFilter from "./PriceFilter";
import FilterButton from "./FilterButton";

const Sidebar = ({ setFilters }) => {
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const handleLocationChange = (location) => {
    setSelectedLocation((prev) =>
      prev.includes(location)
        ? prev.filter((loc) => loc !== location)
        : [...prev, location]
    );
  };

  const handlePriceChange = (name, value) => {
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilter = () => {
    setFilters({ location: selectedLocation, price: priceRange });
  };

  return (
    <div className="w-full sm:w-64 bg-white p-6 rounded-lg shadow-md">
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
