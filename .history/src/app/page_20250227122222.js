"use client";
import CardTour from "./components/CardTour";
import useTours from "./utils/useTours";
import Header from "./components/Header";
import SectionHero from "./components/section/SectionHero";

const HomePage = () => {
  const { tours, loading, error } = useTours(); // fetch

  return (
    <div>
      {/* Header */}
      <div className="absolute top-0 left-0 w-full p-4 shadow-md z-10 flex items-center">
        <h2 className="absolute text-2xl font-bold ml-5 text-blue-500">
          Travling!
        </h2>
        <Header />
      </div>

      <SectionHero />

      {/* Main Section - Tour Bán Chạy */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Tour Bán Chạy
        </h2>
        {loading ? (
          <p>Đang tải...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <CardTour key={tour.id} tour={tour} />
            ))}
          </div>
        )}
      </main>

      <footer></footer>
    </div>
  );
};

export default HomePage;
