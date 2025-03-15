import TourPage from "../component/TourPage";

export async function generateMetadata({ params }) {
  const { type } = await params;

  const pageTitle = type === "domestic" ? "Tour Trong Nước" : "Tour Nước Ngoài";
  const pageDescription =
    type === "domestic"
      ? "Khám phá những tour du lịch nội địa hấp dẫn"
      : "Khám phá những tour du lịch quốc tế đặc sắc";

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
    },
    twitter: {
      title: pageTitle,
      description: pageDescription,
    },
  };
}

const ToursByType = () => {
  return <TourPage />;
};

export default ToursByType;
