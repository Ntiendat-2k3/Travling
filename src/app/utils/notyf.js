import { useEffect } from "react";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

// Hàm để tạo Notyf
export const useNotyf = () => {
  useEffect(() => {
    // Tạo instance của Notyf
    const notyf = new Notyf({
      duration: 2000,
      position: { x: "center", y: "bottom" },
      ripple: true, // Hiệu ứng ripple
    });

    // Return các hàm thông báo
    return {
      showSuccess: (message) => notyf.success(message), // Thông báo thành công
      showError: (message) => notyf.error(message), // Thông báo lỗi
      showInfo: (message) => notyf.info(message), // Thông báo thông tin
      showWarning: (message) => notyf.warning(message), // Thông báo cảnh báo
    };
  }, []); // Chạy 1 lần khi component mount
};
