import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Programs from "./Components/Programs";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";


function App() {
  const [darkMode, setDarkMode] = useState(true);


  return (
     <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />
      <About />
      <Programs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;