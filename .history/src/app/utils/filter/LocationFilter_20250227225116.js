import { useState, useEffect } from "react";
const LocationFilter = ({ selectedLocation, onLocationChange }) => {
  const locations = [
    "Hà Nội",
    "Sài Gòn",
    "Đà Nẵng",
    "Nha Trang",
    "Huế",
    "Phú Quốc",
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set mounted flag to true after the component is mounted on client
  }, []);

  if (!mounted) return null;

  const handleLocationChange = (e) => {
    const value = e.target.value;
    // Kiểm tra nếu địa điểm đã được chọn, thì bỏ chọn, nếu chưa được chọn, thì chọn
    onLocationChange(
      e.target.checked
        ? [...selectedLocation, value]
        : selectedLocation.filter((location) => location !== value)
    );
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
              className="mr-2 w-4 h-4 border-2 border-blue-500 rounded-sm accent-green-300"
            />
            {location}
          </label>
        ))}
      </div>
    </div>
  );
};

export default LocationFilter;
