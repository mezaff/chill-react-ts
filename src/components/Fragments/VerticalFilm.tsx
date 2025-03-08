import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface FilmProps {
  type: string;
  title: string;
}

const topSeries = [
  {
    id: 1,
    imgUrl: "/images/suzume.png",
    status: "new",
  },
  {
    id: 2,
    imgUrl: "/images/jurassicWorld.png",
    status: "old",
  },
  {
    id: 3,
    imgUrl: "/images/sonic.png",
    status: "old",
  },
  {
    id: 4,
    imgUrl: "/images/TheBatmanPotrait.png",
    status: "old",
  },
  {
    id: 5,
    imgUrl: "/images/bigHero.png",
    status: "top",
  },
];

const trendingFilms = [
  {
    id: 1,
    imgUrl: "/images/theTomorrow.png",
    status: "top",
  },
  {
    id: 2,
    imgUrl: "/images/quantumania.png",
    status: "top",
  },
  {
    id: 3,
    imgUrl: "/images/guardians.png",
    status: "top",
  },
  {
    id: 4,
    imgUrl: "/images/aManCalledOttoPotrait.png",
    status: "top",
  },
  {
    id: 5,
    imgUrl: "/images/littleMermaid.png",
    status: "top",
  },
];

const newRelease = [
  {
    id: 1,
    imgUrl: "/images/littleMermaid.png",
    status: "top",
  },
  {
    id: 2,
    imgUrl: "/images/dutyAfterSchool.png",
    status: "new",
  },
  {
    id: 3,
    imgUrl: "/images/bigHero.png",
    status: "top",
  },
  {
    id: 4,
    imgUrl: "/images/TheBatmanPotrait.png",
    status: "new",
  },
  {
    id: 5,
    imgUrl: "/images/missing.png",
    status: "",
  },
];

const VerticalFilm = (props: FilmProps) => {
  const { type, title } = props;

  const getFilms = () => {
    if (type === "topSeries") {
      return topSeries;
    } else if (type === "trendingFilms") {
      return trendingFilms;
    } else if (type === "newRelease") {
      return newRelease;
    }
  };

  return (
    <div
      className="flex flex-col justify-start items-start w-[320px] md:w-[1280px] md:mb-15"
      id={type}
    >
      <h1 className="text-white text-[20px] md:text-[32px] font-bold">
        {title}
      </h1>
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="flex gap-[16px] md:gap-[24px] p-5 md:p-10 w-full">
            {getFilms()?.map((film) => (
              <div key={film.id}>
                <div
                  style={{ backgroundImage: `url(${film.imgUrl})` }}
                  className={`flex ${
                    film.status === "new" &&
                    "justify-start pt-[7.65px] ps-[7.65px] md:pt-[16px] md:ps-[16px]"
                  } ${
                    film.status === "top" &&
                    "justify-end pe-[3.99px] md:pe-[12px]"
                  } items-start h-[143px] w-[95.6px] md:w-[234px]  md:h-[365px] bg-cover bg-center rounded-[8px] bg-no-repeat `}
                  key={film.id}
                >
                  {film.status === "new" ? (
                    <div className="text-white text-center text-[5.74px] md:text-[14px] font-bold rounded-xl bg-[#0F1E93] py-[1.91px] px-[4.78px] md:py-[4px] md:px-[10px]">
                      Episode Baru
                    </div>
                  ) : null}

                  {film.status === "top" ? (
                    <div className="text-white text-center text-[5.74px] md:text-[14px] rounded-tr-xs rounded-bl-xs md:rounded-tr-md md:rounded-bl-md bg-[#B71F1D] p-[1.91px] md:p-[4px]">
                      Top <br />
                      10
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="flex absolute left-[-15px] bg-black" />
        <CarouselNext className="flex absolute right-[-20px] bg-black" />
      </Carousel>
    </div>
  );
};

export default VerticalFilm;
