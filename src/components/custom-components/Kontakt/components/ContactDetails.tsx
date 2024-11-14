import { ContactAddress } from "./contact-details-copoments/ContactAdress";
import { ContactEmail } from "./contact-details-copoments/ContactEmail";
import { ContactPhone } from "./contact-details-copoments/ContactPhone";

export const ContactDetails: React.FC = () => (
  <div className="kontakt-row mt-5">
    <ContactAddress />
    <ContactEmail />
    <ContactPhone />
  </div>
);
