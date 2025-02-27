import { useState } from "react";
import Link from "next/link";

const DropdownMenu = ({ items, position }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div className="flex items-center cursor-pointer">
        {position === "left" && (
          <div
            className={`absolute ${
              isDropdownOpen ? "opacity-100" : "opacity-0"
            } transition-all duration-300 ease-in-out`}
          >
            <ul className="space-y-2 p-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {items.map((subItem, index) => (
                <li key={index}>
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
    </div>
  );
};

export default DropdownMenu;
