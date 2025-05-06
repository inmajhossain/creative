"use client";

import Jaquard from "@/components/Product/Jaquard";
import React from "react";

export default function JacquardContent() {
  return (
    <div className="flex flex-col justify-between items-center mx-auto mt-[50px] w-[380px] md:w-[768px] xl:w-[1280px] lg:max-w-[1024px] text-white">
      <div>
        {/* Top Side */}
        <div>
          <h3 className="mx-auto mb-[50px] lg:w-[700px] font-semibold text-[30px] text-black lg:text-[45px] dark:text-white text-center">
            Jaquard Elastic Unit{" "}
            <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-400 transition-all duration-800">
              Details
            </span>
          </h3>
        </div>

        {/* Bottom Side */}

        <div className="flex flex-col justify-around items-center lg:items-start gap-[10px] bg-cyan-900 dark:bg-cyan-900/30 p-[30px] lg:w-[1024px] xl:w-[1280px] lg:text-left text-center">
          <h2 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-200 text-3xl">
            Jacquard Elastic – Where Style and Structure Intertwine
          </h2>
          <p>
            At Jaquard Elastic Unit, our Jacquard elastic is more than just a
            component—it's a statement. Woven with precision on advanced
            Jacquard looms, this elastic combines strength with high-definition
            patterns to deliver unmatched visual appeal and performance.
          </p>

          <h4>
            Available in Polyester and Nylon bases, our Jacquard elastic
            supports intricate logos, text, and motifs in a variety of colors
            and finishes. From bold branding on waistbands to delicate detailing
            on fashion and functional wear, this elastic is designed to elevate
            your product’s identity.
          </h4>
          <h4>
            Choose from a wide range of widths, textures, and design options, or
            bring your own pattern to life with our fully customizable Jacquard
            services. Whether you’re building a high-performance sports line or
            a luxury lingerie collection, our Jacquard elastic blends
            durability, flexibility, and design innovation seamlessly.
          </h4>

          <h3 className="py-[10px] w-full text-amber-100 text-2xl">
            Distinctive. Durable. Designed for you. That’s Jacquard Elastic
            Unit.
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
        <Jaquard />
      </div>
    </div>
  );
}
