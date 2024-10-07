import React from "react";
import "./carousel.css";

interface CarouselControlsProps {
  target: string;
}

export const CarouselControls: React.FC<CarouselControlsProps> = ({
  target,
}) => {
  return (
    <>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={target}
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon prethodni-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={target}
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon sledeci-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </>
  );
};
