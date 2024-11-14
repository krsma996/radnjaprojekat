import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./footer.css";

export const Footer: React.FC<object> = () => {
  const [selectedSection, setSelectedSection] = useState<string>("");

  // Kada se promeni selectedSection, automatski skroluj na vrh stranice
  useEffect(() => {
    if (selectedSection) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedSection]);

  const handleLinkClick = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <footer className="footer footer-body mt-2">
      <div className="footer-top">
        <div className="container">
          <div className="row row-footer">
            <div className="col-lg-4 col-md-3 col-sm-6">
              <h3>VAŽNO</h3>
              <p className="mt-4">
                Naša firma specijalizovana je za obradu svih <br />
                vrsta mermera i granita.
                <br />
                Ponosimo se izradom nadgrobnih spomenika, <br />
                kao i svim vrstama graviranja na kamenu. <br />
                Takođe, nudimo usluge izrade i montaže <br />
                poklopnih ploča, kao i rekonstrukciju i <br />
                popravku postojećih kamenih elemenata. <br />
                Sa dugogodišnjim iskustvom i posvećenošću kvalitetu, <br />
                garantujemo zadovoljenje svih vaših potreba i želja.
              </p>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-6">
              <h3>KATEGORIJE</h3>
              <ul className="list-unstyled mt-3">
                <li>
                  <Link
                    to="/"
                    className="footer-category-links"
                    onClick={() => handleLinkClick("Početna")}
                  >
                    <i className="bi bi-arrow-right me-2" /> Početna
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Onama"
                    className="footer-category-links"
                    onClick={() => handleLinkClick("O Nama")}
                  >
                    <i className="bi bi-arrow-right me-2" /> O Nama
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Spomenici"
                    className="footer-category-links"
                    onClick={() => handleLinkClick("Spomenici")}
                  >
                    <i className="bi bi-arrow-right me-2" /> Spomenici
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Ostalo"
                    className="footer-category-links"
                    onClick={() => handleLinkClick("Ostalo")}
                  >
                    <i className="bi bi-arrow-right me-2" /> Ostalo
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Cene"
                    className="footer-category-links"
                    onClick={() => handleLinkClick("Cene")}
                  >
                    <i className="bi bi-arrow-right me-2" /> Cene
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Kontakt"
                    className="footer-category-links"
                    onClick={() => handleLinkClick("Kontakt")}
                  >
                    <i className="bi bi-arrow-right me-2" /> Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-6">
              <h3>KONTAKT</h3>
              <p className="mt-4">
                Možete nas kontaktirati svakim danom <br />
                Telefon: 060 - 313 - 441 - 64 <br />
                Radno vreme: 8.00 - 16.00 <br />
                Adresa: Bežanijska kosa 2b <br />
                Email: kosta.saveski@gmail.com
              </p>
              <h6 className="mt-3">
                Nalazimo se na samom ulasku u Bežanijsko groblje
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <p className="foopter-paragraf">
          © 2024 Kamenorezac Kosta. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
};
