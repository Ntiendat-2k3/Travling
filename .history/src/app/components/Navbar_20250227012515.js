import {
  FaHome,
  FaGlobe,
  FaCar,
  FaBriefcase,
  FaCreditCard,
} from "react-icons/fa";
import Link from "next/link";

const navbarItems = [
  { name: "Trang chủ", path: "/", icon: <FaHome className="w-5 h-5 mr-2" /> },
  {
    name: "Tour trong nước",
    path: "/tour-trong-nuoc",
    icon: <FaGlobe className="w-5 h-5 mr-2" />,
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
  return (
    <nav>
      <div className="container mx-auto">
        <ul className="flex justify-between items-center space-x-6">
          {navbarItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className="text-[#808080] text-xl hover:text-dark2d transition duration-300 flex items-center"
              >
                {item.icon}
                <span className="text-lg">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
