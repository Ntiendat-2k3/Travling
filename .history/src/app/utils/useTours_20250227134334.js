import { useState, useEffect } from "react";
import { fetchTours } from "./fetchTours";

const useTours = (filters) => {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTours = async () => {
      try {
        const toursData = await fetchTours();
        setTours(toursData);
        setFilteredTours(toursData); // Set filtered tours initially
      } catch (err) {
        setError("Lỗi khi tải dữ liệu tours");
      } finally {
        setLoading(false);
      }
    };

    getTours();
  }, []);

  useEffect(() => {
    // Lọc các tour khi filters thay đổi
    const applyFilters = () => {
      let filtered = tours;

      if (filters.location.length > 0) {
        filtered = filtered.filter((tour) =>
          filters.location.includes(tour.location)
        );
      }

      if (filters.price.length > 0) {
        filtered = filtered.filter((tour) =>
          filters.price.includes(tour.price)
        );
      }

      setFilteredTours(filtered);
    };

    applyFilters();
  }, [filters, tours]); // Khi filters hoặc tours thay đổi, áp dụng lọc

  return { filteredTours, loading, error };
};

export default useTours;
