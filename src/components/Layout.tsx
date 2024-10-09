import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

interface LayoutProps {
  children: React.ReactNode; // Ovo omogućava da se bilo koji sadržaj prosledi kao children
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};
