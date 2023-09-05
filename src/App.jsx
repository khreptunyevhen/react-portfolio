import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Cursor from "./components/Cursor.jsx";
import Main from "./components/Main.jsx";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const [activeTab, setActiveTab] = useState(0);
  const [mousePositions, setMousePositions] = useState({
    x: 0,
    y: 0,
  });
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shouldRenderCursor = screenWidth > 768;

  return (
    <>
      <Header
        themeMode={themeMode}
        setThemeMode={setThemeMode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Main setActiveTab={setActiveTab} themeMode={themeMode} />
      <Footer />
      {shouldRenderCursor && <Cursor mousePositions={mousePositions} />}
    </>
  );
}

export default App;
