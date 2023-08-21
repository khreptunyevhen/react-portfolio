import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contacts from "./components/Contacts.jsx";
import Cursor from "./components/Cursor.jsx";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const [mousePositions, setMousePositions] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePositions((currentPositions) => ({
        ...currentPositions,
        x: e.clientX,
        y: e.clientY,
      }));
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <>
      <Header themeMode={themeMode} setThemeMode={setThemeMode} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
      <Cursor mousePositions={mousePositions} />
    </>
  );
}

export default App;
