export const TypeFilter = ({ selectedType, onTypeChange }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    onTypeChange(value ? [value] : []);
  };

  return (
    <div className="mb-4">
      <h4 className="font-medium">Chọn loại tour</h4>
      <select
        className="w-full p-2 mt-2 border rounded"
        onChange={handleChange}
        value={selectedType[0] || ""}
      >
        <option value="">Tất cả</option>
        <option value="domestic">Trong nước</option>
        <option value="international">Ngoài nước</option>
      </select>
    </div>
  );
};
