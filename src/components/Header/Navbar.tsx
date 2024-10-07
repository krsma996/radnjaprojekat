import { useState } from "react";
import { NavItems } from "./NavItems";

export const Navbar: React.FC = () => {
  const [currentActive, setCurrentActive] = useState("");

  // Funkcija koja menja aktivno dugme
  function setActiveLink(link: string) {
    setCurrentActive(link);
  }

  return (
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <NavItems currentActive={currentActive} setActiveLink={setActiveLink} />
      </ul>
    </div>
  );
};
