import slika1 from "../../../slike/spomenici/1.jpg";
import slika2 from "../../../slike/spomenici/2.jpg";
import slika3 from "../../../slike/spomenici/3.jpg";
import slika4 from "../../../slike/spomenici/4.jpg";
import slika5 from "../../../slike/spomenici/5.jpg";
import slika6 from "../../../slike/spomenici/6.jpg";
import slika7 from "../../../slike/spomenici/7.jpg";
import slika8 from "../../../slike/spomenici/8.jpg";
import slika9 from "../../../slike/spomenici/9.jpg";
import slika10 from "../../../slike/spomenici/10.jpg";
import slika11 from "../../../slike/spomenici/11.jpg";
import slika12 from "../../../slike/spomenici/12.jpg";
import slika13 from "../../../slike/spomenici/13.jpg";
import slika14 from "../../../slike/spomenici/14.jpg";
import slika15 from "../../../slike/spomenici/15.jpg";
import slika16 from "../../../slike/spomenici/16.jpg";
import slika17 from "../../../slike/spomenici/17.jpg";
import slika18 from "../../../slike/spomenici/18.jpg";
import slika19 from "../../../slike/spomenici/19.jpg";
import slika20 from "../../../slike/spomenici/20.jpg";
import slika21 from "../../../slike/spomenici/21.jpg";
import slika22 from "../../../slike/spomenici/22.jpg";
import slika23 from "../../../slike/spomenici/23.jpg";
import slika24 from "../../../slike/spomenici/24.jpg";
import slika25 from "../../../slike/spomenici/25.jpg";
import slika26 from "../../../slike/spomenici/26.jpg";
import slika27 from "../../../slike/spomenici/27.jpg";
import slika28 from "../../../slike/spomenici/28.jpg";
import slika29 from "../../../slike/spomenici/29.jpg";
import slika30 from "../../../slike/spomenici/30.jpg";
import slika31 from "../../../slike/spomenici/31.jpg";
import slika32 from "../../../slike/spomenici/32.jpg";
import "./spomenici.css";
import { useState } from "react";
const photos = [
  { src: slika1, width: 800, height: 600 },
  { src: slika2, width: 800, height: 600 },
  { src: slika3, width: 800, height: 600 },
  { src: slika4, width: 800, height: 600 },
  { src: slika5, width: 800, height: 600 },
  { src: slika6, width: 800, height: 600 },
  { src: slika7, width: 800, height: 600 },
  { src: slika8, width: 800, height: 600 },
  { src: slika9, width: 800, height: 600 },
  { src: slika10, width: 800, height: 600 },
  { src: slika11, width: 800, height: 600 },
  { src: slika12, width: 800, height: 600 },
  { src: slika13, width: 800, height: 600 },
  { src: slika14, width: 800, height: 600 },
  { src: slika15, width: 800, height: 600 },
  { src: slika16, width: 800, height: 600 },
  { src: slika17, width: 800, height: 600 },
  { src: slika18, width: 800, height: 600 },
  { src: slika19, width: 800, height: 600 },
  { src: slika20, width: 800, height: 600 },
  { src: slika21, width: 800, height: 600 },
  { src: slika22, width: 800, height: 600 },
  { src: slika23, width: 800, height: 600 },
  { src: slika24, width: 800, height: 600 },
  { src: slika25, width: 800, height: 600 },
  { src: slika26, width: 800, height: 600 },
  { src: slika27, width: 800, height: 600 },
  { src: slika28, width: 800, height: 600 },
  { src: slika29, width: 800, height: 600 },
  { src: slika30, width: 800, height: 600 },
  { src: slika31, width: 800, height: 600 },
  { src: slika32, width: 800, height: 600 },
];
export const Spomenici: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Indeks trenutne slike

  const openModal = (src: string, index: number) => {
    // otvori modal funkcija za otvaranje slike
    setSelectedImage(src);
    setCurrentIndex(index); // Postavi indeks trenutne slike
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % photos.length; // Koristi modulo za vraćanje na početak
      setSelectedImage(photos[newIndex].src); // Postavi novu sliku
      return newIndex; // Ažuriraj indeks
    });
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + photos.length) % photos.length; // Koristi modulo za ciklično prebacivanje
      setSelectedImage(photos[newIndex].src); // Postavi novu sliku
      return newIndex; // Ažuriraj indeks
    });
  };

  // Kada je modal otvoren, postavi `selectedImage` na osnovu `currentIndex`
  const currentImageSrc = selectedImage || photos[currentIndex].src;

  return (
    <div className="container">
      <h1 className="text-align-center">SPOMENICI</h1>
      <p className="p-carousel mt-2">Nudimo veliki izbor spomenika</p>
      <div className="row">
        <div className="col spomenici-box">
          <div className="photo-grid">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo.src}
                alt={`Spomenik ${index + 1}`}
                onClick={() => openModal(photo.src, index)} // Proslijedi i indeks
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal za prikaz slike */}
      {selectedImage && (
        <div className="modal show" onClick={closeModal}>
          <img src={currentImageSrc} alt="Modal" />
          <button className="prev" onClick={prevImage}>
            ❮
          </button>
          <button className="next" onClick={nextImage}>
            ❯
          </button>
        </div>
      )}
    </div>
  );
};
