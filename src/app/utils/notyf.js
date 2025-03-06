import { Notyf } from "notyf";
import "notyf/notyf.min.css";

// Tạo instance của Notyf
const notyf = new Notyf({
  duration: 2000, // Thời gian thông báo hiển thị (3 giây)
  position: { x: "center", y: "bottom" },
  ripple: true, // Hiệu ứng ripple
});

// Các hàm hỗ trợ thông báo
export const showSuccess = (message) => {
  notyf.success(message); // Thông báo thành công
};

export const showError = (message) => {
  notyf.error(message); // Thông báo lỗi
};

export const showInfo = (message) => {
  notyf.info(message); // Thông báo thông tin
};

export const showWarning = (message) => {
  notyf.warning(message); // Thông báo cảnh báo
};
