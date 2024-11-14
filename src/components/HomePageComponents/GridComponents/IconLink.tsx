import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface IconLinkProps {
  href: string;
}

export const IconLink: React.FC<IconLinkProps> = ({ href }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(location.pathname === href);
  }, [location, href]);

  const handleClick = () => {
    window.scrollTo(0, 0); // Skroluje na vrh stranice
  };

  return (
    <i className={`bi bi-arrow-right ${isActive ? "active" : ""}`}>
      <Link to={href} className="arrow-link" onClick={handleClick}>
        Pročitaj više
      </Link>
    </i>
  );
};
