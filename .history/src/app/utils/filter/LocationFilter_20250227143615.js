const LocationFilter = ({ selectedLocation, onLocationChange }) => {
  // Mảng chứa các địa điểm, có thể dễ dàng thêm bớt địa điểm mà không cần thay đổi code
  const locations = [
    "Hà Nội",
    "Sài Gòn",
    "Đà Nẵng",
    "Nha Trang",
    "Huế",
    "Phú Quốc",
  ];

  const handleLocationChange = (e) => {
    const value = e.target.value;
    onLocationChange(value);
  };

  return (
    <div className="mb-6">
      <h4 className="text-lg font-medium mb-2">Địa điểm</h4>
      <div className="space-y-2">
        {locations.map((location) => (
          <label key={location} className="flex items-center">
            <input
              type="checkbox"
              value={location}
              onChange={handleLocationChange}
              checked={selectedLocation.includes(location)}
              className="mr-2 w-4 h-4 border-2 border-white rounded-sm accent-blue-500"
            />
            {location}
          </label>
        ))}
      </div>
    </div>
  );
};

export default LocationFilter;
