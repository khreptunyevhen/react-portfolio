import { Routes, Route } from "react-router-dom";
import About from "./About.jsx";
import Portfolio from "./Portfolio.jsx";
import PortfolioProject from "./PortfolioProject.jsx";
import Contacts from "./Contacts.jsx";
import Home from "./Home.jsx";
import NotFound from "./NotFound.jsx";

const Main = ({ setActiveTab, themeMode }) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route
          path="/portfolio"
          element={<Portfolio themeMode={themeMode} />}
        />
        <Route
          path="/portfolio/:id"
          element={<PortfolioProject themeMode={themeMode} />}
        />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound setActiveTab={setActiveTab} />} />
      </Routes>
    </main>
  );
};

export default Main;
