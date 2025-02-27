import { useState } from "react";
import { FaMapMarkerAlt, FaMoneyBillAlt } from "react-icons/fa"; // Icons for location and price

const Sidebar = ({ setFilters }) => {
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  // Xử lý khi checkbox location thay đổi
  const handleLocationChange = (e) => {
    const value = e.target.value;
    setSelectedLocation((prev) =>
      prev.includes(value)
        ? prev.filter((location) => location !== value)
        : [...prev, value]
    );
  };

  // Xử lý khi nhập giá
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  // Xử lý khi click "Lọc"
  const handleFilter = () => {
    setFilters({ location: selectedLocation, price: priceRange });
  };

  return (
    <div className="w-full sm:w-64 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Lọc Tour</h3>

      {/* Lọc theo địa điểm */}
      <div className="mb-6">
        <h4 className="text-lg font-medium mb-2">Địa điểm</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Hà Nội"
              onChange={handleLocationChange}
              className="mr-2"
            />
            Hà Nội
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Sài Gòn"
              onChange={handleLocationChange}
              className="mr-2"
            />
            Sài Gòn
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Đà Nẵng"
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
          <label className="block mb-2">Từ</label>
          <input
            type="number"
            name="min"
            value={priceRange.min}
            onChange={handlePriceChange}
            className="w-full mb-2 p-2 border border-gray-300 rounded-md outline-none"
            placeholder="Nhập giá tối thiểu"
          />
          <label className="block mb-2">Đến</label>
          <input
            type="number"
            name="max"
            value={priceRange.max}
            onChange={handlePriceChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded-md outline-none"
            placeholder="Nhập giá tối đa"
          />
        </div>
      </div>

      {/* Nút Lọc */}
      <button
        onClick={handleFilter}
        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Lọc
      </button>
    </div>
  );
};

export default Sidebar;
