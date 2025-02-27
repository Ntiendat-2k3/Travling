import { useState, useEffect } from "react";

const LocationFilter = ({ selectedLocation, onLocationChange, locations }) => {
  const [mounted, setMounted] = useState(false);

  // Ensuring this runs only on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted, return null (only render after the component is mounted on the client)
  if (!mounted) return null;

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
