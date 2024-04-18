import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./page/Landing";
import About from "./page/About";
import Footer from "./page/Compponent/Footer";
import Navbar from "./page/Compponent/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>

  );
}

export default App;
