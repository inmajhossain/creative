import { motion } from "framer-motion";
import React from "react";

const Production = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 100] }}
      transition={{ duration: 3, delay: 2 }}
      className="flex lg:flex-row flex-col justify-around gap-[10px] bg-cyan-100 dark:bg-transparent shadow-lg mx-auto mt-[20px] lg:mt-[30px] lg:p-[15px] border-3 border-cyan-400 w-[380px] lg:w-[1024px] xl:w-[1024px] text-black text-md text-center"
    >
      <div className="flex lg:flex-row justify-center items-center mx-auto lg:mx-0 md:px-[25px] md:py-[30px] border-green-600 lg:border-r-3 md:w-[250px]">
        <h3 className="py-[25px] md:py-0 border-green-600 border-b-3 md:border-none w-full font-bold text-[18px] text-cyan-900 md:text-[25px] dark:text-white lg:text-left text-center">
          At a Glance Production Capacity (Daily)
        </h3>
      </div>
      <div className="flex flex-col justify-around space-y-[4px] px-[20px] lg:px-[5px] py-[20px] lg:py-0 font-medium text-[14px] text-rose-600 xl:text-[18px] text-center">
        <h4 className="w-[350px] lg:w-[650px] text-black dark:text-white text-left lg:text-left md:text-center">
          <span className="lg:mr-[140px]">Elastic & Hole Elastic</span> : 75,000
          Yards
        </h4>
        <h4 className="w-[350px] lg:w-[650px] text-black dark:text-white text-left lg:text-left md:text-center">
          <span className="lg:mr-[181px]">Jacquard Elastic</span> : 20,000 Yards
        </h4>

        <h4 className="w-[350px] lg:w-[650px] text-black dark:text-white text-left lg:text-left md:text-center">
          <span className="lg:mr-[128px]">Drawstring, Drawcord</span> : 60,000
          Yards
        </h4>
        <h4 className="w-[350px] lg:w-[650px] text-black dark:text-white text-left lg:text-left md:text-center">
          <span className="lg:mr-[90px]">Twill Tape, Grosgrain Tape</span> :
          25,000 Yards
        </h4>
        <h4 className="w-[350px] lg:w-[650px] text-black dark:text-white text-left lg:text-left md:text-center">
          <span className="lg:mr-[95px]">Sporting Tape or Rib Tape</span> :
          20,000 Yards
        </h4>
        <h4 className="w-[350px] lg:w-[650px] text-black dark:text-white text-left lg:text-left md:text-center">
          <span className="lg:mr-[209px]">Woven Belts</span> : 10,000 Pcs
        </h4>
        <h4 className="w-[350px] lg:w-[650px] text-black dark:text-white text-left lg:text-left md:text-center">
          <span className="lg:mr-[51px]">Plastic, Metal & Thread Tipping</span>{" "}
          : 50,000 Pcs
        </h4>
      </div>
      {/* Right */}
    </motion.div>
  );
};

export default Production;
