"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import be1 from "@/image/belt/be1.webp";
import be2 from "@/image/belt/be2.webp";
import be3 from "@/image/belt/be3.webp";
import be4 from "@/image/belt/be4.webp";
import be5 from "@/image/belt/be5.webp";
import be6 from "@/image/belt/be6.webp";
import be7 from "@/image/belt/be7.webp";
import be8 from "@/image/belt/be8.webp";
import be9 from "@/image/belt/be9.webp";
import be10 from "@/image/belt/be10.webp";
import be11 from "@/image/belt/be11.webp";
import be12 from "@/image/belt/be12.webp";
import be13 from "@/image/belt/be13.webp";
import be14 from "@/image/belt/be14.webp";
import be15 from "@/image/belt/be15.webp";
import be16 from "@/image/belt/be16.webp";
import be17 from "@/image/belt/be17.webp";
import be18 from "@/image/belt/be18.webp";
import be19 from "@/image/belt/be19.webp";
import be20 from "@/image/belt/be20.webp";
import be21 from "@/image/belt/be21.webp";
import be22 from "@/image/belt/be22.webp";
import be23 from "@/image/belt/be23.webp";
import be24 from "@/image/belt/be24.webp";
import be25 from "@/image/belt/be25.webp";
import be26 from "@/image/belt/be26.webp";
import be27 from "@/image/belt/be27.webp";
import be28 from "@/image/belt/be28.webp";
import be29 from "@/image/belt/be29.webp";
import be30 from "@/image/belt/be30.webp";
import be31 from "@/image/belt/be31.webp";
import be32 from "@/image/belt/be32.webp";
import be33 from "@/image/belt/be33.webp";
import be34 from "@/image/belt/be34.webp";
import be35 from "@/image/belt/be35.webp";
import be36 from "@/image/belt/be36.webp";
import be37 from "@/image/belt/be37.webp";
import be38 from "@/image/belt/be38.webp";
import be39 from "@/image/belt/be39.webp";
import be40 from "@/image/belt/be40.webp";

const images = [
  be1,
  be2,
  be3,
  be4,
  be5,
  be31,
  be32,
  be33,
  be34,
  be35,
  be6,
  be7,
  be8,
  be9,
  be10,
  be36,
  be37,
  be38,
  be39,
  be40,
  be11,
  be12,
  be13,
  be14,
  be15,
  be16,
  be17,
  be18,
  be19,
  be20,
  be21,
  be22,
  be23,
  be24,
  be25,
  be26,
  be27,
  be28,
  be29,
  be30,
];

export default function belt() {
  const [showAll, setShowAll] = useState(false);

  const products = images.map((image, index) => ({
    // id: index + 1,
    // title: `belt ${index + 1}`,
    title: `Belt`,
    imagePath: image,
  }));

  const displayedProducts = showAll ? products : products.slice(0, 8);

  return (
    <div className="flex flex-col items-center mx-auto mt-[50px] xl:w-[1280px] max-w-[270px] md:max-w-[768px] lg:max-w-[1024px]">
      <div className="w-[380px] md:w-[1024px]">
        {/* Top */}
        <div>
          <h3 className="mx-auto mb-[50px] lg:w-[600px] font-semibold text-[30px] text-black lg:text-[45px] dark:text-white text-center">
            Woven Belt{" "}
            <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-400 transition-all duration-800">
              Gallery
            </span>
          </h3>
        </div>
        {/* Bottom */}
        <div className="flex flex-row flex-wrap justify-between items-center gap-[15px] gap-y-[30px] md:gap-y-0 lg:gap-[30px] mx-auto w-[380px] md:w-[1024px]">
          {displayedProducts.map(product => (
            <Link href="/product/belt" className="block">
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
