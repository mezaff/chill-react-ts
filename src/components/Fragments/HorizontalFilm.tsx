import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const nextFilms = [
  {
    id: 1,
    title: "Duty After School",
    rating: "4.5/5",
    imgUrl: "/images/dontLookUp.png",
  },
  {
    id: 2,
    title: "The Batman",
    rating: "4.2/5",
    imgUrl: "/images/theBatman.png",
  },
  {
    id: 3,
    title: "Blue Lock",
    rating: "4.6/5",
    imgUrl: "/images/blueLock.png",
  },
  {
    id: 4,
    title: "A Man Called Otto",
    rating: "4.4/5",
    imgUrl: "/images/aManCalledOtto.png",
  },
];

const HorizontalFilm = () => {
  return (
    <div className="flex flex-col justify-start items-start w-[320px] md:w-[1280px] my-10 md:my-20">
      <h1 className="text-white text-[20px] md:text-[32px] font-bold">
        Melanjutkan Tonton Film
      </h1>
      <Carousel className="w-full">
        <CarouselContent className="flex gap-[16px] md:gap-[24px] mt-5 w-full">
          {nextFilms.map((film) => (
            <CarouselItem
              style={{ backgroundImage: `url(${film.imgUrl})` }}
              className="basis-1/1 md:basis-1/4 flex items-end justify-between px-4 pb-3 h-[151px]  md:h-[162px] bg-cover bg-center rounded-[8px] bg-no-repeat relative after:content-[''] after:block after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-gradient-to-t after:from-[#181A1C] after:via-transparent after:to-transparent after:z-0"
              key={film.id}
            >
              <p className="text-white text-[14px] md:text-[18px] font-bold z-10">
                {film.title}
              </p>
              <p className="text-white text-[14px] md:text-[18px] z-10 flex flex-row justify-between items-center gap-[4px]">
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[12px] md:w-[16px] h-[12px] md:h-[16px]"
                />{" "}
                {film.rating}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="flex absolute left-[-15px] bg-black" />
        <CarouselNext className="flex absolute right-[-20px] bg-black" />
      </Carousel>
    </div>
  );
};

export default HorizontalFilm;
