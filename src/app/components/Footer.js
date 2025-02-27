import Link from "next/link";
import { contactInfo } from "../data/contactInfo";
import { socialLinks } from "../data/socialLinks";
import Image from "next/image";

const Footer = () => {
  const quickLinks = [
    { href: "/", text: "Trang chủ" },
    { href: "/about", text: "Giới thiệu" },
    { href: "/privacy-policy", text: "Chính sách bảo mật" },
    { href: "/terms-of-service", text: "Điều khoản sử dụng" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Liên kết nhanh */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Liên kết nhanh</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-blue-400">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-4">
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
            <h3 className="font-semibold text-xl mb-4">Theo dõi chúng tôi</h3>
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
          <div className="text-center sm:text-left mt-6 sm:mt-0">
            <Image
              src="/assets/images/thankyou.gif"
              alt="Logo"
              width={200}
              height={200}
            ></Image>
            <p className="mt-4 text-sm">
              &copy; 2025 <span className="text-blue-500">Travling!</span>. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
