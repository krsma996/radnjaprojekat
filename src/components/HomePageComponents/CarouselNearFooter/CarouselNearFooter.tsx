import React from "react";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselControls } from "./CarouselControls";
import slika1 from "../../../slike/spomenici/1.jpg";
import slika2 from "../../../slike/spomenici/2.jpg";
import slika3 from "../../../slike/spomenici/3.jpg";
import slika4 from "../../../slike/spomenici/4.jpg";
import slika5 from "../../../slike/spomenici/5.jpg";
import slika6 from "../../../slike/spomenici/6.jpg";
import slika7 from "../../../slike/spomenici/7.jpg";
import slika8 from "../../../slike/spomenici/8.jpg";

export const CarouselNearFooter: React.FC = () => {
  const slide1Images = [
    {
      src: slika1,
      alt: "monument 1",
      style: { width: "650px", height: "450px" },
    },
    {
      src: slika2,
      alt: "monument 2",
      style: { width: "650px", height: "450px" },
    },
    {
      src: slika3,
      alt: "monument 3",
      style: { width: "650px", height: "450px" },
    },
    {
      src: slika4,
      alt: "monument 4",
      style: { width: "650px", height: "450px" },
    },
  ];

  const slide2Images = [
    {
      src: slika5,
      alt: "monument 5",
      style: { width: "650px", height: "450px" },
    },
    {
      src: slika6,
      alt: "monument 6",
      style: { width: "650px", height: "450px" },
    },
    {
      src: slika7,
      alt: "monument 7",
      style: { width: "650px", height: "450px" },
    },
    {
      src: slika8,
      alt: "monument 8",
      style: { width: "650px", height: "450px" },
    },
  ];

  return (
    <div className="container justify-content-center mt-5">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <CarouselSlide
            images={slide1Images}
            isActive={true}
            mobileImage={{
              src: slika3,
              alt: "monument 1",
              style: { width: "5px", height: "300px" },
            }}
          />
          <CarouselSlide
            images={slide2Images}
            isActive={false}
            mobileImage={{
              src: slika7,
              alt: "monument 5",
              style: { width: "20px", height: "300px" },
            }}
          />
        </div>
        <CarouselControls target="#carouselExampleSlidesOnly" />
      </div>
    </div>
  );
};
