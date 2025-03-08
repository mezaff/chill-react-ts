import Hero from "@/components/Fragments/Hero";
import HorizontalFilm from "@/components/Fragments/HorizontalFilm";
import Navbar from "@/components/Fragments/Navbar";
import VerticalFilm from "@/components/Fragments/VerticalFilm";
import AppLayout from "@/components/Layouts/AppLayout";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <AppLayout>
        <Hero bgImg="/images/hero-bg.png" />
        <HorizontalFilm />
        <VerticalFilm
          type="topSeries"
          title="Top Rating Film dan Series Hari ini"
        />
        <VerticalFilm type="trendingFilms" title="Film Trending" />
        <VerticalFilm type="newRelease" title="Rilis Baru" />
      </AppLayout>
    </>
  );
};

export default HomePage;
