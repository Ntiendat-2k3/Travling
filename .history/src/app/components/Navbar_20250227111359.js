import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { navbarItems } from "../data/navbarItems";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <nav>
      <div className="container mx-auto">
        <ul className="flex justify-between items-center space-x-6">
          {navbarItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
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

                {/* Thanh tiến trình (Progress Bar) */}
                <div className="absolute bottom-[-6px] left-0 h-1 bg-blue-400 w-0 group-hover:w-1/2 transition-all duration-500 rounded "></div>
              </div>

              {/* Chuyển trạng thái `dropdownOpen` vào DropdownMenu */}
              {item.dropdown && dropdownOpen === index && (
                <DropdownMenu
                  items={item.dropdown}
                  isDropdownOpen={dropdownOpen === index}
                  className="top-[20px]"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
