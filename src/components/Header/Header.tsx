import "../../css/app.css";
import logoRadnja from "../../slike/logo-radnja.png";
import { Navbar } from "./Navbar";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const Header: React.FC<{}> = () => {
  return (
    <nav className="navbar navbar-expand-lg header-navbar-bg-color">
      <a className="navbar-brand" href="/home">
        <img src={logoRadnja} alt="Moja Firma" />
      </a>
      <span className="logo-text-img">Kamenorezac Kosta</span>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Navbar />
    </nav>
  );
};
