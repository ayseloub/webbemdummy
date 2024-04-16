import React from "react";
import Logo from "../assets/LogoNavbar.png";

const Navbar = () => {
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
            Kabinet
          </button>
          <div className="absolute right-0 mt-2 w-100 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none options">
            <div className="bg-[#FDFADB] py-1 rounded-md">
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">Struktur</button>
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">Presiden</button>
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">Wakil Presiden</button>
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">Sekpim</button>
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">Menko & Dirnal</button>
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">PSDI</button>
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">PSDM</button>
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">Ekraf</button>
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">KMB</button>
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">Sosling</button>
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">Kastrat</button>
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">Advokesma</button>
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">Medinkraf</button>
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">Adkeu</button>
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">PIT</button>
            </div>
          </div>
        </div>
        <div className="relative inline-block text-left">
          <button type="button" className="hover:text-cust-orange font-Lato text-white text-lg pl-8">
            Kabar
          </button>
          <div className="absolute right-0 mt-2 w-100 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none options">
            <div className="bg-[#FDFADB] py-1 rounded-md">
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">KABAR FILKOM</button>
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">KABAR PROKER</button>
            </div>
          </div>
        </div>
        <div className="relative inline-block text-left">
          <button type="button" className="hover:text-cust-orange font-Lato text-white text-lg pl-8">
            Apps
          </button>
          <div className="absolute right-0 mt-2 w-100 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none options">
            <div className="bg-[#FDFADB] py-1 rounded-md">
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">SJW FILKOM</button>
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">SIPERAT</button>
            <button type="button" className="hover:text-cust-orange hover:bg-cust-bg-orange font-lato text-gray-700 block px-4 py-2 text-sm">IT PARTNERSHIP</button>
            </div>
          </div>
        </div>
        <div>
          <button class="bg-transparent outline-3 outline-gray-200 focus:outline-cust-orange hover:bg-cust-bg-orange2 text-white font-bold py-2 px-4 rounded-full ml-28">
            Event →
          </button>
        </div>


      </div>
    </header>
  );
};

export default Navbar;
