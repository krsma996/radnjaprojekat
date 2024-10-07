import React from "react";

interface CarouselImageProps {
  src: string;
  alt: string;
  style: React.CSSProperties;
  classes?: string;
}

export const CarouselImage: React.FC<CarouselImageProps> = ({
  src,
  alt,
  style,
  classes = "d-block w-100",
}) => {
  return <img src={src} style={style} className={classes} alt={alt} />;
};
