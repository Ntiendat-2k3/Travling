const Sidebar = ({ setFilters }) => {
  const handleLocationChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prev) => {
      const newLocation = checked
        ? [...prev.location, value]
        : prev.location.filter((location) => location !== value);
      return { ...prev, location: newLocation };
    });
  };

  const handlePriceChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prev) => {
      const newPrice = checked
        ? [...prev.price, value]
        : prev.price.filter((price) => price !== value);
      return { ...prev, price: newPrice };
    });
  };

  return (
    <div className="w-full sm:w-64 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Lọc Tour</h3>

      {/* Lọc theo địa điểm */}
      <div className="mb-6">
        <h4 className="text-lg font-medium mb-2">Địa điểm</h4>
        <div>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              value="Hà Nội"
              onChange={handleLocationChange}
              className="mr-2"
            />
            Hà Nội
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              value="Sài Gòn"
              onChange={handleLocationChange}
              className="mr-2"
            />
            Sài Gòn
          </label>
          <label className="flex items-center mb-2">
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
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              value="3,500,000 VND"
              onChange={handlePriceChange}
              className="mr-2"
            />
            3,500,000 VND
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              value="4,200,000 VND"
              onChange={handlePriceChange}
              className="mr-2"
            />
            4,200,000 VND
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              value="3,800,000 VND"
              onChange={handlePriceChange}
              className="mr-2"
            />
            3,800,000 VND
          </label>
        </div>
      </div>

      {/* Lọc Button */}
      <button
        onClick={() => setFilters((prev) => ({ ...prev }))} // Lọc lại khi nhấn
        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Lọc
      </button>
    </div>
  );
};

export default Sidebar;
