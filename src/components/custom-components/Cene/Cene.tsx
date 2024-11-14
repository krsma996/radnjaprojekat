import slikaCene from "../../../slike/1proba.jpg";
import slikaCene2 from "../../../slike/1.jpg";
import "./cene.css";

export const Cene: React.FC = () => {
  return (
    <div className="cene-container">
      <h1 className="cene-heading text-align-center">
        CENE PROSEČNOG NADGROBNOG SPOMENIKA
      </h1>
      <p className="cene-carousel-text mt-2 text-align-center">
        - Kamenorezačka radnja Kosta nudi veliki izbor - nadgrobnih spomenika po
        - povoljnim i pristupačnim cenama
      </p>
      <div className="cene-row">
        <div className="cene-col">
          <p className="cene-onama-text mt-5 text-align-center">
            Cena nadgrobnog spomenika zavisi od više faktora, uključujući:
          </p>
          <ul className="cene-list mt-4">
            <li>Zapreminu kamena</li>
            <li>Dizajn</li>
            <li>
              Vrstu i boju materijala (granit, bela, siva, crna, crvena i druge
              boje)
            </li>
            <li>Završnu obradu</li>
          </ul>
          <p className="cene-onama-text mt-3 text-align-center">
            Različite vrste spomenika, kao što su:
          </p>
          <ul className="cene-list mt-4">
            <li>Lučni spomenici</li>
            <li>Spomenici sa zakošenim ivicama</li>
            <li>Grobnice</li>
            <li>Nadgrobni spomenici sa poklopnom pločom</li>
          </ul>
          <p className="cene-onama-text mt-3 text-align-center">
            Svi oni mogu imati različite cene, u zavisnosti od složenosti
            izrade. Granit je jedan od najpopularnijih materijala zbog svoje
            izdržljivosti i bogatog izbora boja. Cena nadgrobnog spomenika može
            varirati u zavisnosti od vrste granita.
          </p>
          <ul className="cene-list mt-4">
            <li>Najpovoljnija opcija je tamnosivi granit impala</li>
            <li>
              Elegantni crni graniti poput bengala i gune su skuplje opcije
            </li>
            <li>Postoji mogućnost personalizacije (ugradnja slike i vaze)</li>
          </ul>
          <p className="cene-onama-text mt-3 text-align-center">
            Naš stručni tim vam stoji na raspolaganju kako bi vam pomogao da
            odaberete optimalno rešenje koje odgovara vašim potrebama i budžetu.
            Za više informacija ili konsultacije, slobodno nas kontaktirajte.
          </p>
        </div>
        <div className="cene-col">
          <img
            src={slikaCene}
            alt="slikaCene"
            className="mt-5 cene-image"
            width="100%"
            height="450px"
          />
        </div>
      </div>
      <div className="cene-row">
        <div className="cene-col">
          <img
            src={slikaCene2}
            alt="slikaCene2"
            className="cene-image"
            width="100%"
            height="450px"
          />
        </div>
        <div className="cene-col">
          <p className="cene-onama-text mt-3 text-align-center">
            Pored nadgrobnih spomenika, nudimo širok spektar umetničkih
            proizvoda, uključujući:
          </p>
          <ul className="cene-list-styled">
            <li>Umetničke slike gravirane u kamenu</li>
            <li>Vaze</li>
            <li>Skulpture</li>
            <li>Livena slova</li>
            <li>Liveni ramovi za slike</li>
            <li>Kandila od granita</li>
            <li>Klupe</li>
          </ul>
          <p className="cene-onama-text mt-3 text-align-center">
            Umetničke slike su gravirane direktno u granit, što osigurava
            njihovu dugotrajnost i otpornost na sve vremenske uslove. <br />
            Gravura se može izvesti direktno na pločama spomenika ili na manjim
            pločama koje se lepe na njih. <br />
            Pločice za slike su izrađene od najkvalitetnijeg crnog granita, a
            postojanost gravure je jednaka dugotrajnosti samog granita. <br />
            Takođe, nudimo usluge graviranja slova za nadgrobne spomenike,
            <br />
            kao i obnovu postojećih gravura u srebrnoj ili zlatnoj boji.
          </p>
        </div>
      </div>
    </div>
  );
};
