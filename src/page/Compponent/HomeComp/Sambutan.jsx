import background from "../../../assets/kremBg.svg";
import underline from "../../../assets/underlineJudul.svg";
import contoh from "../../../assets/contohPirza.png";
import sambutan from "../../../assets/sambutan.svg"
import { motion } from "framer-motion";
import { Popper } from '@mui/base/Popper';
import React, { useState } from "react";
import ReadMoreReact from 'read-more-react';

const Sambutan = () => {
  const [anchorElPresiden, setAnchorElPresiden] = useState(null);
  const [anchorElWakilPresiden, setAnchorElWakilPresiden] = useState(null);
  const [isHoveredPresiden, setIsHoveredPresiden] = useState(false);
  const [isHoveredWakilPresiden, setIsHoveredWakilPresiden] = useState(false);
  const [isPictureDownPresiden, setIsPictureDownPresiden] = useState(false);
  const [isPictureDownWakilPresiden, setIsPictureDownWakilPresiden] = useState(false);

  const handleClickPresiden = (event) => {
    setAnchorElPresiden(anchorElPresiden ? null : event.currentTarget);
    setIsHoveredPresiden(true); 
    setIsPictureDownPresiden(!isPictureDownPresiden);

    setTimeout(() => {
      setIsHoveredPresiden(false);
    }, 2000);
  };

  const handleClickWakilPresiden = (event) => {
    setAnchorElWakilPresiden(anchorElWakilPresiden ? null : event.currentTarget);
    setIsHoveredWakilPresiden(true);
    setIsPictureDownWakilPresiden(!isPictureDownWakilPresiden);

    setTimeout(() => {
      setIsHoveredWakilPresiden(false);
    }, 2000);
  };

  const openPresiden = Boolean(anchorElPresiden);
  const openWakilPresiden = Boolean(anchorElWakilPresiden);

  const idPresiden = openPresiden ? 'presiden-popper' : undefined;
  const idWakilPresiden = openWakilPresiden ? 'wakil-presiden-popper' : undefined;

  return (
    <div className="overflow-hidden w-full h-full bg-[-100px] sm:bg-[-100px] md:bg-[0px] lg:bg-[0px] bg-cover" style={{ backgroundImage: `url(${background})` }}>
      <div className="cust-container">
        <div className="grid grid-cols-4 lg:grid-cols-4 lg:gap-2 py-10">
          <div className="col-span-full flex flex-col items-center">
            <div className="items-center">
            <motion.img
              initial={{ opacity: 0, y: 50, x: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "ease",
                  duration: 1.0,
                  damping: 10,
                  stiffness: 40,
                },
              }}
              src={sambutan}
              className="mx-auto w-full"
            />
            </div>
            <motion.img
              initial={{ opacity: 0, y: 50, x: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "ease",
                  duration: 1.0,
                  damping: 10,
                  stiffness: 40,
                },
              }}
              src={underline}
              className="lg:w-[200px] mt-2"
            />
          </div>
          <div className="mt-10" style={{ transition: 'margin-top 0.5s' }}>
            <button
              className="ring-1 ring-cust-green hover:ring-cust-white bg-cust-green outline-3 outline-gray-200 focus:outline-cust-white focus:outline-5 text-white text-lg font-semibold py-1.5 px-5 rounded-full ml-28"
              aria-describedby={idPresiden}
              type="button"
              onClick={handleClickPresiden}
            >
              Presiden
            </button>
            <Popper
              id={idPresiden}
              open={openPresiden}
              anchorEl={anchorElPresiden}
            >
              <div
                className={`bg-cust-orange rounded-full font-bold font-lato text-sm m-1 p-3 shadow-md text-slate-900 dark:text-slate-100 mt-3 ${isHoveredPresiden ? 'wiggle' : ''}`}
                style={{ transition: 'transform 0.5s', transformOrigin: 'center', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'rotate(6deg)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'rotate(0deg)';
                }}
              >
                Andhika Satria P.
              </div>
            </Popper>
            <motion.img
               initial={{ opacity: 0, y: 50, x: 0, z:0 }}
               whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "ease",
                  duration: 1.0,
                  damping: 10,
                  stiffness: 40,
                },
              }}
               animate={{ marginTop: isPictureDownPresiden ? '80px' : '30px' }}
               src={contoh}
               className="lg:w-[200px] mt-5 ml-28"
            />
          </div>
          <div className="mt-10">
            <button
              className="ring-1 ring-cust-green hover:ring-cust-white bg-cust-green outline-3 outline-gray-200 focus:outline-cust-white  text-white text-lg font-semibold py-1.5 px-5 rounded-full ml-6"
              aria-describedby={idWakilPresiden}
              type="button"
              onClick={handleClickWakilPresiden}
            >
              Wakil Presiden
            </button>
            <Popper
              id={idWakilPresiden}
              open={openWakilPresiden}
              anchorEl={anchorElWakilPresiden}
            >
              <div
                className={`bg-cust-orange rounded-full font-bold font-lato text-sm m-1 p-3 shadow-md text-slate-900 dark:text-slate-100 mt-3 ${isHoveredWakilPresiden ? 'wiggle' : ''}`}
                style={{ transition: 'transform 0.5s', transformOrigin: 'center', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'rotate(-6deg)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'rotate(0deg)';
                }}
              >
                M. Ryan Firdaus
              </div>
            </Popper>
            <motion.img
               initial={{ opacity: 0, y: 50, x: 0, z:0 }}
               whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "ease",
                  duration: 1.0,
                  damping: 10,
                  stiffness: 40,
                },
              }}
               animate={{ marginTop: isPictureDownWakilPresiden ? '80px' : '30px' }}
               src={contoh}
               className="lg:w-[200px] mt-5 ml-16"
            />
          </div>
          <div className="mt-10 text-justify mr-5 ml-10 col-span-2 mr-20 pr-20 text-[20px] font-lato">
            <motion.div
           initial={{ opacity: 0, x: 100 }}
           whileInView={{
             opacity: 1,
             x: 0,
             transition: {
               type: "spring",
               duration: 3.0,
               damping: 15,
               stiffness: 50,
             },
           }}>
            <span className="font-extrabold">Assalamualaikum Warahmatullahi Wabarakatuh, Shalom, Om Swastyastu, Namo Buddhaya, Salam Kebajikan.</span>
            <br />
            <br />
            <ReadMoreReact
              text={"Hidup Mahasiswa! Hidup Rakyat Indonesia! Puji dan syukur selalu dipanjatkan kepada Tuhan YME atas rahmat dan karunia-Nya dalam menyertai perjalanan kami. Sebuah kapal besar bernama BEM FILKOM UB Kabinet Nawasena sedang mengarungi samudera penuh kebermanfaatan. Perjalanan ini membawa misi pergerakan, pengabdian, pengembangan dan pemberdayaan. Hal ini merupakan perjalanan yang panjang dan tidak mudah. Banyak rintangan dan hambatan dalam perjalanannya. Banyak elemen yang mengiringi kapal besar Nawasena untuk sampai ke dermaganya 'Terimakasih' kami haturkan kepada seluruh elemen yang telah mendukung perjalanan kami, sehingga segala kegiatan bisa terlaksana sebaik-baiknya serta dapat kami dokumentasikan pada Website BEM FILKOM UB 2023 dengan diiringi nilai dan makna perjalanan dari BEM FILKOM UB 2023 Kabinet Nawasena. BEM FILKOM UB 2023 Kabinet Nawasena berkomitmen dalam memberikan dampak dengan menggandeng segala elemen yang terlibat dalam usaha pengembangan prestasi akademik maupun non akademik, pelayanan kesejahteraan mahasiswa, pengabdian kepada masyarakat dan lingkungan, serta pergerakan kebangsaan. Kami bertekad dengan tulus bersama Keluarga Besar Mahasiswa Fakultas Ilmu Komputer dalam mensukseskan Fakultas Ilmu Komputer, Brawijaya dan Indonesia."}
              min={100}
              ideal={200}
              max={250}
              readMoreText={<span style={{ color: '#208B71', cursor: 'pointer' }}>... Read More</span>}
            />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sambutan;
