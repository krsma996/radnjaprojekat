import onama1slika from "../../../slike/onamaSpomenik1.jpg";
import onama2slika from "../../../slike/onamaSpomenik2.jpg";
import onama3slika from "../../../slike/mozda1.jpg";

export const Onama: React.FC = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-align-center">O NAMA</h1>
        <div className="row">
          <p className="p-onama">
            <h6 className="h6">Kako smo počeli</h6>
            <br />
            Kamenorezac Kosta se već više od 20 godina bavi obradom svih vrsta
            mermera i granita, pružajući vrhunsku uslugu po povoljnim cenama.
            <br />
            Naša tradicija temelji se na kvalitetnoj izradi, poštovanju dogovora
            i striktnih rokova. <br />
            Kvalitet naše izrade potvrđuju brojne preporuke zadovoljnih
            klijenata. <br />
            Nudimo širok spektar usluga, uključujući:
            <ul className="list-styled">
              <li>Izradu nadgrobnih spomenika po želji klijenata</li>
              <li>Graviranje slova, slika i drugih detalja na kamenu</li>
              <li>Specijalne zahteve u izradi spomenika</li>
              <li>
                Izradu i montažu porodičnih grobnica, poklopnih ploča, opsega i
                patosa od armiranog betona
              </li>
              <li>Rekonstrukciju i popravku postojećih spomenika</li>
              <li>Kvalitet potkovan iskustvom</li>
              <li>Povoljne Cene</li>
            </ul>
            Dodatna oprema koju nudimo jeste: <br />
            <ul className="list-styled">
              <li>Slova</li>
              <li>Slike</li>
              <li>Kandilo</li>
              <li>Klupe</li>
              <li>Vaze za cveće</li>
              <li>Cveće u staklu</li>
            </ul>
            Cene nadgrobnih spomenika prilagođavamo materijalu, modelu i
            kubikaži kamena, kako bismo osigurali najbolje rešenje za svaki
            budžet. Za sve dodatne informacije i dogovore, stojimo vam na
            raspolaganju. <br />
            <span>
              <strong>
                Kamenorezac Kosta – pouzdan partner za sve vaše potrebe!
              </strong>
            </span>
          </p>
        </div>
        <div className="row mt-4">
          <div className="col">
            <img width="355" height="355" src={onama1slika} alt="onamaSliak1" />
          </div>

          <div className="col">
            <img width="355" height="355" src={onama2slika} alt="onamaSliak2" />
          </div>
          <div className="col">
            <img width="355" height="355" src={onama3slika} alt="onamaSliak2" />
          </div>
        </div>
      </div>
    </>
  );
};
