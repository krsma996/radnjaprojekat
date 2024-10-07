import React from "react";

interface IconLinkProps {
  href: string;
}

export const IconLink: React.FC<IconLinkProps> = ({ href }) => {
  return (
    <i className="bi bi-arrow-right">
      <a href={href} className="arrow-link">
        Pročitaj više
      </a>
    </i>
  );
};
