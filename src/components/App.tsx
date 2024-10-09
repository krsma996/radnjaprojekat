import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePageComponents/HomePage";
import { Onama } from "./custom-components/Onama/Onama";
import { Layout } from "./Layout";
import { Spomenici } from "./custom-components/Spomenici/Spomenici";
import { Ostalo } from "./custom-components/Ostalo/Ostalo";
import { Cene } from "./custom-components/Cene/Cene";
import { Kontakt } from "./custom-components/Kontakt/Kontakt";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Onama" element={<Onama />} />
          <Route path="/Spomenici" element={<Spomenici />} />
          <Route path="/Ostalo" element={<Ostalo />} />
          <Route path="/Cene" element={<Cene />} />
          <Route path="/Kontakt" element={<Kontakt />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
