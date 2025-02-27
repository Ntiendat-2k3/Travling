import {
  HomeIcon,
  GlobeAltIcon,
  CarIcon,
  BriefcaseIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

const navbarItems = [
  { name: "Trang chủ", path: "/", icon: <HomeIcon className="w-6 h-6 mr-2" /> },
  {
    name: "Tour trong nước",
    path: "/tour-trong-nuoc",
    icon: <GlobeAltIcon className="w-6 h-6 mr-2" />,
  },
  {
    name: "Tour nước ngoài",
    path: "/tour-nuoc-ngoai",
    icon: <GlobeAltIcon className="w-6 h-6 mr-2" />,
  },
  {
    name: "Thuê xe du lịch",
    path: "/thue-xe-du-lich",
    icon: <CarIcon className="w-6 h-6 mr-2" />,
  },
  {
    name: "Combo du lịch",
    path: "/combo-du-lich",
    icon: <BriefcaseIcon className="w-6 h-6 mr-2" />,
  },
  {
    name: "Hướng dẫn thanh toán",
    path: "/huong-dan-thanh-toan",
    icon: <CreditCardIcon className="w-6 h-6 mr-2" />,
  },
];

const Navbar = () => {
  return (
    <nav className="bg-blue-400 p-4 shadow-md">
      <div className="container mx-auto">
        <ul className="flex justify-between items-center">
          {navbarItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="text-white text-xl hover:text-blue-200 transition duration-300 flex items-center"
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
