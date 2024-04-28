import React from "react";

const SponsorItem = ({ imageSrc, altText, alamat, benefit, ketentuan, onClick }) => (
    <div className="box-border size-48 bg-cust-white rounded-lg mx-5" onClick={onClick}>
      <img src={imageSrc} alt={altText} className="pt-4 size-36 mx-auto" />
      <p className="text-center pt-2 font-lato">{altText}</p>
    </div>
  );
  

export default SponsorItem;
