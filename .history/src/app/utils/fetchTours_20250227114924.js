export const fetchTours = async () => {
  const res = await fetch("http://localhost:5555/tours");
  if (!res.ok) {
    throw new Error("Failed to fetch tours");
  }
  const data = await res.json();
  return data;
};
