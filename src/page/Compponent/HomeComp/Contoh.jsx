import React from "react";
import Company from "./Companydown"
import Magazine from "./Valuemag";
import Kabinetpic from "./Kabinetpic";


const Contoh = () => {
  return (
    <div>
      <div className="text-5xl text-cust-green">
        <Company heading="Company Prof" />
        <Magazine heading="Value Mag" />
        <Kabinetpic />
      </div>
    </div>
  );
};

export default Contoh;
