import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  return (
    <>
      <Header themeMode={themeMode} setThemeMode={setThemeMode} />
      <main>
        {/* <Home /> */}
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
