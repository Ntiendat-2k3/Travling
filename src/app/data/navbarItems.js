import {
  FaHome,
  FaGlobe,
  FaCar,
  FaBriefcase,
  FaCreditCard,
} from "react-icons/fa";

export const navbarItems = [
  {
    name: "Trang chủ",
    path: "/",
    icon: <FaHome className="w-5 h-5 mr-2" />,
  },
  {
    name: "Tour trong nước",
    path: "/tours/domestic",
    icon: <FaGlobe className="w-5 h-5 mr-2" />,
    dropdown: [
      { name: "Tour Hà Nội", path: "/tours/domestic" },
      { name: "Tour Sài Gòn", path: "/tours/domestic" },
      { name: "Tour Đà Nẵng", path: "/tours/domestic" },
    ],
  },
  {
    name: "Tour nước ngoài",
    path: "/tours/international",
    icon: <FaGlobe className="w-5 h-5 mr-2" />,
  },
  {
    name: "Thuê xe du lịch",
    path: "/rentals",
    icon: <FaCar className="w-5 h-5 mr-2" />,
  },
  {
    name: "Combo du lịch",
    path: "/combo-du-lich",
    icon: <FaBriefcase className="w-5 h-5 mr-2" />,
  },
  {
    name: "Hướng dẫn thanh toán",
    path: "/huong-dan-thanh-toan",
    icon: <FaCreditCard className="w-5 h-5 mr-2" />,
  },
];
