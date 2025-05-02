"use client";

import Rib from "@/components/Product/Rib";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col justify-between items-center mx-auto mt-[50px] w-[380px] md:w-[768px] xl:w-[1280px] lg:max-w-[1024px]">
      <div>
        {/* Top Side */}
        <div>
          <h3 className="mx-auto mb-[50px] lg:w-[800px] font-semibold text-[30px] lg:text-[45px] text-center">
            Sporting & Rib Tape Unit{" "}
            <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-400 transition-all duration-800">
              Details
            </span>
          </h3>
        </div>

        {/* Bottom Side */}

        <div className="flex flex-col justify-around items-center lg:items-start gap-[10px] bg-cyan-900/30 p-[30px] lg:w-[1024px] xl:w-[1280px] lg:text-left text-center">
          <h2 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-200 text-3xl">
            Sporting & Rib Tape Unit – Precision Support, Performance Style
          </h2>
          <p>
            At Rib Tape Unit, we understand that performance wear demands more
            than just stretch—it needs structure, comfort, and resilience. Our
            Sporting and Rib Tape Unit delivers just that, offering tailored
            solutions for activewear, outerwear, and technical garments.
          </p>
          <h3 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-100 text-2xl">
            Our Range of Performance Enhancers
          </h3>
          <h4>
            <span className="text-green-400 text-lg">Sporting Tape :</span>{" "}
            Designed for durability and flexibility, our sporting tape is ideal
            for reinforcing seams, waistbands, cuffs, and collars. With
            excellent stretch recovery and abrasion resistance, it supports
            movement while retaining shape—even under the most intense
            conditions. Perfect for activewear, uniforms, and athleisure
            apparel.
          </h4>
          <h4>
            <span className="text-green-400 text-lg"> Rib Tape : </span> A
            staple in garment finishing, our rib tape adds both function and
            flair. Available in various textures, widths, and rib patterns, it
            ensures snug fits and clean edges. Whether used in necklines,
            sleeves, or hems, it provides comfort and structure while enhancing
            your product’s overall look.
          </h4>
          <h4>
            Manufactured with high-quality yarns and advanced weaving
            technology, both tapes offer customizable options in color, width,
            thickness, and elasticity to match your brand’s unique needs.
          </h4>

          <h3 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-100 text-2xl">
            Built for Motion. Designed to Last.
          </h3>
          <h3>
            From the gym to the street, our Sporting and Rib Tape Unit keeps
            your garments in peak form, wear after wear.
          </h3>
        </div>
      </div>
      {/* Gallery */}
      <div>
        <Rib />
      </div>
    </div>
  );
}
