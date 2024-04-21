import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./page/Home";
import About from "./page/About";
import Footer from "./page/Footer";
import Navbar from "./page/Navbar";
import Contoh from "./page/Compponent/Contoh";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contoh2" element={<Contoh2 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
