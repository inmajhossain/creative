"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ri1 from "@/image/rib/ri1.webp";
import ri2 from "@/image/rib/ri2.webp";
import ri3 from "@/image/rib/ri3.webp";
import ri4 from "@/image/rib/ri4.webp";

import ri6 from "@/image/rib/ri6.webp";
import ri7 from "@/image/rib/ri7.webp";
import ri8 from "@/image/rib/ri8.webp";
import ri9 from "@/image/rib/ri9.webp";
import ri10 from "@/image/rib/ri10.webp";
import ri11 from "@/image/rib/ri11.webp";
import ri12 from "@/image/rib/ri12.webp";
import ri13 from "@/image/rib/ri13.webp";
import ri14 from "@/image/rib/ri14.webp";
import ri15 from "@/image/rib/ri15.webp";
import ri16 from "@/image/rib/ri16.webp";
import ri17 from "@/image/rib/ri17.webp";
import ri18 from "@/image/rib/ri18.webp";
import ri19 from "@/image/rib/ri19.webp";
import ri20 from "@/image/rib/ri20.webp";
import ri21 from "@/image/rib/ri21.webp";
import ri22 from "@/image/rib/ri22.webp";
import ri23 from "@/image/rib/ri23.webp";
import ri24 from "@/image/rib/ri24.webp";
import ri25 from "@/image/rib/ri25.webp";
import ri26 from "@/image/rib/ri26.webp";
import ri27 from "@/image/rib/ri27.webp";
import ri28 from "@/image/rib/ri28.webp";
import ri29 from "@/image/rib/ri29.webp";
import ri30 from "@/image/rib/ri30.webp";

const images = [
  ri1,
  ri2,
  ri3,
  ri4,

  ri6,
  ri7,
  ri8,
  ri9,
  ri10,
  ri11,
  ri12,
  ri13,
  ri14,
  ri15,
  ri16,
  ri17,
  ri18,
  ri19,
  ri20,
  ri21,
  ri22,
  ri23,
  ri24,
  ri25,
  ri26,
  ri27,
  ri28,
  ri29,
  ri30,
];

export default function Rib() {
  const [showAll, setShowAll] = useState(false);

  const products = images.map((image, index) => ({
    // id: index + 1,
    // title: `rib ${index + 1}`,
    title: `Rib Tape`,
    imagePath: image,
  }));

  const displayedProducts = showAll ? products : products.slice(0, 8);

  return (
    <div className="flex flex-col items-center mx-auto mt-[50px] xl:w-[1280px] max-w-[380px] md:max-w-[768px] lg:max-w-[1024px]">
      <div className="w-[380px] md:w-[1024px]">
        {/* Top */}
        <div>
          <h3 className="mx-auto mb-[50px] lg:w-[800px] font-semibold text-[30px] text-black lg:text-[45px] dark:text-white text-center">
            Sporting Tape or Rib Tape{" "}
            <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-400 transition-all duration-800">
              Gallery
            </span>
          </h3>
        </div>
        {/* Bottom */}
        <div className="flex flex-row flex-wrap justify-between items-center gap-[15px] gap-y-[30px] md:gap-y-0 lg:gap-[30px] mx-auto w-[380px] md:w-[1024px]">
          {displayedProducts.map(product => (
            <Link href="/product/rib" className="block">
              <div className="group relative md:justify-around shadow-[0_0_10px_6px_#61caff] rounded-lg md:rounded-tl-[50px] md:rounded-br-[50px] w-[80px] md:w-[230px] h-[80px] md:h-[230px] overflow-hidden hover:rotate-360 transition-all duration-5000 transform">
                <Image
                  src={product.imagePath}
                  alt={product.title}
                  width={230}
                  height={230}
                  className="w-[80px] md:w-[230px] h-[80px] md:h-[230px] object-cover"
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
    </div>
  );
}
