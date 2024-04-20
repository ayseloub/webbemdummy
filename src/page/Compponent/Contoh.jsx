import React from "react";
import Company from "./HomeComp/Companydown";
import Magazine from "./HomeComp/Valuemag";
import Kabinetpic from "./HomeComp/Kabinetpic";


const Contoh = () => {
  return (
    <div>
      <div className="text-5xl text-cust-green">
        BIKIN DISINI (BIKIN FILE BARU SESUAI DENGAN BAGIAN PEKERJAAN)
        <Company heading="Company Prof" />
        <Magazine heading="Value Mag" />
        <Kabinetpic />
      </div>
    </div>
  );
};

export default Contoh;
