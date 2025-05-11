"use client";
import TwillTape from "@/components/Product/TwillTape";
import React from "react";

export default function TapeContent() {
  return (
    <div className="flex flex-col justify-between items-center mx-auto mt-[50px] w-[380px] md:w-[768px] xl:w-[1280px] lg:max-w-[1024px] text-white">
      <div>
        {/* Top Side */}
        <div>
          <h3 className="mx-auto mb-[50px] lg:w-[600px] font-semibold text-[30px] text-black lg:text-[45px] dark:text-white text-center">
            Tape & Belt Unit{" "}
            <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-400 transition-all duration-800">
              Details
            </span>
          </h3>
        </div>

        {/* Bottom Side */}

        <div className="flex flex-col justify-around items-center lg:items-start gap-[10px] bg-cyan-900 dark:bg-cyan-900/30 p-[30px] lg:w-[1024px] xl:w-[1280px] lg:text-left text-center id-twilltape">
          <h2 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-200 text-3xl">
            Tape & Belt Unit – Woven to Impress
          </h2>
          <p>
            At Tape & Belt Unit, our Tape Division is where craftsmanship meets
            creativity. We specialize in producing a wide variety of
            customizable tapes that bring style and strength to your products.
          </p>
          <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-amber-100 text-2xl">
            What We Offer:
          </h3>
          <h4>
            <span className="text-green-400 text-lg">
              Multi-Color Fashion Twill Tapes :
            </span>{" "}
            In both polyester & cotton, with bold or subtle color combos.
          </h4>
          <h4>
            <span className="text-green-400 text-lg">Grosgrain Tapes :</span> A
            wide variety of patterns and finishes for that perfect touch.
          </h4>
          <h4>
            <span className="text-green-400 text-lg">Jacquard Tapes :</span>{" "}
            Intricate weaves, stylish designs, and standout branding.
          </h4>

          <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-amber-100 text-2xl">
            Custom sizes, colors (DTM), stripe patterns, and weaving styles
          </h3>
          <h3>we bring your tape vision to life.</h3>
          <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-amber-100 text-2xl">
            From high-fashion to industrial, our tapes are designed to enhance,
            built to last.
          </h3>
          {/* Closing Tag */}
          <div className="flex flex-row justify-between items-center gap-2 mx-auto mt-[10px]">
            <h3 className="bg-white w-[40px] h-[3px]"></h3>
            <h3 className="bg-white rounded-full w-[10px] h-[10px]"></h3>
            <h3 className="bg-white w-[40px] h-[3px]"></h3>
          </div>
        </div>
      </div>
      {/* Gallery */}
      <div>
        <TwillTape />
      </div>
    </div>
  );
}
