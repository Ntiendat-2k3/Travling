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
              className="relative"
              onMouseEnter={() => item.dropdown && setDropdownOpen(index)} // Mở dropdown khi hover vào
              onMouseLeave={() => item.dropdown && setDropdownOpen(null)} // Đóng dropdown khi rời chuột
            >
              <div className="flex items-center cursor-pointer">
                <Link
                  href={item.path}
                  className="text-gray80 text-xl flex items-center transition duration-300"
                >
                  {item.icon}
                  <span className="relative">
                    <span className="group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent">
                      {item.name}
                    </span>
                  </span>
                  {item.dropdown && (
                    <FaChevronDown className="ml-2 w-4 h-4 text-gray-500" />
                  )}
                </Link>

                {/* Chuyển trạng thái `dropdownOpen` vào DropdownMenu */}
                {item.dropdown && dropdownOpen === index && (
                  <DropdownMenu
                    items={item.dropdown}
                    isDropdownOpen={dropdownOpen === index}
                    className="top-[20px]"
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
