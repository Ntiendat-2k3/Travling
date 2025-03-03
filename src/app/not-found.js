import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-6">Oops! Page not found.</h2>
        <p className="text-lg mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        {/* Add a nice image or icon */}
        <div className="mb-6">
          <Image
            src="https://via.placeholder.com/400x300?text=404+Image"
            alt="404 Image"
            fill
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>

        {/* Link back to home page */}
        <Link
          href="/"
          className="py-2 px-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
