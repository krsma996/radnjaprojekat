import React from "react";
import { IconLink } from "./IconLink";

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  link: string;
}

export const GridItem: React.FC<GridItemProps> = ({
  icon,
  title,
  content,
  link,
}) => {
  return (
    <div className="col-sm">
      {icon}
      <h4 className="mt-2 mb-4">{title}</h4>
      {content}
      <IconLink href={link} />
    </div>
  );
};
