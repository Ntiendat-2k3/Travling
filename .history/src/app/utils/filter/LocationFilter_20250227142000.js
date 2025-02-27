import { useState } from "react";

const LocationFilter = ({ selectedLocation, onLocationChange }) => {
  const handleLocationChange = (e) => {
    const value = e.target.value;
    onLocationChange(value);
  };

  return (
    <div className="mb-6">
      <h4 className="text-lg font-medium mb-2">Địa điểm</h4>
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Hà Nội"
            onChange={handleLocationChange}
            checked={selectedLocation.includes("Hà Nội")}
            className="mr-2 w-4 h-4 border-2 border-white rounded-sm accent-blue-500"
          />
          Hà Nội
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Sài Gòn"
            onChange={handleLocationChange}
            checked={selectedLocation.includes("Sài Gòn")}
            className="mr-2 w-4 h-4 border-2 border-white rounded-sm accent-blue-500"
          />
          Sài Gòn
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Đà Nẵng"
            onChange={handleLocationChange}
            checked={selectedLocation.includes("Đà Nẵng")}
            className="mr-2 w-4 h-4 border-2 border-white rounded-sm accent-blue-500"
          />
          Đà Nẵng
        </label>
      </div>
    </div>
  );
};

export default LocationFilter;
