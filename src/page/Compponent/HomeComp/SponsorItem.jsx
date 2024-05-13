import React from "react";

const SponsorItem = ({ imageSrc, altText, alamat, benefit, ketentuan, onClick }) => (
    <div className="box-border size-48 bg-cust-white rounded-lg mx-8" onClick={onClick}>
      <img src={imageSrc} alt={altText} className="pt-4 h-36 w-36 mx-auto" />
      <p className="text-center pt-2 font-lato text-cust-gray">{altText}</p>
    </div>
  );
  

export default SponsorItem;
