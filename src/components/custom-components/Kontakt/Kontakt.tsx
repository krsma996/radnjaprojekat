import "./kontakt.css";

export const Kontakt: React.FC = () => {
  return (
    <div className="kontakt-container">
      <h1 className="kontakt-h1">KAMENOREZAČKA RADNJA KOSTA BEŽANIJSKA KOSA</h1>
      <p className="p-carousel mt-2">
        Možete nas kontaktirati svakog dana, a mi ćemo vam odgovoriti u
        najkraćem mogućem roku.
      </p>
      <div className="kontakt-row mt-5">
        <div className="kontakt-col">
          <i className="bi bi-geo-alt-fill kontakt-icon"></i>
          <p className="kontakt-info-p">
            <span className="kontakt-info-span">
              <strong>Naša adresa:</strong>
            </span>
            <br />
            Bezanijska Kosa 2b <br />
            Na samom ulasku u groblje <br />
          </p>
        </div>
        <div className="kontakt-col">
          <i className="bi bi-envelope-fill kontakt-icon"></i>
          <p className="kontakt-info-p">
            <span className="kontakt-info-span">
              <strong>Email:</strong>
            </span>
            <br />
            zoranmira2000@yahoo.com
          </p>
        </div>
        <div className="kontakt-col">
          <i className="bi bi-telephone-fill kontakt-icon"></i>
          <p className="kontakt-info-p">
            <span className="kontakt-info-span">
              <strong>Telefon:</strong>
            </span>
            <br />
            060-318-97-64
          </p>
        </div>
      </div>
      <div className="kontakt-row mt-5">
        <div className="kontakt-col">
          <div style={{ marginTop: "20px" }}>
            <h3 className="kontakt-h3">Naša lokacija</h3>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094783!2d144.95373531531676!3d-37.81627997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f12d1d1%3A0x5045675218cd1e0!2sMy%20Business!5e0!3m2!1sen!2sau!4v1600351601227!5m2!1sen!2sau"
              className="kontakt-map-iframe"
              loading="lazy"
            />
          </div>
        </div>
        <div className="kontakt-col mt-5">
          <h5 className="kontakt-h5">Pišite nam</h5>
          <form action="sendEmail" className="kontakt-form">
            <input
              type="text"
              placeholder="Unesite vaše ime"
              required
              className="kontakt-form-input"
            />
            <br />
            <input
              type="text"
              placeholder="Unesite vaše prezime"
              required
              className="kontakt-form-input"
            />
            <br />
            <input
              type="email"
              placeholder="Unesite vašu email adresu"
              required
              className="kontakt-form-input"
            />
            <br />
            <button type="submit" className="kontakt-form-button">
              Pošalji
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
