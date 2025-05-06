"use client";

import Belt from "@/components/Product/Belt";
import TwillTape from "@/components/Product/TwillTape";
import React from "react";

export default function BeltContent() {
  return (
    <div className="flex flex-col justify-between items-center mx-auto mt-[50px] w-[380px] md:w-[768px] xl:w-[1280px] lg:max-w-[1024px] text-white">
      <div>
        {/* Top Side */}
        <div>
          <h3 className="mx-auto mb-[50px] lg:w-[600px] font-semibold text-[30px] text-black lg:text-[45px] dark:text-white text-center">
            Tape & Woven Belt{" "}
            <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-400 transition-all duration-800">
              Details
            </span>
          </h3>
        </div>

        {/* Bottom Side */}

        <div className="flex flex-col justify-around items-center lg:items-start gap-[10px] bg-green-900 dark:bg-rose-900/30 mb-[50px] p-[30px] lg:w-[1024px] xl:w-[1280px] lg:text-left text-center">
          <h2 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-200 text-3xl">
            Belt Unit – Strength in Style
          </h2>
          <p>
            At Belt Unit, our Woven Belt Division combines durability with
            design. From bold fashion statements to functional everyday wear, we
            manufacture a wide range of custom belts that are as strong as they
            are stylish.
          </p>
          <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-amber-100 text-2xl">
            Our Belt Collection Includes:
          </h3>
          <h4>
            <span className="text-green-400 text-lg">
              D-Ring & Roller Buckle Belts :
            </span>{" "}
            Woven belts in variety of designs, built for both form and function.
          </h4>
          <h4>
            <span className="text-green-400 text-lg">
              {" "}
              D-Ring & Roller Buckle Belts :{" "}
            </span>{" "}
            Available in cotton & polyester, with solid or multicolor options.
          </h4>
          <h4>
            <span className="text-green-400 text-lg">
              Suspender Elastic Belts :
            </span>{" "}
            Fashion-forward, flexible, and available in vibrant designs.
          </h4>
          <h4>
            <span className="text-green-400 text-lg">
              Steel Hook & Stylish Buckle Belts :
            </span>{" "}
            Unique hardware options for a premium finish.
          </h4>
          <h4>
            <span className="text-green-400 text-lg">
              Fancy Ottoman Tape Belts :
            </span>{" "}
            Rich texture meets elegant design in both cotton and polyester.
          </h4>

          <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-amber-100 text-2xl">
            Custom sizes, patterns, colors (DTM), and weaves
          </h3>
          <h3>
            tailored exactly to your vision. From rugged utility to runway-ready
            looks, our belts are crafted to elevate any product.
          </h3>
          <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-amber-100 text-2xl">
            Custom Colors. Unique Weaves. Tailored Sizes.
          </h3>
          <h3>
            From fashion to function, we bring your belt ideas to life with
            quality that ties it all together.
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
        <Belt />
      </div>
    </div>
  );
}
