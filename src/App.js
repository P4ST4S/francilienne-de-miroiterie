import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Fenetres from "./pages/Fenetres";
import Stores from "./pages/Stores";
import Accueil from "./pages/Accueil";
import Miroiterie from "./pages/Miroiterie";
import Verandas from "./pages/Verandas";
import CGV from "./pages/CGV";
import LegalMentions from "./pages/LegalMentions";
import Avis from "./pages/Avis";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route exact path="/fenetres-portes" element={<Fenetres />} />
          <Route exact path="/verandas-pergolas" element={<Verandas />} />
          <Route exact path="/miroiterie" element={<Miroiterie />} />
          <Route exact path="/stores-volets" element={<Stores />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/avis-eldo" element={<Avis />} />
          <Route exact path="/conditions-generales-ventes" element={<CGV />} />
          <Route exact path="/mentions-legales" element={<LegalMentions />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
