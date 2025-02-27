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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav>
      <div className="container mx-auto">
        <ul className="flex justify-between items-center space-x-6">
          {navbarItems.map((item, index) => (
            <li key={index} className="relative">
              {item.dropdown ? (
                <div
                  className="flex items-center cursor-pointer"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link
                    href={item.path}
                    className="text-gray80 text-xl hover:text-dark2d transition duration-300 flex items-center"
                  >
                    {item.icon}
                    <span className="text-lg">{item.name}</span>
                    <FaChevronDown className="ml-2 w-4 h-4 text-gray-500" />
                  </Link>
                  {isDropdownOpen && (
                    <div className="absolute left-0 top-[22px] mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      <ul className="space-y-2 p-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.path}
                  className="text-gray80 text-xl hover:text-dark2d transition duration-300 flex items-center"
                >
                  {item.icon}
                  <span className="text-lg">{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
