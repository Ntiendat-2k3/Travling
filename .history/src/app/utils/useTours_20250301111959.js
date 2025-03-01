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
        const bestSellingTours = toursData.filter((tour) => tour.isBestSelling); // Lọc tour bán chạy
        setTours(bestSellingTours);
        setFilteredTours(bestSellingTours); // Set filtered tours ban đầu là các tour bán chạy
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

      // Lọc theo địa điểm
      if (filters.location.length > 0) {
        filtered = filtered.filter((tour) =>
          filters.location.includes(tour.location)
        );
      }

      // Lọc theo giá
      if (filters.price.min || filters.price.max) {
        filtered = filtered.filter((tour) => {
          const price = parseFloat(tour.price.replace(/[^\d.-]/g, "")); // Loại bỏ ký tự không phải số
          const min = parseFloat(filters.price.min);
          const max = parseFloat(filters.price.max);
          return (isNaN(min) || price >= min) && (isNaN(max) || price <= max);
        });
      }

      // Lọc theo loại tour (domestic, international)
      if (filters.type && filters.type.length > 0) {
        filtered = filtered.filter((tour) => filters.type.includes(tour.type));
      }

      setFilteredTours(filtered);
    };

    applyFilters();
  }, [filters, tours]);

  return { filteredTours, loading, error };
};

export default useTours;
