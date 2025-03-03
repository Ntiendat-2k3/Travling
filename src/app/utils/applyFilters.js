const applyFilters = (tours, filters) => {
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

  return filtered;
};

export default applyFilters;
