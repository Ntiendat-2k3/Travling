import {
  FaHome,
  FaGlobe,
  FaCar,
  FaBriefcase,
  FaCreditCard,
} from "react-icons/fa";
import Link from "next/link";

const navbarItems = [
  { name: "Trang chủ", path: "/", icon: <FaHome className="w-6 h-6 mr-2" /> },
  {
    name: "Tour trong nước",
    path: "/tour-trong-nuoc",
    icon: <FaGlobe className="w-6 h-6 mr-2" />,
  },
  {
    name: "Tour nước ngoài",
    path: "/tour-nuoc-ngoai",
    icon: <FaGlobe className="w-6 h-6 mr-2" />,
  },
  {
    name: "Thuê xe du lịch",
    path: "/thue-xe-du-lich",
    icon: <FaCar className="w-6 h-6 mr-2" />,
  },
  {
    name: "Combo du lịch",
    path: "/combo-du-lich",
    icon: <FaBriefcase className="w-6 h-6 mr-2" />,
  },
  {
    name: "Hướng dẫn thanh toán",
    path: "/huong-dan-thanh-toan",
    icon: <FaCreditCard className="w-6 h-6 mr-2" />,
  },
];

const Navbar = () => {
  return (
    <na>
      <div className="container mx-auto">
        <ul className="flex justify-between items-center space-x-6">
          {navbarItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className="text-white text-xl hover:text-blue-200 transition duration-300 flex items-center"
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </na>
  );
};

export default Navbar;
