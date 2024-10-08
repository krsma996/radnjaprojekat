import { Carousel } from "./CarouselMain/Carousel";
import { CarouselNearFooter } from "./CarouselNearFooter/CarouselNearFooter";
import { MainGrid } from "./GridComponents/MainGrid";

export const HomePage: React.FC = () => {
  return (
    <>
      <Carousel />
      <MainGrid />
      <CarouselNearFooter />
    </>
  );
};
