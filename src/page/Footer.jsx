import React from "react";
import { motion } from "framer-motion";
import instagram from "../assets/Instagram.png"
import line from "../assets/Line.png"
import tiktok from "../assets/Tiktok.png"
import youtube from "../assets/Youtube.png"
import LogoFooter from "../assets/logoFooter.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 150 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          duration: 2.0,
          damping: 10,
          stiffness: 100,
        },
      }}
      className="cust-outer-container bg-cust-green text-white font-poppins pt-8"
    >
     <div className="cust-outer-container">
        <div className="cust-outer-container">
          

          <div className="flex flex-col lg:flex-row lg:justify-between pb-12 mt-10 mb-10">
            <div className="w-full h-full flex-shrink-0 lg:w-1/4">
              <img
                className="mx-auto drop-shadow-xl"
                src={LogoFooter}
                alt="missing Logo img"
              ></img>
            </div>

            <div className="flex flex-col text-center  px-5 pt-10 lg:w-2/4 lg:pt-0 pl-10">
              <h3 className="text-cust-white text-3xl  font-semibold mb-5">
                Sekretariat
              </h3>
              <p>Gedung Kreativitas Mahasiswa Lt 2</p>
              <p>Fakultas Ilmu Komputer UB</p>
              <p>Jalan Veteran Nomor 8, Lowokwaru, Malang</p>
              <p>Email : bemfilkom@ub.ac.id</p>
              <div className="flex flex-wrap flex-row justify-center pb-24 pt-8">
            <Link
              to="http://www.instagram.com/bemfilkomub/"
              target="http://www.instagram.com/bemfilkomub/"
            >
              <img
                src={instagram}
                alt="missing instagram img"
                className="px-3 lg:px-6 py-3 lg:py-0 object-cover transition duration-300 transform hover:scale-125"
              ></img>
            </Link>

            <Link
              to="http://page.line.me/?accountId=csj9184g&openerPlatform=webview&openerKey=webview%3AunifiedSearch"
              target="_blank"
            >
              <img
                src={line}
                alt="missing line img"
                className="px-3 lg:px-6 py-3 lg:py-0 object-cover transition duration-300 transform hover:scale-125"
              ></img>
            </Link>
            <Link to="http://www.tiktok.com/@bemfilkomub" target="_blank">
              <img
                src={tiktok}
                alt="missing tiktok img"
                className="px-3 lg:px-6 py-3 lg:py-0 object-cover transition duration-300 transform hover:scale-125"
              ></img>
            </Link>
            <Link to="http://www.youtube.com/c/BEMFILKOMUB" target="_blank">
              <img
                src={youtube}
                alt="missing youtube img"
                className="px-3 lg:px-6 py-3 lg:py-0 object-cover transition duration-300 transform hover:scale-125"
              ></img>
            </Link>
          </div>
            </div>

            <div className="flex flex-col text-center pt-10 lg:text-right lg:w-1/4 lg:pt-0 mr-10 pr-8">
              <h3 className="text-cust-white font-semibold mb-6 text-3xl">
                Tautan Terkait
              </h3>
              <a
                href="https://filkom.ub.ac.id/"
                target="_blank"
                className="hover:underline"
              >
                FILKOM UB
              </a>
              <a
                href="https://bemfilkom.ub.ac.id/"
                target="_blank"
                className="hover:underline"
              >
                Nawasena 2023
              </a>

              <a
                href="https://bemfilkom.ub.ac.id/2022/"
                target="_blank"
                className="hover:underline"
              >
                Aryakarsa 2022
              </a>
              <a
                href="https://bemfilkom.ub.ac.id/2021/"
                target="_blank"
                className="hover:underline"
              >
                Mozaik Asa 2021
              </a>
              <a
                href="https://bemfilkom.ub.ac.id/2020/"
                target="_blank"
                className="hover:underline"
              >
                Elaborasi Makna 2020
              </a>
              <a
                href="https://bemfilkom.ub.ac.id/2019/"
                target="_blank"
                className="hover:underline"
              >
                Atmabara 2019
              </a>
              <a
                href="https://bemfilkom.ub.ac.id/2018/"
                target="_blank"
                className="hover:underline"
              >
                Adhikarya 2018
              </a>
            </div>
          </div>

          

          {/* <hr className="fixed w-[1200px] h-0 border-[1px] border-solid border-white left-[50px] top-[465px]"/> */}

          <div className="group flex justify-center font-semibold text-center py-5 sm:body5 sm:py-10 md:text-base border-t-2 border-white">
            &copy;Made 🧡️ with by Biro Pengembangan Informasi & Teknologi
            2024
            <div className="opacity-0 lg:group-hover:opacity-100 transition-all duration-500 ml-2">
              ❤️️
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
