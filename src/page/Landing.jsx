import React from "react";
// import Contoh from "./Compponent/HomeComp/Contoh";
import Welcome from "./Compponent/HomeComp/Welcome";
import Sambutan from "./Compponent/HomeComp/Sambutan"
import Segment4 from "./Compponent/HomeComp/segment4";
// import Contoh from "../Contoh";
import Tentang from "./Compponent/HomeComp/Tentang";
import Artikel from "./Compponent/HomeComp/Artikel";
import Company from "./Compponent/HomeComp/Companydown";
import Value from "./Compponent/HomeComp/Valuemag";
import Contoh from "./Compponent/HomeComp/Contoh";
// import Sambutan from "./Compponent/HomeComp/Sambutan";


const Landing = () => {
  return (
    <>
    <Welcome />
    <Sambutan />
    <Tentang />
    <Artikel/>
    <Contoh/>
    <Segment4 />
    </>
    
  )
};

export default Landing;
