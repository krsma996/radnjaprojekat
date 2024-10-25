import React from "react";
import { Link } from "react-router-dom";

interface IconLinkProps {
  href: string;
}

export const IconLink: React.FC<IconLinkProps> = ({ href }) => {
  return (
    <i className="bi bi-arrow-right">
      <Link to={href} className="arrow-link">
        Pročitaj više
      </Link>
    </i>
  );
};
