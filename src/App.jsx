import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./page/Compponent/HomeComp/Landing";
import About from "./page/Compponent/HomeComp/About";
import Footer from "./page/Compponent/Footer";
import Navbar from "./page/Compponent/Navbar";

function App() {
  const [count, setCount] = useState(0);

 

  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
