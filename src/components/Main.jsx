import { Routes, Route } from "react-router-dom";
import About from "./About.jsx";
import Portfolio from "./Portfolio.jsx";
import PortfolioProject from "./PortfolioProject.jsx";
import Contacts from "./Contacts.jsx";
import Home from "./Home.jsx";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioProject />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </main>
  );
};

export default Main;
