import React from "react";
import { CarouselImage } from "./CarouselImage";

interface CarouselSlideProps {
  images: { src: string; alt: string; style: React.CSSProperties }[];
  isActive: boolean;
  mobileImage: { src: string; alt: string; style: React.CSSProperties };
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({
  images,
  isActive,
  mobileImage,
}) => {
  return (
    <div
      className={`carousel-item ${isActive ? "active" : ""}`}
      data-bs-interval="4000"
    >
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-3 d-none d-md-block">
            <CarouselImage
              src={image.src}
              alt={image.alt}
              style={image.style}
            />
          </div>
        ))}
        {/* Za mobilne uređaje, prikazujemo jednu sliku */}
        <div className="col-12 d-md-none">
          <CarouselImage
            src={mobileImage.src}
            alt={mobileImage.alt}
            style={mobileImage.style}
          />
        </div>
      </div>
    </div>
  );
};
