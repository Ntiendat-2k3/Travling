import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center relative">
      {/* Ảnh nền với hiệu ứng mờ */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/images/bg.jpg)",
          filter: "blur(8px)",
        }}
      ></div>
      <div className="text-center max-w-lg relative z-10 text-white">
        <div>
          <Image
            src="/assets/images/404-error.jpg"
            alt="404 Image"
            width={800}
            height={600}
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
        <h2 className="text-2xl mb-6">Oops! Page not found.</h2>
        <p className="text-lg mb-8">
          Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
        </p>

        <Link
          href="/"
          className="py-2 px-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
