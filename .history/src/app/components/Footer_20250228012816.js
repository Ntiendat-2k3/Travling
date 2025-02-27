import {
  PhoneIcon,
  MailIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/outline"; // Import các icon cần thiết
import Link from "next/link";

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
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-blue-400 flex items-center space-x-2"
                >
                  <PhoneIcon className="h-6 w-6 text-blue-400" />
                  <span>Số điện thoại: +123 456 7890</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@example.com"
                  className="hover:text-blue-400 flex items-center space-x-2"
                >
                  <MailIcon className="h-6 w-6 text-blue-400" />
                  <span>Email: info@example.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://zalo.me/1234567890"
                  className="hover:text-blue-400 flex items-center space-x-2"
                >
                  <DevicePhoneMobileIcon className="h-6 w-6 text-blue-400" />
                  <span>Zalo: 123 456 7890</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Mạng xã hội */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Theo dõi chúng tôi</h3>
            <ul className="flex space-x-6">
              <li>
                <a href="https://facebook.com" className="hover:text-blue-400">
                  <i className="fab fa-facebook-square text-3xl"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="hover:text-blue-400">
                  <i className="fab fa-instagram text-3xl"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="hover:text-blue-400">
                  <i className="fab fa-twitter text-3xl"></i>
                </a>
              </li>
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
