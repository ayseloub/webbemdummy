import React from "react";
import Logo from "../../assets/LogoNavbar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faAngleDown } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const kabinetItems = [
    "Struktur", "Presiden", "Wakil Presiden", "Sekpim", "Menko & Dirnal",
    "PSDI", "PSDM", "Ekraf", "KMB", "Sosling", "Kastrat", "Advokesma",
    "Medinkraf", "Adkeu", "PIT"
  ];
  const kabarItems = ["KABAR FILKOM", "KABAR PROKER"];
  const appsItems = ["SJW FILKOM", "SIPERAT", "IT PARTNERSHIP"];

  return (
    <header className="bg-cust-green">
      <div className="flex pl-6 items-center">
        <a href="/" className="mr-4">
          <img src={Logo} alt="BEM Logo" />
        </a>
        <button type="button" className="hover:text-cust-orange font-Lato text-white text-lg pl-28">
          Beranda
        </button>
        <button type="button" className="hover:text-cust-orange font-Lato text-white text-lg pl-8">
          Tentang
        </button>
        <div className="relative inline-block text-left">
          <button type="button" className="hover:text-cust-orange font-Lato text-white text-lg pl-8">
            Kabinet <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <div className="absolute right-0 mt-2 w-100 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none options">
            <div className="bg-[#FDFADB] py-1 rounded-md">
              {kabinetItems.map((kabinet, index) => (
                <button
                  key={index}
                  type="button"
                  className="hover:text-cust-orange hover:font-bold w-full text-nowrap hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm"
                >
                  {kabinet}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="relative inline-block text-left">
          <button type="button" className="hover:text-cust-orange font-Lato text-white text-lg pl-8">
            Kabar <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <div className="absolute right-0 mt-2 w-100 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none options">
            <div className="bg-[#FDFADB] py-1 rounded-md">
              {kabarItems.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className="hover:text-cust-orange hover:font-bold w-full text-nowrap hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="relative inline-block text-left">
          <button type="button" className="hover:text-cust-orange font-Lato text-white text-lg pl-8">
            Apps <FontAwesomeIcon icon={faAngleDown} />
          </button>
          <div className="absolute right-0 mt-2 w-100 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none options">
            <div className="bg-[#FDFADB] py-1 rounded-md">
            {appsItems.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className="hover:text-cust-orange hover:font-bold text-nowrap w-full hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div>
          <button className="ring-1 ring-white hover:ring-cust-bg-orange2 bg-transparent outline-3 outline-gray-200 focus:outline-cust-orange hover:bg-cust-bg-orange2 text-white text-lg font-semibold py-1.5 px-10 rounded-full ml-28">
            Event <FontAwesomeIcon className="mt-1" icon={faArrowRightLong} />
          </button>
        </div>


      </div>
    </header>
  );
};

export default Navbar;
