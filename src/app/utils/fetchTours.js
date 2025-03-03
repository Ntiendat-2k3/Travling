import { API } from "../config/config";

export const fetchTours = async () => {
  const res = await fetch(`${API}`);
  if (!res.ok) {
    throw new Error("Failed to fetch tours");
  }
  const data = await res.json();
  return data;
};
