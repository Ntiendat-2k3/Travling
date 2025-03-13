// src/hooks/useNotyf.js
import { useState, useEffect } from "react";
import { Notyf } from "notyf";
import "notyf/notyf.min.css"; // Import CSS của notyf

const useNotyf = () => {
  const [notyf, setNotyf] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Kiểm tra nếu đang chạy trên client (window tồn tại)
      const notyfInstance = new Notyf({
        duration: 3000, // Thời gian hiển thị thông báo (3 giây)
        position: {
          x: "center", // Vị trí thông báo: căn giữa theo chiều ngang
          y: "bottom", // Vị trí thông báo: căn dưới cùng theo chiều dọc
        },
        dismissible: true, // Cho phép đóng thông báo thủ công
      });
      setNotyf(notyfInstance); // Cập nhật notyf vào state
    }
  }, []); // Chạy một lần khi component mount

  const showSuccess = (message) => {
    if (notyf) {
      notyf.success(message);
    }
  };

  const showError = (message) => {
    if (notyf) {
      notyf.error(message);
    }
  };

  return {
    showSuccess,
    showError,
  };
};

export default useNotyf;
