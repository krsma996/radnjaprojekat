import "./kontakt.css";
import { ContactHeader } from "./components/KontaktHeader";
import { ContactDescription } from "./components/ContactDescription";
import { ContactDetails } from "./components/ContactDetails";
import { MapAndForm } from "./components/contact-form/MapAndForm";

export const Kontakt: React.FC = () => {
  return (
    <div className="kontakt-container">
      <ContactHeader />
      <ContactDescription />
      <ContactDetails />
      <MapAndForm />
    </div>
  );
};
