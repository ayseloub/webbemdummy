import Marquee from "react-fast-marquee";
import Partner from "../../../assets/partner.svg";
import sbucks from "../../../assets/SBUCKS-Partner.png";
import shoescare from "../../../assets/shoescare-Partner.png";
import otolaundry from "../../../assets/otolaundry-Partner.png";
import nest from "../../../assets/nest-Partner.png";
import gutenham from "../../../assets/gutenham-Partner.png";
import caneyo from "../../../assets/caneyo-Partner.png";
import Modal from "./Modal";
import SponsorItem from "./SponsorItem";
import React, { useState } from "react";
import background from "../../../assets/bgcorak.svg";

const sponsorItems = [
    { 
      imageSrc: sbucks, 
      altText: "Starbucks", 
      alamat: "Jl. Akordion Utara No.3d, Tunggulwulung", 
      benefit: [
        "Discount 10% (Milkbase)",
        "Promo All Coffee 10k berlaku 24 jam",
        "Promo bundling All Main Course + es teh 20k",
        "Free 4 jam pertama penggunaan ruangan"
      ],
      ketentuan: [
        "KTM",
        "Follow instagram @sobo.cafe",
        "Follow tiktok @sobo_cafe"
      ],
    },
    { imageSrc: shoescare, altText: "Bar Shoescare", alamat:"Jl. Akordion Utara No.3d, Tunggulwulung", 
    benefit: [
      "Discount 10% (Milkbase)",
      "Promo All Coffee 10k berlaku 24 jam",
      "Promo bundling All Main Course + es teh 20k",
      "Free 4 jam pertama penggunaan ruangan"
    ],
    ketentuan: [
      "KTM",
      "Follow instagram @sobo.cafe",
      "Follow tiktok @sobo_cafe"
    ] },
    { imageSrc: otolaundry, altText: "Oto Laundry", alamat:"Jl. Akordion Utara No.3d, Tunggulwulung",
    benefit: [
      "Discount 10% (Milkbase)",
      "Promo All Coffee 10k berlaku 24 jam",
      "Promo bundling All Main Course + es teh 20k",
      "Free 4 jam pertama penggunaan ruangan"
    ],
    ketentuan: [
      "KTM",
      "Follow instagram @sobo.cafe",
      "Follow tiktok @sobo_cafe"
    ] },
    { imageSrc: nest, altText: "Nest Cafe", alamat:"Jl. Akordion Utara No.3d, Tunggulwulung", 
    benefit: [
      "Discount 10% (Milkbase)",
      "Promo All Coffee 10k berlaku 24 jam",
      "Promo bundling All Main Course + es teh 20k",
      "Free 4 jam pertama penggunaan ruangan"
    ],
    ketentuan: [
      "KTM",
      "Follow instagram @sobo.cafe",
      "Follow tiktok @sobo_cafe"
    ] },
    { imageSrc: gutenham, altText: "Gutenham", alamat:"Jl. Akordion Utara No.3d, Tunggulwulung", 
    benefit: [
      "Discount 10% (Milkbase)",
      "Promo All Coffee 10k berlaku 24 jam",
      "Promo bundling All Main Course + es teh 20k",
      "Free 4 jam pertama penggunaan ruangan"
    ],
    ketentuan: [
      "KTM",
      "Follow instagram @sobo.cafe",
      "Follow tiktok @sobo_cafe"
    ]},
    { imageSrc: caneyo, altText: "Caneyo", alamat:"Jl. Akordion Utara No.3d, Tunggulwulung", 
    benefit: [
      "Discount 10% (Milkbase)",
      "Promo All Coffee 10k berlaku 24 jam",
      "Promo bundling All Main Course + es teh 20k",
      "Free 4 jam pertama penggunaan ruangan"
    ],
    ketentuan: [
      "KTM",
      "Follow instagram @sobo.cafe",
      "Follow tiktok @sobo_cafe"
    ]}
  ];


  const segment4 = () => {
    const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };
  
  return (
    <div className="box-border bg-cust-yellow h-140" style={{ backgroundImage: `url(${background})` }}>
      <img src={Partner} alt="Partner" className="mx-auto mb-8" />
      <Marquee direction="right" autoFill={true} className="mb-10">
        <div className="flex">
          {sponsorItems.map((item, index) => (
            <button key={index} onClick={() => handleShowModal(item)}>
              <SponsorItem 
                imageSrc={item.imageSrc} 
                altText={item.altText} 
                alamat={item.alamat} 
                benefit={item.benefit} 
                ketentuan={item.ketentuan}
              />
            </button>
          ))}
        </div>
      </Marquee>

      <Marquee direction="left" loop="30" autoFill={true}>
        <div className="flex">
          {sponsorItems.map((item, index) => (
            <button key={index} onClick={() => handleShowModal(item)}>
              <SponsorItem 
                imageSrc={item.imageSrc} 
                altText={item.altText} 
                alamat={item.alamat} 
                benefit={item.benefit} 
                ketentuan={item.ketentuan}
              />
            </button>
          ))}
        </div>
      </Marquee>
      
      {showModal && <Modal onClose={() => setShowModal(false)} selectedItem={selectedItem} />}      
          
    </div>
  );
  };

  export default segment4;