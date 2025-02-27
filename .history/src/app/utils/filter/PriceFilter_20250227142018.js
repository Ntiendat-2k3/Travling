const PriceFilter = ({ priceRange, onPriceChange }) => {
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    onPriceChange(name, value);
  };

  return (
    <div className="mb-6">
      <h4 className="text-lg font-medium mb-2">Giá</h4>
      <div>
        <label className="block mb-2">Từ</label>
        <input
          type="number"
          name="min"
          value={priceRange.min}
          onChange={handlePriceChange}
          className="w-full mb-2 p-2 border border-gray-300 rounded-md"
          placeholder="Nhập giá tối thiểu"
        />
        <label className="block mb-2">Đến</label>
        <input
          type="number"
          name="max"
          value={priceRange.max}
          onChange={handlePriceChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
          placeholder="Nhập giá tối đa"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
