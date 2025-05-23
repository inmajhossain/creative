"use client";
// components/elastic.jsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import el2 from "@/image/elastic/el2.webp";
import el3 from "@/image/elastic/el3.webp";
import el4 from "@/image/elastic/el4.webp";
import el5 from "@/image/elastic/el5.webp";
import el6 from "@/image/elastic/el6.webp";
import el7 from "@/image/elastic/el7.webp";
import el8 from "@/image/elastic/el8.webp";
import el9 from "@/image/elastic/el9.webp";
import el10 from "@/image/elastic/el10.webp";
import el11 from "@/image/elastic/el11.webp";
import el12 from "@/image/elastic/el12.webp";
import el13 from "@/image/elastic/el13.webp";
import el14 from "@/image/elastic/el14.webp";
import el15 from "@/image/elastic/el15.webp";
import el16 from "@/image/elastic/el16.webp";
import el17 from "@/image/elastic/el17.webp";
import el18 from "@/image/elastic/el18.webp";
import el19 from "@/image/elastic/el19.webp";
import el20 from "@/image/elastic/el20.webp";

const images = [
  el2,
  el3,
  el4,
  el5,
  el6,
  el7,
  el8,
  el9,
  el10,
  el11,
  el12,
  el13,
  el14,
  el15,
  el16,
  el17,
  el18,
  el19,
  el20,
];

export default function Elastic() {
  const [showAll, setShowAll] = useState(false);

  const products = images.map((image, index) => ({
    // id: index + 1,
    // title: `elastic ${index + 1}`,
    title: `Elastic`,
    imagePath: image,
  }));

  const displayedProducts = showAll ? products : products.slice(0, 8);

  return (
    <div className="flex flex-col items-center mx-auto mt-[50px] xl:w-[1280px] max-w-[270px] md:max-w-[768px] lg:max-w-[1024px]">
      <div className="w-[380px] md:w-[1024px]">
        {/* Top */}
        <div>
          <h3 className="mx-auto mb-[50px] lg:w-[600px] font-semibold text-[30px] text-black lg:text-[45px] dark:text-white text-center">
            Elastic{" "}
            <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-400 transition-all duration-800">
              Gallery
            </span>
          </h3>
        </div>
        {/* Bottom */}
        <div className="flex flex-row flex-wrap justify-between items-center gap-[15px] gap-y-[30px] md:gap-y-0 lg:gap-[30px] mx-auto w-[380px] md:w-[1024px]">
          {displayedProducts.map(product => (
            <Link href="/product/elastic" className="block">
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
