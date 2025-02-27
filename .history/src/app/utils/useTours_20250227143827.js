import { useState, useEffect } from "react";
import { fetchTours } from "../utils/fetchTours"; // Đảm bảo hàm fetchTours.js tồn tại

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

      if (filters.price.min || filters.price.max) {
        filtered = filtered.filter((tour) => {
          const price = parseFloat(tour.price.replace(/[^\d.-]/g, "")); // Remove non-numeric characters
          const min = parseFloat(filters.price.min);
          const max = parseFloat(filters.price.max);
          return (isNaN(min) || price >= min) && (isNaN(max) || price <= max);
        });
      }

      setFilteredTours(filtered);
    };

    applyFilters();
  }, [filters, tours]);

  return { filteredTours, loading, error, locations: getLocations(tours) }; // Trả về locations từ tour
};

// Hàm này sẽ trả về danh sách các location duy nhất từ danh sách tour
const getLocations = (tours) => {
  const locations = tours.map((tour) => tour.location);
  return [...new Set(locations)]; // Lọc các location trùng lặp
};

export default useTours;
