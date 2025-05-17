"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import jq1 from "@/image/jaquard/jq1.webp";
import jq2 from "@/image/jaquard/jq2.webp";
import jq3 from "@/image/jaquard/jq3.webp";
import jq4 from "@/image/jaquard/jq4.webp";
import jq5 from "@/image/jaquard/jq5.webp";
import jq6 from "@/image/jaquard/jq6.webp";
import jq7 from "@/image/jaquard/jq7.webp";
import jq8 from "@/image/jaquard/jq8.webp";
import jq9 from "@/image/jaquard/jq9.webp";
import jq10 from "@/image/jaquard/jq10.webp";
import jq11 from "@/image/jaquard/jq11.webp";
import jq12 from "@/image/jaquard/jq12.webp";
import jq13 from "@/image/jaquard/jq13.webp";
import jq14 from "@/image/jaquard/jq14.webp";
import jq15 from "@/image/jaquard/jq15.webp";
import jq16 from "@/image/jaquard/jq16.webp";
import jq17 from "@/image/jaquard/jq17.webp";
import jq18 from "@/image/jaquard/jq18.webp";
import jq19 from "@/image/jaquard/jq19.webp";
import jq20 from "@/image/jaquard/jq20.webp";
import jq21 from "@/image/jaquard/jq21.webp";
import jq22 from "@/image/jaquard/jq22.webp";
import jq23 from "@/image/jaquard/jq23.webp";
import jq24 from "@/image/jaquard/jq24.webp";
import jq25 from "@/image/jaquard/jq25.webp";
import jq26 from "@/image/jaquard/jq26.webp";
import jq27 from "@/image/jaquard/jq27.webp";
import jq28 from "@/image/jaquard/jq28.webp";
import jq29 from "@/image/jaquard/jq29.webp";
import jq30 from "@/image/jaquard/jq30.webp";

const images = [
  jq1,
  jq2,
  jq3,
  jq4,
  jq5,
  jq6,
  jq7,
  jq8,
  jq9,
  jq10,
  jq11,
  jq12,
  jq13,
  jq14,
  jq15,
  jq16,
  jq17,
  jq18,
  jq19,
  jq20,
  jq21,
  jq22,
  jq23,
  jq24,
  jq25,
  jq26,
  jq27,
  jq28,
  jq29,
  jq30,
];

export default function jaquard() {
  const [showAll, setShowAll] = useState(false);

  const products = images.map((image, index) => ({
    // id: index + 1,
    // title: `jaquard ${index + 1}`,
    title: `Jaquard`,
    imagePath: image,
  }));

  const displayedProducts = showAll ? products : products.slice(0, 8);

  return (
    <div className="flex flex-col items-center mx-auto mt-[50px] xl:w-[1280px] max-w-[270px] md:max-w-[768px] lg:max-w-[1024px]">
      <div className="w-[380px] md:w-[1024px]">
        {/* Top */}
        <div>
          <h3 className="mx-auto mb-[50px] lg:w-[600px] font-semibold text-[30px] text-black lg:text-[45px] dark:text-white text-center">
            Jacquard Elastic{" "}
            <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-400 transition-all duration-800">
              Gallery
            </span>
          </h3>
        </div>
        {/* Bottom */}
        <div className="flex flex-row flex-wrap justify-between items-center gap-[15px] gap-y-[30px] md:gap-y-0 lg:gap-[30px] mx-auto w-[380px] md:w-[1024px]">
          {displayedProducts.map(product => (
            <Link href="/product/jaquard" className="block">
              <div className="group relative md:justify-around shadow-[0_0_10px_6px_#61caff] rounded-lg md:rounded-tl-[50px] md:rounded-br-[50px] w-[80px] md:w-[230px] h-[80px] md:h-[230px] overflow-hidden hover:rotate-360 transition-all duration-5000 transform">
                <Image
                  src={product.imagePath}
                  alt={product.title}
                  width={230}
                  height={230}
                  className="w-[80px] md:w-[230px] h-[80px] md:h-[230px] object-cover"
                />
                <div className="right-0 bottom-0 left-0 absolute flex justify-center items-center bg-cyan-400/20 bg-opacity-70 p-4 rounded-tl-[50px] rounded-br-[50px] h-full text-white transition-transform translate-y-full group-hover:translate-y-0 duration-100 delay-4000 transform">
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
