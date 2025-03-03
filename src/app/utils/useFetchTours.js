import { useState, useEffect } from "react";
import { fetchTours } from "./fetchTours";

const useFetchTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTours = async () => {
      try {
        const toursData = await fetchTours();
        const bestSellingTours = toursData.filter((tour) => tour.isBestSelling); // Lọc tour bán chạy
        setTours(bestSellingTours);
      } catch (err) {
        setError("Lỗi khi tải dữ liệu tours");
      } finally {
        setLoading(false);
      }
    };

    getTours();
  }, []);

  return { tours, loading, error };
};

export default useFetchTours;
