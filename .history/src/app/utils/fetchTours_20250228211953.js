export const fetchTours = async () => {
  // const res = await fetch(
  //   "https://67c13ca761d8935867e24598.mockapi.io/tourist"
  // );
  const res = await fetch("localhost:5000/tours");
  if (!res.ok) {
    throw new Error("Failed to fetch tours");
  }
  const data = await res.json();
  return data;
};
