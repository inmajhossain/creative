"use client";
import Drawstring from "@/components/Product/Drawstring";
import React from "react";

export default function DrawstringContent() {
  return (
    <div className="flex flex-col justify-between items-center mx-auto mt-[50px] w-[380px] md:w-[768px] xl:w-[1280px] lg:max-w-[1024px] text-white">
      <div>
        {/* Top Side */}
        <div>
          <h3 className="mx-auto mb-[50px] lg:w-[600px] font-semibold text-[30px] text-black lg:text-[45px] dark:text-white text-center">
            Drawstring Unit{" "}
            <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-400 transition-all duration-800">
              Details
            </span>
          </h3>
        </div>

        {/* Bottom Side */}

        <div className="flex flex-col justify-around items-center lg:items-start gap-[10px] bg-green-900 dark:bg-rose-900/30 p-[30px] lg:w-[1280px] lg:text-left text-center">
          <h2 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-200 text-3xl">
            Drawstring Unit – Where Detail Makes the Difference
          </h2>
          <p>
            At Drawstring Unit, our Drawstring Division is all about design,
            precision, and performance. With a wide range of advanced machinery
            and materials, we craft custom drawstrings in every style, shape,
            and color imaginable.
          </p>
          <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-amber-100 text-2xl">
            From Stripe to Solid, Round to Flat we offer:
          </h3>
          <h4>
            <span className="text-green-400 text-lg">Round Drawstring :</span>{" "}
            16SP & 18SP
          </h4>
          <h4>
            <span className="text-green-400 text-lg">Flat Drawstring :</span>{" "}
            17SP & 33SP
          </h4>
          <h4>
            <span className="text-green-400 text-lg">Tube Drawstring :</span>{" "}
            32SP & 48SP
          </h4>
          <h4>
            <span className="text-green-400 text-lg">Design Drawstring :</span>{" "}
            43SP & 46SP
          </h4>

          <h3 className="py-[10px] border-cyan-400 border-b-2 text-amber-100 text-2xl">
            Premium Tipping Finishes
          </h3>
          <h3>
            We provide plastic, metal & thread tipping, available in logo or
            non-logo options Azo free, lead free, magnet free, and made to meet
            global safety standards.
          </h3>
          <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-amber-100 text-2xl">
            Custom Colors. Unique Weaves. Tailored Sizes.
          </h3>
          <h3>
            From fashion to function, we bring your drawstring ideas to life
            with quality that ties it all together.
          </h3>
          {/* Closing Tag */}
          <div className="flex flex-row justify-between items-center gap-2 mx-auto mt-[10px]">
            <h3 className="dark:bg-white w-[40px] h-[3px]"></h3>
            <h3 className="dark:bg-white rounded-full w-[10px] h-[10px]"></h3>
            <h3 className="dark:bg-white w-[40px] h-[3px]"></h3>
          </div>
        </div>
      </div>
      {/* Gallery */}
      <div>
        <Drawstring />
      </div>
    </div>
  );
}
