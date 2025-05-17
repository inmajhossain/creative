import { motion } from "framer-motion";
import React from "react";

export default function Buyers() {
  return (
    <div className="hidden lg:flex xl:flex lg:flex-col xl:flex-col mx-auto lg:mt-[50px] mb-[50px] lg:mb-[150px] w-[380px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] lg:h-[520px] font-semibold text-black">
      {/* Top */}
      <div>
        <h2 className="mx-auto py-[2px] dark:border-amber-100 border-b-3 border-black lg:w-[270px] font-thin text-md dark:text-white lg:text-2xl text-center lobster">
          Message From Management
        </h2>
      </div>
      {/* Down */}
      <div className="hidden lg:flex xl:flex lg:flex-col xl:flex-col mx-auto lg:mt-[50px] mb-[50px] lg:mb-[100px] w-[380px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] lg:h-[520px] font-semibold text-black">
        {/* Left */}
        <motion.div
          className="space-y-2 bg-green-300 mx-auto px-[15px] py-[20px] rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl lg:w-[600px] h-[280px] text-[15px]"
          animate={{ x: [0, -300] }}
          transition={{ delay: 2, duration: 3 }}
        >
          <h2 className="text-[22px] text-indigo-900 lobster">
            Dear Valuable Buyers,
          </h2>
          <p className="">
            In this ever changing world human inclinations are always changing
            day by day. The tradition of these changes is also present in
            Ready-made Garment Sector. The RMG Sector of Bangladesh is going
            ahead equally in competition with the present world market. In this
            challenging situation, we all are going forward to face the
            challenges & strive to provide complete satisfaction to our valuable
            Buyers. We are highly delighted to be an active participant with
            you. To reach this goal, we had started our journey on 2006.
          </p>
        </motion.div>
        {/* Right */}
        <motion.div
          className="space-y-2 bg-cyan-300 mx-auto px-[15px] py-[20px] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl lg:w-[600px] h-[280px] text-[15px]"
          animate={{ x: [0, 300] }}
          transition={{ delay: 2, duration: 3 }}
        >
          <h2 className="text-[22px] text-indigo-900 lobster">
            Dear Customers,
          </h2>
          <p className="">
            By gathering a wide experience we have realized that, three objects
            as "Quality, Timely delivery & Reasonable price" are main capital of
            any Business. We have an expert dedicated team, whose merits & hard
            work will help us to ensure these proper services. To do something
            better we need your co-operation, valuable suggestions & friendly
            manner, In future your valuable suggestions & recommendation will be
            highly appreciated to keep our effort successfully.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
