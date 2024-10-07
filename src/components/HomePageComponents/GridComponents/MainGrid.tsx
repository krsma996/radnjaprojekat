import React from "react";
import { GridItem } from "./GridItem";
import { IconText } from "./IconText";
import img1 from "../../../slike/girdPanelIcon.png";

export const MainGrid: React.FC = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <GridItem
            icon={<img width="75" height="75" src={img1} alt="Icon1" />}
            title="Nadgrobni spomenici"
            content={
              <ul className="list-unstyled grid-content-font-style">
                <IconText
                  icon="bi bi-check-circle-fill"
                  text="Izrada nadgrobnih spomenika"
                />
                <IconText
                  icon="bi bi-check-circle-fill"
                  text="Izrada porodičnih grobnica"
                />
                <IconText
                  icon="bi bi-check-circle-fill"
                  text="Izrada i montaža poklopnih ploča"
                />
                <IconText
                  icon="bi bi-check-circle-fill"
                  text="Izrada opsega i staza (armirani beton)"
                />
                <IconText
                  icon="bi bi-check-circle-fill"
                  text="Graviranje na kamenu (slova, slike…)"
                />
                <IconText
                  icon="bi bi-check-circle-fill"
                  text="Rekonstrukcija i popravka"
                />
              </ul>
            }
          />

          <GridItem
            icon={
              <i className="bi bi-wallet2" style={{ fontSize: "48px" }}></i>
            }
            title="Cene nadgrobnih spomenika"
            content={
              <p className="grid-content-font-style">
                Cena prosečnog nadgrobnog spomenika varira u zavisnosti od
                nekoliko faktora, uključujući kubikažu kamena, dizajn, vrstu i
                boju materijala, završnu obradu i druge slične karakteristike.
                Različite vrste nadgrobnih spomenika, poput lučnih spomenika,
                spomenika sa oborenim ivicama, grobnica i nadgrobnih spomenika
                sa poklopnom pločom, imaju različite cenovne kategorije.
                Kamenorezačka radnja Kosta nudi širok spektar nadgrobnih
                spomenika po povoljnim i pristupačnim cenama, pružajući
                kvalitetne opcije za svaku potrebu i želju.
              </p>
            }
          />

          <GridItem
            icon={<i className="bi bi-server" style={{ fontSize: "48px" }}></i>}
            title="Usluge i oprema za spomenike"
            content={
              <ul className="list-unstyled grid-content-font-style">
                <IconText
                  icon="bi bi-check-circle-fill"
                  text="Klesanje slova, farbanje i pozlata"
                />
                <IconText
                  icon="bi bi-check-circle-fill"
                  text="Postavka rizle (mleveni kamen)"
                />
                <IconText
                  icon="bi bi-check-circle-fill"
                  text="Izrada i postavka vazni, kandila za sveće, klupa…"
                />
                <IconText
                  icon="bi bi-check-circle-fill"
                  text="Obnavljanje umetničkih slika"
                />
                <IconText
                  icon="bi bi-check-circle-fill"
                  text="Izrada i postavka slova"
                />
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};
