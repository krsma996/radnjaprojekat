interface CarouselIndicatorProps {
  index: number;
  isActive: boolean;
}

export const CarouselIndicator: React.FC<CarouselIndicatorProps> = ({
  index,
  isActive,
}) => {
  return (
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to={index}
      className={isActive ? "active" : ""}
      aria-current={isActive ? "true" : undefined}
      aria-label={`Slide ${index + 1}`}
    ></button>
  );
};
