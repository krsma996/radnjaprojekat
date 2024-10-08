import kandiloSlika from "../../../slike/ostalo/kandilo.png";
import klupaSlika from "../../../slike/ostalo/klupa.jpg";
import okruglaVaznaSlika from "../../../slike/ostalo/okruglaVazna.jpg";
import ramSlika from "../../../slike/ostalo/ramSlika.jpg";
import ramSlika2 from "../../../slike/ostalo/ramSlika2.jpg";
import ramSlika3 from "../../../slike/ostalo/ramSlika3.jpg";
import rizla from "../../../slike/ostalo/rizla.png";
import slikaCrnoBela from "../../../slike/ostalo/slikaCrnoBela.jpg";
import slikaUBoji from "../../../slike/ostalo/slikaUBoji.jpg";
import slova from "../../../slike/ostalo/slova.jpg";
import srebrnaSlova from "../../../slike/ostalo/srebrnaSloba.jpg";
import umetnickaSlikaPlocica from "../../../slike/ostalo/umetnicakSlikaPlocica.jpg";
import umetnickaSlika from "../../../slike/ostalo/umetnickaSlika.jpg";
import vaznaSkinuteIvice from "../../../slike/ostalo/VaznaSkinuteIvice.jpg";
import vaznaCetvrtasta from "../../../slike/ostalo/vaznaCetvrtasta.jpg";
import { useState } from "react";

const photosOstalo = [
  {
    src: kandiloSlika,
    height: 800,
    width: 600,
    description: "OPIS ZA KANDILO",
  },
  { src: klupaSlika, height: 800, width: 600, description: "KLUPA" },
  {
    src: okruglaVaznaSlika,
    height: 800,
    width: 600,
    description: "OKRUGLA VAZNA",
  },
  { src: ramSlika, height: 800, width: 600, description: "RAM SLIKA" },
  {
    src: ramSlika2,
    height: 800,
    width: 600,
    description: "RAM ZA SLIKU POZLACENI",
  },
  {
    src: ramSlika3,
    height: 800,
    width: 600,
    description: "RAM ZA SLIKU – PATINIRANI",
  },
  { src: rizla, height: 800, width: 600, description: "RIZLA" },
  {
    src: slikaCrnoBela,
    height: 800,
    width: 600,
    description: "CRNO - BELA SLIKA ",
  },
  {
    src: slikaUBoji,
    height: 800,
    width: 600,
    description: "SLIKA U BOJI",
  },
  { src: slova, height: 800, width: 600, description: "ZLATNA - SLOVA" },
  {
    src: srebrnaSlova,
    height: 800,
    width: 600,
    description: "SREBRNA SLOVA",
  },
  {
    src: umetnickaSlikaPlocica,
    height: 800,
    width: 600,
    description: "UMETNIČKA SLIKA NA CRNOJ PLOČICI",
  },
  {
    src: umetnickaSlika,
    height: 800,
    width: 600,
    description: "UMETNIČKA SLIKA",
  },
  {
    src: vaznaSkinuteIvice,
    height: 800,
    width: 600,
    description: "VAZNA SKINUTE IVICE",
  },
  {
    src: vaznaCetvrtasta,
    height: 800,
    width: 600,
    description: "ČETVRTASTA VAZNA",
  },
];

export const Ostalo: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className="container">
      <h1 className="text-align-center">Ostalo</h1>
      <p className="p-carousel mt-2">
        Nudimo veliki izbor pratećih elemenata za spomenik
      </p>
      <div className="row">
        <div className="col spomenici-box">
          <div className="photo-grid">
            {photosOstalo.map((photo, index) => (
              <div key={index} className="photo-item">
                <img
                  src={photo.src}
                  alt={`Spomenik ${index + 1}`}
                  onClick={() => openModal(photo.src)}
                />
                <h6 className="photo-description text-align-center">
                  {photo.description}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal za prikaz slike */}
      {selectedImage && (
        <div className="modal show" onClick={closeModal}>
          <img src={selectedImage} alt="Modal" />
        </div>
      )}
    </div>
  );
};
