import Link from "next/link";
import { contactInfo } from "../data/contactInfo";
import { socialLinks } from "../data/socialLinks";

const Footer = () => {
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
