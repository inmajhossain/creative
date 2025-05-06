import { motion } from "framer-motion";
import React from "react";

const Production = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 100] }}
      transition={{ duration: 3, delay: 2 }}
      className="bg-cyan-100 dark:bg-transparent shadow-lg mx-auto mt-[50px] lg:mt-[100px] lg:p-[15px] px-[10px] border-2 border-cyan-400 dark:border-none rounded w-[380px] md:w-[768px] lg:w-[1024px] xl:w-[1200px] text-black text-md text-center"
    >
      <h3 className="mx-auto mb-[20px] py-[10px] lg:w-[800px] font-semibold text-[30px] lg:text-[45px] dark:text-white text-center">
        Everyday Production{" "}
        <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-400 transition-all duration-800">
          Capacity{" "}
        </span>
      </h3>
      {/* <h2 className="from-pink-400 to-cyan-400 mb-[50px] font-medium text-g text-lg lg:text-4xl">
        Everyday Production Capacity...
      </h2> */}

      <div className="flex flex-col justify-around items-center gap-[10px] mb-[20px] lg:px-[30px] font-bold text-white xl:text-[15px] dark:text-black lg:text-left">
        <h4 className="bg-cyan-900 dark:bg-slate-50 mx-auto xl:ml-0 px-[10px] py-[20px] rounded-[10px] w-[350px] lg:w-[580px] text-center">
          Elastic & Hole Elastic : 50,000 Yards (Fifty Thousand Yards)
        </h4>
        <h4 className="bg-cyan-900 dark:bg-slate-50 mx-auto xl:mr-0 px-[10px] py-[20px] rounded-[10px] w-[350px] lg:w-[580px] text-center">
          Twill Tape, Grosgrain Tape : 25,000 Yards (Twenty Five Thousand Yards)
        </h4>
        <h4 className="bg-cyan-900 dark:bg-slate-50 mx-auto xl:ml-0 px-[10px] py-[20px] rounded-[10px] w-[350px] lg:w-[580px] text-center">
          Jacquard Elastic : 20,000 Yards (Twenty Thousand Yards)
        </h4>
        <h4 className="bg-cyan-900 dark:bg-slate-50 mx-auto xl:mr-0 px-[10px] py-[20px] rounded-[10px] w-[350px] lg:w-[580px] text-center">
          Drawstring, Drawcord : 60,000 Yards (Sixty Thousand Yards)
        </h4>
        <h4 className="bg-cyan-900 dark:bg-slate-50 mx-auto xl:ml-0 px-[10px] py-[20px] rounded-[10px] w-[350px] lg:w-[580px] text-center">
          Sporting Tape or Rib Tape : 20,000 Yards (Twenty Thousand Yards)
        </h4>
        <h4 className="bg-cyan-900 dark:bg-slate-50 mx-auto xl:mr-0 px-[10px] py-[20px] rounded-[10px] w-[350px] lg:w-[580px] text-center">
          Belts : 25,000 Pcs (Twenty Five Thousand Pcs)
        </h4>
        <h4 className="bg-cyan-900 dark:bg-slate-50 mx-auto xl:ml-0 px-[10px] py-[20px] rounded-[10px] w-[350px] lg:w-[580px] text-center">
          Plastic, Metal & Thread Tipping : 50,000 Pcs (Fifty Thousand Pcs)
        </h4>
      </div>
    </motion.div>
  );
};

export default Production;
