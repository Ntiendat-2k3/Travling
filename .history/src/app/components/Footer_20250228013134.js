import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"; // Import các icon từ react-icons

const Footer = () => {
  // Thông tin liên hệ và các mạng xã hội
  const contactInfo = [
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

  const socialLinks = [
    {
      icon: <FaFacebook className="text-3xl text-blue-400" />,
      link: "https://facebook.com",
    },
    {
      icon: <FaInstagram className="text-3xl text-blue-400" />,
      link: "https://instagram.com",
    },
    {
      icon: <FaTwitter className="text-3xl text-blue-400" />,
      link: "https://twitter.com",
    },
  ];

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Liên kết nhanh */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liên kết nhanh</h3>
            <ul>
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-400">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-blue-400">
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Thông tin liên hệ</h3>
            <ul>
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="hover:text-blue-400 flex items-center space-x-2"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mạng xã hội */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Theo dõi chúng tôi</h3>
            <ul className="flex space-x-6">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="hover:text-blue-400">
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-sm">
              &copy; 2025 Travling. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
