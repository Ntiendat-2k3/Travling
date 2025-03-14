import React, { useState, useEffect } from "react";

const SearchFilter = ({
  setSearchQuery,
  tours,
  setSelectedTour,
  onEnterPress,
}) => {
  const [query, setQuery] = useState("");
  const [filteredTours, setFilteredTours] = useState([]);

  useEffect(() => {
    if (query) {
      // Lọc tour ngay khi người dùng nhập chữ
      setFilteredTours(
        tours.filter((tour) =>
          tour.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredTours([]);
    }
  }, [query, tours]);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
    setSearchQuery(event.target.value); // Cập nhật từ khóa tìm kiếm
  };

  const handleSelectTour = (tour) => {
    setQuery(tour.name);
    setSelectedTour(tour); // Chọn tour khi click vào một gợi ý
    setFilteredTours([]); // Đóng thanh gợi ý sau khi chọn tour
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEnterPress(); // Gọi hàm onEnterPress từ TourPage khi nhấn Enter
      setFilteredTours([]); // Đóng thanh gợi ý sau khi nhấn Enter
    }
  };

  return (
    <div className="px-4 pb-4 max-w-6xl mx-auto relative">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        placeholder="Tìm kiếm tour..."
        className="w-full p-2 border border-gray-300 rounded-md"
      />

      {filteredTours.length > 0 && (
        <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              onClick={() => handleSelectTour(tour)}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {tour.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
