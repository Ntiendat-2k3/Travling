import { Suspense, lazy } from "react";
import Head from "next/head";
import LoadingHamster from "../utils/loading/LoadingHamster";

const CarRentalPage = lazy(() => import("./component/CarRentalPage"));
// const CarRentalPage = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(import("./component/CarRentalPage"));
//     }, 10000); // Trì hoãn tải component trong 3 giây (3000ms)
//   });
// });

export const metadata = {
  title: "Thuê xe tour du lịch",
  description: "Thuê xe tour du lịch",
  keywords: "Thuê xe tour du lịch",
  openGraph: {
    title: "Thuê xe tour du lịch",
    description: "Thuê xe tour du lịch",
    image: "https://travling-two.vercel.app/assets/images/bgshare.jpg", // Cập nhật đường dẫn đầy đủ cho ảnh
    url: "https://travling-two.vercel.app/rentals", // URL đầy đủ cho trang
  },
};

const page = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta
          name="twitter:description"
          content={metadata.openGraph.description}
        />
        <meta name="twitter:image" content={metadata.openGraph.image} />
      </Head>

      <Suspense
        fallback={
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex items-center justify-center z-50">
            <LoadingHamster />
          </div>
        }
      >
        <CarRentalPage />
      </Suspense>
    </>
  );
};

export default page;
