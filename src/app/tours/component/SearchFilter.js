import React, { useState, useEffect } from "react";

const SearchFilter = ({
  setSearchQuery,
  tours,
  setSelectedTour,
  onEnterPress,
  setToursToShow,
}) => {
  const [query, setQuery] = useState("");
  const [filteredTours, setFilteredTours] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Chỉ lọc tour khi người dùng nhấn Enter
  useEffect(() => {
    if (query && !isSearching) {
      setFilteredTours(
        tours.filter((tour) =>
          tour.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredTours([]);
    }
  }, [query, tours, isSearching]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    setSearchQuery(value); // Cập nhật từ khóa tìm kiếm
    setIsSearching(false); // Khi thay đổi input, không thực hiện lọc ngay
  };

  const handleSelectTour = (tour) => {
    setQuery(tour.name); // Cập nhật từ khóa tìm kiếm
    setSelectedTour(tour); // Chọn tour đã click
    setToursToShow([tour]); // Cập nhật chỉ hiển thị tour đã chọn
    setFilteredTours([]); // Đóng thanh gợi ý sau khi chọn tour
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEnterPress(); // Gọi hàm onEnterPress từ TourPage khi nhấn Enter
      setIsSearching(true); // Khi nhấn Enter, bắt đầu tìm kiếm và ẩn gợi ý
      setFilteredTours([]); // Đóng thanh gợi ý
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
        className="w-full p-2 border border-gray-300 rounded-md text-dark2d"
      />
      {/* Chỉ hiển thị gợi ý khi không đang tìm kiếm */}
      {!isSearching && filteredTours.length > 0 && (
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
