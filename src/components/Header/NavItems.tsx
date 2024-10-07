import { Link } from "react-router-dom";

export const NavItems: React.FC<{
  currentActive: string;
  setActiveLink: (link: string) => void;
}> = ({ currentActive, setActiveLink }) => {
  const navLinks = [
    { name: "Početna", path: "/" },
    { name: "O nama", path: "/Onama" },
    { name: "Spomenici", path: "/Spomenici" },
    { name: "Ostalo", path: "/Ostalo" },
    { name: "Cene", path: "/Cene" },
    { name: "Usluge", path: "/Usluge" },
    { name: "Kontakt", path: "/Kontakt" },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <li key={link.name} className="nav-item navbar-font-custom">
          <button onClick={() => setActiveLink(link.name)}>
            <Link
              to={link.path}
              className={`nav-link btn ${
                currentActive === link.name ? "active-dugme" : ""
              }`}>
              {link.name}
            </Link>
          </button>
        </li>
      ))}
    </>
  );
};
