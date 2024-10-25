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
            kosta.saveski@gmail.com
          </p>
        </div>
        <div className="kontakt-col">
          <i className="bi bi-telephone-fill kontakt-icon"></i>
          <p className="kontakt-info-p">
            <span className="kontakt-info-span">
              <strong>Telefon:</strong>
            </span>
            <br />
            060-313-4416
          </p>
        </div>
      </div>
      <div className="kontakt-row mt-5">
        <div className="kontakt-col">
          <div style={{ marginTop: "20px" }}>
            <h3 className="kontakt-h3">Naša lokacija</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.123456789!2d20.37035550468595!3d44.81633739457389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a709ef5b12345%3A0x9876543210abc!2sBezanijska%20Kosa%202b%2C%20Beograd%2C%20Srbija!5e0!3m2!1sen!2srs!4v1234567890123"
              width="600"
              height="450"
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
            <textarea
              placeholder="Unesite tekst ovde"
              required
              className="kontakt-form-textarea"
              rows={5}
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
