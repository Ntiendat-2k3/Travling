import {
  FaHome,
  FaGlobe,
  FaCar,
  FaBriefcase,
  FaCreditCard,
} from "react-icons/fa";

const navbarItems = [
  { name: "Trang chủ", path: "/", icon: <FaHome className="w-5 h-5 mr-2" /> },
  {
    name: "Tour trong nước",
    path: "/tour-trong-nuoc",
    icon: <FaGlobe className="w-5 h-5 mr-2" />,
    dropdown: [
      { name: "Tour Hà Nội", path: "/tour-ha-noi" },
      { name: "Tour Sài Gòn", path: "/tour-sai-gon" },
      { name: "Tour Đà Nẵng", path: "/tour-da-nang" },
    ],
  },
  {
    name: "Tour nước ngoài",
    path: "/tour-nuoc-ngoai",
    icon: <FaGlobe className="w-5 h-5 mr-2" />,
  },
  {
    name: "Thuê xe du lịch",
    path: "/thue-xe-du-lich",
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
