import React from "react";

export default function Vision() {
  return (
    <div className="bg-slate-50 shadow-[0_0_7px_4px_#61caff] mx-auto mt-[50px] lg:mt-0 p-[20px] lg:px-[50px] lg:py-[25px] border-3 border-cyan-400 lg:rounded-tl-[50px] lg:rounded-br-[50px] w-[380px] lg:w-[1200px] text-[20px] lg:text-[25px]">
      <h3 className="mb-[30px] py-[10px] border-b-3 border-black font-bold text-black lg:text-[50px] text-center">
        <span className="text-green-600">Vision</span>,{" "}
        <span className="text-purple-600">Values</span> &{" "}
        <span className="text-rose-600">Offers</span>
      </h3>
      <h4 className="lg:px-[20px] font-sans text-[20px] lg:text-center lg:leading-[35px]">
        <span className="text-green-600">
          Customers Satisfaction is our top priority.
        </span>{" "}
        <span className="text-purple-600">
          Maintain global presence & standard quality, Maximum Resource
          Utilization, Ensure intelligence & skill of human capital.
        </span>{" "}
        <span className="text-rose-600">
          Available service round the clock & Competitive price with best
          quality & Best attention to all inquiries at all time. We always
          Professionalism in business dealings.
        </span>
      </h4>
      <div className="flex flex-row justify-center lg:items-center gap-2 mx-auto mt-[30px]">
        <h3 className="bg-indigo-600 w-[40px] h-[3px]"></h3>
        <h3 className="bg-indigo-600 rounded-full w-[10px] h-[10px]"></h3>
        <h3 className="bg-indigo-600 w-[40px] h-[3px]"></h3>
      </div>

      {/* <h4 className="lg:px-[0px] text-[20px] text-green-600 text-center">
        Customers Satisfaction is our top priority.
      </h4>
      <h4 className="lg:px-[200px] text-[20px] text-purple-600 text-center">
        Maintain global presence & standard quality, Maximum Resource
        Utilization, Ensure intelligence & skill of human capital.
      </h4>
      <h4 className="lg:px-[200px] text-[20px] text-rose-600 text-center">
        Available service round the clock & Competitive price with best quality
        & Best attention to all inquiries at all time. We always Professionalism
        in business dealings.
      </h4> */}
    </div>
  );
}
