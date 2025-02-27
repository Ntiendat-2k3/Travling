import { useState } from "react";
import Link from "next/link";

const DropdownMenu = ({ items, isDropdownOpen }) => {
  return (
    <div
      className={`absolute left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out ${
        isDropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <ul className="space-y-2 p-2">
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
  );
};

export default DropdownMenu;
