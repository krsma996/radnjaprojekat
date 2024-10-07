import "../../../css/app.css";
import carousel1 from "../../../slike/carouselSlika1.png";
import carousel2 from "../../../slike/CarouselSlika2.png";
import carousel3 from "../../../slike/3.jpg";
import { CarouselIndicator } from "./CarouselIndicator";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselControls } from "./CarouselControls";
import { CarouselContent } from "./CarouselContent";

export const Carousel: React.FC = () => {
  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide custom-carousel">
        <div className="carousel-indicators">
          <CarouselIndicator index={0} isActive={true} />
          <CarouselIndicator index={1} isActive={false} />
          <CarouselIndicator index={2} isActive={false} />
        </div>

        <div className="carousel-inner">
          <CarouselSlide
            src={carousel1}
            alt="Car1"
            isActive={true}
            interval={2000}
          />
          <CarouselSlide
            src={carousel2}
            alt="Carousel2"
            isActive={false}
            interval={2000}
          />
          <CarouselSlide
            src={carousel3}
            alt="Carousel3"
            isActive={false}
            interval={2000}
          />
        </div>

        <CarouselControls />
      </div>

      <CarouselContent />
    </div>
  );
};
