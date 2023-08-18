import React, { useEffect, useState } from "react";
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

  return (
    <div
      onMouseMoveCapture={(e) => {
        setMousePositions((currentPositions) => ({
          ...currentPositions,
          x: e.pageX,
          y: e.pageY,
        }));
        console.log(e);
      }}
    >
      <Header themeMode={themeMode} setThemeMode={setThemeMode} />
      <main>
        {/* <Home /> */}
        <About />
        <Portfolio />
        <Contacts />
      </main>
      <Footer />
      <Cursor mousePositions={mousePositions} />
    </div>
  );
}

export default App;
