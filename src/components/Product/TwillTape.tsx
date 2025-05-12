"use client";
// components/twilltape.jsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import tl1 from "@/image/twilltape/tl1.webp";
import tl2 from "@/image/twilltape/tl2.webp";
import tl3 from "@/image/twilltape/tl3.webp";
import tl4 from "@/image/twilltape/tl4.webp";
import tl5 from "@/image/twilltape/tl5.webp";
import tl6 from "@/image/twilltape/tl6.webp";
import tl7 from "@/image/twilltape/tl7.webp";
import tl8 from "@/image/twilltape/tl8.webp";
import tl9 from "@/image/twilltape/tl9.webp";
import tl10 from "@/image/twilltape/tl10.webp";
import tl11 from "@/image/twilltape/tl11.webp";
import tl12 from "@/image/twilltape/tl12.webp";
import tl13 from "@/image/twilltape/tl13.webp";
import tl14 from "@/image/twilltape/tl14.webp";
import tl15 from "@/image/twilltape/tl15.webp";
import tl16 from "@/image/twilltape/tl16.webp";
import tl17 from "@/image/twilltape/tl17.webp";
import tl18 from "@/image/twilltape/tl18.webp";
import tl19 from "@/image/twilltape/tl19.webp";
import tl20 from "@/image/twilltape/tl20.webp";
import tl21 from "@/image/twilltape/tl21.webp";
import tl22 from "@/image/twilltape/tl22.webp";
import tl23 from "@/image/twilltape/tl23.webp";
import tl24 from "@/image/twilltape/tl24.webp";
import tl25 from "@/image/twilltape/tl25.webp";
import tl26 from "@/image/twilltape/tl26.webp";
import tl27 from "@/image/twilltape/tl27.webp";
import tl28 from "@/image/twilltape/tl28.webp";
import tl29 from "@/image/twilltape/tl29.webp";
import tl30 from "@/image/twilltape/tl30.webp";
import tl31 from "@/image/twilltape/tl31.webp";
import tl32 from "@/image/twilltape/tl32.webp";
import tl33 from "@/image/twilltape/tl33.jpg";
import tl34 from "@/image/twilltape/tl34.jpg";
import tl35 from "@/image/twilltape/tl35.jpg";
import tl36 from "@/image/twilltape/tl36.jpg";
import tl37 from "@/image/twilltape/tl37.jpg";
import tl38 from "@/image/twilltape/tl38.jpg";

const images = [
  tl33,
  tl34,
  tl35,
  tl36,
  tl37,
  tl38,
  tl1,
  tl2,
  tl3,
  tl4,
  tl5,
  tl6,
  tl7,
  tl8,
  tl9,
  tl10,
  tl11,
  tl12,
  tl13,
  tl14,
  tl15,
  tl16,
  tl17,
  tl18,
  tl19,
  tl20,
  tl12,
  tl22,
  tl23,
  tl24,
  tl25,
  tl26,
  tl27,
  tl28,
  tl29,
  tl30,
  tl31,
  tl32,
];

export default function TwillTape() {
  const [showAll, setShowAll] = useState(false);

  const products = images.map((image, index) => ({
    // id: index + 1,
    // title: `twilltape ${index + 1}`,
    title: `Twill Tape`,
    imagePath: image,
  }));

  const displayedProducts = showAll ? products : products.slice(0, 8);

  return (
    <div className="flex flex-col items-center mx-auto mt-[50px] w-full xl:w-[1280px] max-w-[270px] md:max-w-[768px] lg:max-w-[1024px]">
      {/* Top */}
      <div>
        <h3 className="mx-auto mb-[50px] lg:w-[600px] font-semibold text-[30px] text-black lg:text-[45px] dark:text-white text-center">
          Tape{" "}
          <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-400 transition-all duration-800">
            Gallery
          </span>
        </h3>
      </div>
      {/* Bottom */}
      <div className="flex md:flex-row lg:flex-row flex-col flex-wrap justify-between gap-[30px]">
        {displayedProducts.map(product => (
          <Link href="/product/tape" className="block">
            <div className="group relative md:justify-around shadow-[0_0_10px_6px_#61caff] rounded-lg rounded-tl-[50px] rounded-br-[50px] h-[230px] overflow-hidden hover:rotate-360 transition-all duration-5000 transform">
              <Image
                src={product.imagePath}
                alt={product.title}
                width={230}
                height={230}
                className="w-[230px] h-[230px] object-cover"
              />
              <div className="right-0 bottom-0 left-0 absolute flex justify-center items-center bg-cyan-400/20 bg-opacity-70 p-4 rounded-tl-[50px] rounded-br-[50px] h-full text-white transition-transform translate-y-full group-hover:translate-y-0 duration-1000 delay-4000 transform">
                <h3 className="font-bold text-rose-600 text-3xl text-center">
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
          className="bg-white hover:bg-cyan-50 px-6 py-2 border-1 border-black dark:border-none rounded-full font-semibold text-cyan-400 transition-colors"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
}
