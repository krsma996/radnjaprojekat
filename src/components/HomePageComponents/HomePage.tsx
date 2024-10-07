import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Carousel } from "./CarouselMain/Carousel";
import { CarouselNearFooter } from "./CarouselNearFooter/CarouselNearFooter";
import { MainGrid } from "./GridComponents/MainGrid";

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Carousel />
      <MainGrid />
      <CarouselNearFooter />
      <Footer />
    </>
  );
};
