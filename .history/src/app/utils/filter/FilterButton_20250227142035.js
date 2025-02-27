const FilterButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
    >
      Lọc
    </button>
  );
};

export default FilterButton;
