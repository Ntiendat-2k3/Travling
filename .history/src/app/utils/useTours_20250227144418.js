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
        setFilteredTours(toursData);
      } catch (err) {
        setError("Lỗi khi tải dữ liệu tours");
      } finally {
        setLoading(false);
      }
    };

    getTours();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = tours;

      if (filters.location.length > 0) {
        filtered = filtered.filter((tour) =>
          filters.location.includes(tour.location)
        );
      }

      if (filters.price.min || filters.price.max) {
        filtered = filtered.filter((tour) => {
          const price = parseFloat(tour.price.replace(/[^\d.-]/g, ""));
          const min = parseFloat(filters.price.min);
          const max = parseFloat(filters.price.max);
          return (isNaN(min) || price >= min) && (isNaN(max) || price <= max);
        });
      }

      setFilteredTours(filtered);
    };

    applyFilters();
  }, [filters, tours]);

  // Trả về locations hoặc mảng rỗng nếu không có tour
  const locations =
    tours.length > 0 ? [...new Set(tours.map((tour) => tour.location))] : [];

  return { filteredTours, loading, error, locations };
};

export default useTours;
