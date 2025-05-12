"use client";
import Carousel from "@/components/body/Carousel";
import Dedicated from "@/components/body/Dedicated";
import Directors from "@/components/body/Directors";
import Hero from "@/components/body/Hero";
import Units from "@/components/body/Units";
import { useState, useEffect } from "react";
import Form from "../components/body/form";
import Drawstring from "@/components/Product/Drawstring";
import UnitDetails from "@/components/Product/UnitDetails";
import Elastic from "@/components/Product/Elastic";
import TwillTape from "@/components/Product/TwillTape";
import Buyers from "@/components/body/Buyers";
import Jaquard from "@/components/Product/Jaquard";
import Belt from "@/components/Product/Belt";
import Rib from "@/components/Product/Rib";
import ChairmanNote from "@/components/body/ChairmanNote";
import Production from "@/components/body/Production";
import { motion } from "framer-motion";
import creative from "@/image/hero/creative.webp";
import Image from "next/image";
import Vision from "@/components/body/Vision";

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

  const [isModalOpen, setIsModalOpen] = useState(true); // Modal starts open

  const closeModal = () => {
    setIsModalOpen(false);
  };
  //For Loading Use Start (Step-2)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingPage = async () => {
      setTimeout(() => {
        setLoading(false);
      }); // Simulate a loading delay
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
  //For Loading Use End

  return (
    <div className="">
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black mt-[60px] lg:mt-0">
          <Image
            src={creative}
            alt="creative"
            layout="fill" // Use layout fill to cover the parent div
            className="hidden top-[80px] z-[-5] absolute lg:flex lg:mt-[50px] object-fit" // Ensure the image covers the div without distortion
          />
          <div className="bg-emerald-800/90 shadow-lg mx-auto lg:mt-[50px] p-6 rounded-[10px] w-[380px] md:w-[700px] lg:w-[1000px] text-center">
            <h2 className="mb-4 font-bold text-amber-100 text-sm lg:text-2xl">
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

            <h2 className="mx-auto mb-[25px] w-full lg:w-[880px] text-[14px] text-white md:text-[17px]">
              Creative offers you the most comprehensive & competitive range of
              bottom trims in Ready-made Garments Sector. We always strive to
              provide customer’s full satisfaction & round the clock basis
              services.
            </h2>
            <button
              onClick={closeModal}
              className="group relative lg:flex hover:shadow-[0_0_7px_4px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] mx-auto lg:mt-0 px-8 py-3 border-2 border-cyan-400 font-semibold text-white active:scale-95 transition-all duration-800"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
      {!isModalOpen && (
        <div className="relative">
          <Hero />
          <Carousel />
          <ChairmanNote />
          <Buyers />
          <Vision />
          <Dedicated />
          <Units />
          <UnitDetails />
          <Elastic />
          <Jaquard />
          <Drawstring />
          <TwillTape />
          <Belt />
          <Rib />
          <Form />
          <Directors />
        </div>
      )}
    </div>
  );
}
