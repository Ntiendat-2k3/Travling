import {
  FaHome,
  FaGlobe,
  FaCar,
  FaBriefcase,
  FaCreditCard,
  FaChevronDown,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

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

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null); // Quản lý trạng thái mở của mỗi dropdown

  return (
    <nav>
      <div className="container mx-auto">
        <ul className="flex justify-between items-center space-x-6">
          {navbarItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => item.dropdown && setDropdownOpen(index)} // Mở dropdown khi hover vào
              onMouseLeave={() => item.dropdown && setDropdownOpen(null)} // Đóng dropdown khi rời chuột
            >
              <div className="flex items-center cursor-pointer">
                <Link
                  href={item.path}
                  className="text-gray80 text-xl hover:text-dark2d transition duration-300 flex items-center"
                >
                  {item.icon}
                  <span className="text-lg">{item.name}</span>
                  {item.dropdown && (
                    <FaChevronDown className="ml-2 w-4 h-4 text-gray-500" />
                  )}
                </Link>

                {/* Chuyển trạng thái `dropdownOpen` vào DropdownMenu */}
                {item.dropdown && dropdownOpen === index && (
                  <DropdownMenu
                    items={item.dropdown}
                    isDropdownOpen={dropdownOpen === index}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
