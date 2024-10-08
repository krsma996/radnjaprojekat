import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePageComponents/HomePage";
import { Onama } from "./custom-components/Onama/Onama";
import { Layout } from "./Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Onama" element={<Onama />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
