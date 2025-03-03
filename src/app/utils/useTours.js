import { useState, useEffect } from "react";
import useFetchTours from "./useFetchTours";
import applyFilters from "./applyFilters";

const useTours = (filters) => {
  const { tours, loading, error } = useFetchTours(); // Sử dụng custom hook fetchTours
  const [filteredTours, setFilteredTours] = useState([]);

  useEffect(() => {
    // Lọc các tour khi filters thay đổi
    const newFilteredTours = applyFilters(tours, filters); // Sử dụng hàm lọc dữ liệu
    setFilteredTours(newFilteredTours);
  }, [filters, tours]);

  return { filteredTours, loading, error };
};

export default useTours;
