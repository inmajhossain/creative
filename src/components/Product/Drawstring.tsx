"use client";
// components/Drawstring.jsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import dr1 from "@/image/drawstring/dr1.webp";
import dr2 from "@/image/drawstring/dr2.webp";
import dr3 from "@/image/drawstring/dr3.webp";
import dr4 from "@/image/drawstring/dr4.webp";
import dr5 from "@/image/drawstring/dr5.webp";
import dr6 from "@/image/drawstring/dr6.webp";
import dr7 from "@/image/drawstring/dr7.webp";
import dr8 from "@/image/drawstring/dr8.webp";
import dr9 from "@/image/drawstring/dr9.webp";
import dr10 from "@/image/drawstring/dr10.webp";
import dr11 from "@/image/drawstring/dr11.webp";
import dr12 from "@/image/drawstring/dr12.webp";
import dr13 from "@/image/drawstring/dr13.webp";
import dr14 from "@/image/drawstring/dr14.webp";
import dr15 from "@/image/drawstring/dr15.webp";
import dr16 from "@/image/drawstring/dr16.webp";
import dr17 from "@/image/drawstring/dr17.webp";
import dr18 from "@/image/drawstring/dr18.webp";
import dr19 from "@/image/drawstring/dr19.webp";
import dr20 from "@/image/drawstring/dr20.webp";
import dr21 from "@/image/drawstring/dr21.webp";
import dr22 from "@/image/drawstring/dr22.webp";
import dr23 from "@/image/drawstring/dr23.webp";
import dr24 from "@/image/drawstring/dr24.webp";
import dr25 from "@/image/drawstring/dr25.webp";
import dr26 from "@/image/drawstring/dr26.webp";
import dr27 from "@/image/drawstring/dr27.webp";
import dr28 from "@/image/drawstring/dr28.webp";
import dr29 from "@/image/drawstring/dr29.webp";
import dr30 from "@/image/drawstring/dr30.webp";
import dr31 from "@/image/drawstring/dr31.webp";
import dr32 from "@/image/drawstring/dr32.webp";
import dr33 from "@/image/drawstring/dr33.webp";
import dr34 from "@/image/drawstring/dr34.webp";
import dr35 from "@/image/drawstring/dr35.webp";
import dr36 from "@/image/drawstring/dr36.webp";
import dr37 from "@/image/drawstring/dr37.webp";
import dr38 from "@/image/drawstring/dr38.webp";
import dr39 from "@/image/drawstring/dr39.webp";
import dr40 from "@/image/drawstring/dr40.webp";
import dr41 from "@/image/drawstring/dr41.webp";
import dr42 from "@/image/drawstring/dr42.webp";
import dr43 from "@/image/drawstring/dr43.webp";
import dr44 from "@/image/drawstring/dr44.webp";
import dr45 from "@/image/drawstring/dr45.webp";
import dr46 from "@/image/drawstring/dr46.webp";
import dr47 from "@/image/drawstring/dr47.webp";
import dr48 from "@/image/drawstring/dr48.webp";
import dr49 from "@/image/drawstring/dr49.webp";
import dr50 from "@/image/drawstring/dr50.webp";
import dr51 from "@/image/drawstring/dr51.webp";
import dr52 from "@/image/drawstring/dr52.webp";

import dr54 from "@/image/drawstring/dr54.webp";

const images = [
  dr1,
  dr2,
  dr3,
  dr4,
  dr5,
  dr6,
  dr7,
  dr8,
  dr9,
  dr10,
  dr11,
  dr12,
  dr13,
  dr14,
  dr15,
  dr16,
  dr17,
  dr18,
  dr19,
  dr20,
  dr21,
  dr22,
  dr23,
  dr24,
  dr25,
  dr26,
  dr27,
  dr28,
  dr29,
  dr30,
  dr31,
  dr32,
  dr33,
  dr34,
  dr35,
  dr36,
  dr37,
  dr38,
  dr39,
  dr40,
  dr41,
  dr42,
  dr43,
  dr44,
  dr45,
  dr46,
  dr47,
  dr48,
  dr49,
  dr50,
  dr51,
  dr52,
  dr54,
];

export default function Drawstring() {
  const [showAll, setShowAll] = useState(false);

  const products = images.map((image, index) => ({
    // id: index + 1,
    // title: `Drawstring ${index + 1}`,
    title: `Drawstring`,
    imagePath: image,
  }));

  const displayedProducts = showAll ? products : products.slice(0, 10);

  return (
    <div className="flex flex-col items-center mx-auto mt-[50px] w-full xl:w-[1280px] max-w-[270px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
      <div className="py-12 w-full max-w-[230px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
        {/* Top */}
        <div>
          <h3 className="mx-auto mb-[50px] lg:w-[600px] font-semibold text-[30px] lg:text-[45px] text-center">
            Drawstring{" "}
            <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-400 transition-all duration-800">
              Gallery
            </span>
          </h3>
        </div>
        {/* Bottom */}
        <div className="flex md:flex-row lg:flex-row flex-col flex-wrap justify-between gap-[30px]">
          {displayedProducts.map(product => (
            <Link href="/product/drawstring" className="block">
              <div className="group relative md:justify-around shadow-[0_0_10px_6px_#61caff] rounded-lg rounded-tl-[50px] rounded-br-[50px] h-[230px] overflow-hidden hover:rotate-360 transition-all duration-5000 transform">
                <Image
                  src={product.imagePath}
                  alt={product.title}
                  width={230}
                  height={230}
                  className="w-[230px] h-[230px] object-cover"
                />
                <div className="right-0 bottom-0 left-0 absolute flex justify-center items-center bg-cyan-400/20 bg-opacity-70 p-4 rounded-tl-[50px] rounded-br-[50px] h-full text-white transition-transform translate-y-full group-hover:translate-y-0 duration-1000 delay-4000 transform">
                  <h3 className="font-bold text-fuchsia-600 text-3xl text-center">
                    {product.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-[80px]">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-white hover:bg-cyan-50 px-6 py-2 rounded-full font-semibold text-cyan-600 transition-colors"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
}
