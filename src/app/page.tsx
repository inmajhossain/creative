"use client";
import { motion } from "framer-motion";
import creative from "@/image/hero/creative.webp";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const words = "Welcome to Creative Tape Industries Ltd.".split(" ");
  const colors = [
    "text-green-400",
    "text-white",
    "text-cyan-400",
    "text-cyan-400",
    "text-cyan-400",
    "text-cyan-400",
  ];
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadingPage = async () => {
      setTimeout(() => {
        setLoading(false);
      });
    };
    loadingPage();
  }, []);
  if (loading)
    return (
      <div className="flex flex-col items-center gap-[30px] mx-auto mt-[150px] lg:mt-[350px] w-[380px] md:w-[500px] h-[800px]">
        <div className="flex gap-[30px]">
          <div className="border-4 border-sky-900 border-b-transparent rounded-full w-10 h-10 animate-spin"></div>
          <div className="border-4 border-red-600 border-b-transparent rounded-full w-10 h-10 animate-spin"></div>
          <div className="border-4 border-orange-600 border-b-transparent rounded-full w-10 h-10 animate-spin"></div>
          <div className="border-4 border-emerald-600 border-b-transparent rounded-full w-10 h-10 animate-spin"></div>
          <div className="border-4 border-indigo-600 border-b-transparent rounded-full w-10 h-10 animate-spin"></div>
        </div>
        <div>
          <h2 className="font-semibold text-[30px] text-indigo-500 text-center">
            Loading.......
          </h2>
        </div>
      </div>
    );
  return (
    <div className="">
      <div className="fixed inset-0 flex justify-center items-center bg-black mt-[60px] lg:mt-0">
        <Image
          src={creative}
          alt="creative"
          layout="fill"
          className="hidden top-[80px] z-[-5] absolute lg:flex lg:mt-[50px] object-fit"
        />
        <div className="bg-emerald-800/90 shadow-lg mx-auto lg:mt-[50px] p-6 rounded-[10px] w-[380px] md:w-[700px] lg:w-[1000px] text-center">
          <h2 className="mb-4 font-bold text-[13px] text-amber-100 lg:text-2xl">
            Garments Accessories Manufacturer & Supplier.
          </h2>
          <motion.h2 className="flex space-x-2 mx-auto mb-4 font-bold text-[15px] text-white lg:text-5xl text-center">
            {words.map((word, index) => (
              <motion.span
                key={index}
                animate={{ opacity: [0, 100] }}
                transition={{
                  duration: 3,
                  delay: index * 0.5,
                  ease: "easeIn",
                }}
                className={`inline-block font-bold  animate-pulse text-center ${
                  colors[index % colors.length]
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <h2 className="mx-auto mb-[45px] w-full lg:w-[880px] text-[12px] text-white md:text-[17px]">
            Creative offers you the most comprehensive & competitive range of
            bottom trims in Ready-made Garments Sector. We always strive to
            provide customer’s full satisfaction & round the clock basis
            services.
          </h2>
          <Link
            href="/home"
            className="hover:shadow-[0_0_7px_4px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] mx-auto px-[30px] py-[10px] border-2 border-cyan-400 w-[200px] font-semibold text-white active:scale-95 transition-all duration-800"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
