import { motion } from "framer-motion";
import React from "react";

const Production = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 100] }}
      transition={{ duration: 3, delay: 2 }}
      className="flex lg:flex-row flex-col justify-around gap-[10px] bg-cyan-100 dark:bg-transparent shadow-lg mx-auto mt-[20px] lg:mt-[30px] lg:p-[15px] border-3 border-cyan-400 w-[380px] md:w-[768px] lg:w-[1024px] xl:w-[1024px] text-black text-md text-center"
    >
      <div className="flex lg:flex-row justify-center items-center md:px-[25px] md:py-[30px] border-green-600 md:border-r-3 md:w-[250px]">
        <h3 className="py-[25px] md:py-0 border-green-600 border-b-3 md:border-none w-full font-bold text-[18px] text-rose-600 md:text-[30px] dark:text-white md:text-left text-center">
          Everyday Production Capacity
        </h3>
      </div>
      <div className="flex flex-col justify-around items-center space-y-[4px] lg:px-[5px] font-bold text-[12px] text-rose-600 xl:text-[18px] text-left">
        <h4 className="w-[350px] lg:w-[650px] dark:text-white">
          Elastic & Hole Elastic : 50,000 Yards (Fifty Thousand Yards)
        </h4>
        <h4 className="w-[350px] lg:w-[650px] text-purple-600 dark:text-amber-100">
          Jacquard Elastic : 20,000 Yards (Twenty Thousand Yards)
        </h4>

        <h4 className="w-[350px] lg:w-[650px] dark:text-white">
          Drawstring, Drawcord : 60,000 Yards (Sixty Thousand Yards)
        </h4>
        <h4 className="w-[350px] lg:w-[650px] text-purple-600 dark:text-amber-100">
          Twill Tape, Grosgrain Tape : 25,000 Yards (Twenty Five Thousand Yards)
        </h4>
        <h4 className="w-[350px] lg:w-[650px] dark:text-white">
          Sporting Tape or Rib Tape : 20,000 Yards (Twenty Thousand Yards)
        </h4>
        <h4 className="w-[350px] lg:w-[650px] text-purple-600 dark:text-amber-100">
          Belts : 25,000 Pcs (Twenty Five Thousand Pcs)
        </h4>
        <h4 className="w-[350px] lg:w-[650px] dark:text-white">
          Plastic, Metal & Thread Tipping : 50,000 Pcs (Fifty Thousand Pcs)
        </h4>
      </div>
      {/* Right */}
    </motion.div>
  );
};

export default Production;
