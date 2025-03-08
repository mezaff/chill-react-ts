import Hero from "@/components/Fragments/Hero";
import HorizontalFilm from "@/components/Fragments/HorizontalFilm";
import VerticalFilm from "@/components/Fragments/VerticalFilm";
import AppLayout from "@/components/Layouts/AppLayout";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
