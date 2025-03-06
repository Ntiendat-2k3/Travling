import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const useNotyf = () => {
  const notyf = new Notyf({
    duration: 3000,
    position: { x: "center", y: "bottom" },
    dismissible: true,
  });

  const showSuccess = (message) => {
    notyf.success(message);
  };

  const showError = (message) => {
    notyf.error(message);
  };

  return { showSuccess, showError };
};

export { useNotyf };
