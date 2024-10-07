import React from "react";

interface IconTextProps {
  icon: string;
  text: string;
}

export const IconText: React.FC<IconTextProps> = ({ icon, text }) => {
  return (
    <li>
      <i className={icon}></i> {text}
    </li>
  );
};
