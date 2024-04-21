import React from "react";
import background from "../../../assets/welcoming.svg"
import gedung from "../../../assets/gedungFilkom.png"
import arthakaraBubble from "../../../assets/arthakaraBubble.png"
import awanKrem from "../../../assets/awanKrem.png"
import { motion } from "framer-motion";
import Atropos from "atropos/react";

const Welcome = () => {
  return (
    <div  className="overflow-hidden w-full h-full bg-[-100px] sm:bg-[-100px] md:bg-[0px] lg:bg-[0px] bg-cover"
    style={{ backgroundImage: `url(${background})` }}>
     <Atropos
        shadow={true}
        shadowOffset={50}
        highlight={true}
        duration={100}
        className="absolute group top-[320px] 2xl:right-[760px] xl:right-[600px] lg:right-[500px]  hidden lg:block"
      >
        <img
          data-atropos-offset="15"
          className="w-[150px] object-cover active:w-[100px]"
          src={arthakaraBubble}
          alt="MissingIMG"
        />
      </Atropos>
      <div className="lg:flex lg:justify-center font-lato h-full pt-[170px] lg:pt-[150px]">
        <div className="lg:mt-[60px] lg:mx-auto text-center pb-[70px] sm:pb-[50px] ml-[10px] sm:ml-[20px]">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                duration: 5.0,
                damping: 15,
                stiffness: 50,
              },
            }}
            className="text-cust-white text-[20px] sm:text-[35px] md:w-full lg:text-start lg:text-[30px] font-regular"
          >
            Selamat datang di
          </motion.div>
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                duration: 3.0,
                damping: 15,
                stiffness: 50,
              },
            }}
            className="text-[40px] sm:text-[60px] w-full h-[45px] sm:h-[60px] lg:h-[90px] lg:text-[65px] xl:text-[80px] text-cust-lime font-extrabold"
          >
            BEM FILKOM
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                duration: 3.2,
                damping: 15,
                stiffness: 50,
              },
            }}
            className="text-[40px] sm:text-[60px] w-full lg:text-start lg:text-[65px] xl:text-[80px] text-cust-lime text-bold font-extrabold"
          >
            UB 2024
          </motion.div>
          
        </div>
        <div className="mx-auto mt-auto lg:mt-0">
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
            src={gedung}
            className="lg:w-[550px] mx-auto mt-auto sm:w-[400px] w-[350px]"
          />
        </div>
      </div>
      <div>
        <img 
        src={awanKrem} 
        className="" 
        />
      </div>
    </div>
  );
};

export default Welcome;