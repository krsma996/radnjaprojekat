interface CarouselSlideProps {
  src: string;
  alt: string;
  isActive: boolean;
  interval?: number;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({
  src,
  alt,
  isActive,
  interval,
}) => {
  return (
    <div
      className={`carousel-item ${isActive ? "active" : ""}`}
      data-bs-interval={interval}
    >
      <img
        height="732"
        width="301"
        src={src}
        className="d-block w-100"
        alt={alt}
      />
    </div>
  );
};
