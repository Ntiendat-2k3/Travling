const { FaPhoneAlt, FaEnvelope } = require("react-icons/fa");

export const contactInfo = [
  {
    icon: <FaPhoneAlt className="h-6 w-6 text-blue-400" />,
    link: "tel:+1234567890",
    text: "Số điện thoại: +123 456 7890",
  },
  {
    icon: <FaEnvelope className="h-6 w-6 text-blue-400" />,
    link: "mailto:info@example.com",
    text: "Email: info@example.com",
  },
  {
    icon: <FaPhoneAlt className="h-6 w-6 text-blue-400" />,
    link: "https://zalo.me/1234567890",
    text: "Zalo: 123 456 7890",
  },
];
