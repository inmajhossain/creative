"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import machine3 from "@/image/machine/machine3.jpg";
import machine5 from "@/image/machine/machine5.jpg";
import machine6 from "@/image/machine/machine6.jpg";
import machine7 from "@/image/machine/machine7.jpg";
import machine9 from "@/image/machine/machine9.webp";
import machine10 from "@/image/machine/machine10.webp";
import machine12 from "@/image/machine/machine12.webp";
import machine13 from "@/image/machine/machine13.avif";
import machine14 from "@/image/machine/machine14.jpg";
import machine15 from "@/image/machine/machine15.webp";
import machine17 from "@/image/machine/machine17.jpg";
import machine18 from "@/image/machine/machine18.jpg";
import machine19 from "@/image/machine/machine19.webp";
import machine20 from "@/image/machine/machine20.jpg";

const images = [
  { imagePath: machine12, title: "Jacquard Elastic Machine" },
  { imagePath: machine13, title: "Crochet Knitting Machine" },
  { imagePath: machine14, title: "Full Automatic Drawstring Machine" },
  { imagePath: machine15, title: "Sporting Tape / Rib Tape Machine" },
  { imagePath: machine17, title: "Needle Loom Machine" },
  { imagePath: machine18, title: "Auto warping Machine" },
  { imagePath: machine19, title: "Automatic Yarn warping Machine" },
  { imagePath: machine20, title: "Automatic Yarn Wraping Machine Reak" },
  { imagePath: machine3, title: "Jacquard Elastic Machine" },
  { imagePath: machine5, title: "Winding Machine" },
  {
    imagePath: machine6,
    title: "Full Automatic Digital Plastic Tipping Machine",
  },
  { imagePath: machine7, title: "Full Automatic Drawstring Machine" },

  { imagePath: machine9, title: "Metal Detector" },
  { imagePath: machine10, title: "Human Metal Detector Machine" },
];

export default function Page() {
  return (
    <div className="flex flex-col items-center mx-auto py-12 w-full xl:w-[1280px] max-w-[270px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
      <div className="py-12 w-full max-w-[380px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
        {/* Top */}
        <div>
          <h3 className="mx-auto mb-[50px] lg:w-[600px] font-semibold text-[30px] lg:text-[45px] text-center">
            Machineries{" "}
            <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-400 transition-all duration-800">
              Gallery
            </span>
          </h3>
        </div>
        {/* Bottom */}
        <div className="flex md:flex-row lg:flex-row flex-col flex-wrap justify-between gap-[15px] lg:gap-[30px] lg:gap-y-[60px] mx-auto">
          {images.map((product, index) => (
            <div className="md:justify-around shadow-[0_0_10px_6px_#61caff] mx-auto p-[15px] rounded-lg w-[250px] lg:w-[380px] lg:h-[420px] overflow-hidden">
              <Image
                src={product.imagePath}
                alt={product.title}
                width={350}
                height={370}
                className="bg-white w-[220px] lg:w-[350px] h-[220px] lg:h-[350px] object-contain"
              />
              <div>
                <h3 className="mt-[20px] text-[20px] dark:text-white text-center">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
