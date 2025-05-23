"use client";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Glide from "@glidejs/glide";
import Link from "next/link";
import Image from "next/image";

// Import images
import elastic from "@/image/Elastic-Band-DTM.webp";
import drawstring from "@/image/Cotton-Faancy-Belt.webp";
import jacaured from "@/image/Jacquaed-Elastic-03.webp";
import tape from "@/image/Cotton-Twill-Tape-1.webp";
import belt from "@/image/Cotton-Belt.webp";
import tipping from "@/image/Drawsting-with-Tipping1.webp";
import ribtape from "@/image/Color_Stripe_Elastic_Tape-1-1.webp";
import Production from "./Production";

// Production units data
const productionUnits = [
  {
    title: "Elastic & Hole Elastic Units",
    amount: "75,000",
    unit: "Yards",
    text: "Fifty Thousand Yards",
    image: elastic,
    alt: "elastic",
  },
  {
    title: "Jacquard Elastic Units",
    amount: "20,000",
    unit: "Yards",
    text: "Twenty Thousand Yards",
    image: jacaured,
    alt: "jacquard",
  },
  {
    title: "Drawstring Units",
    amount: "60,000",
    unit: "Yards",
    text: "Sixty Thousand Yards",
    image: drawstring,
    alt: "drawstring",
  },
  {
    title: "Tape & Belt Units (Twill Tape, Grosgrain Tape)",
    amount: "25,000",
    unit: "Yards",
    text: "Twenty Five Thousand Yards",
    image: tape,
    alt: "tape",
  },
  {
    title: "Tipping Units (Plastic, Metal & Thread)",
    amount: "50,000",
    unit: "Pcs",
    text: "Fifty Thousand Pcs",
    image: tipping,
    alt: "tipping",
  },

  {
    title: "Sporting Tape or Rib Tape Units",
    amount: "20,000",
    unit: "Yards",
    text: "Twenty Thousand Yards",
    image: ribtape,
    alt: "ribtape",
  },

  {
    title: "Belt Units",
    amount: "10,000",
    unit: "Pcs",
    text: "Ten Thousand Pcs",
    image: belt,
    alt: "belt",
  },
];

// Color variants for indicators
const indicatorColors = ["600", "500", "400", "300", "200", "100", "50"];

export default function Units() {
  useEffect(() => {
    const slider = new Glide(".glide-02", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 2000,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => slider.destroy();
  }, []);

  // Common class strings

  const titleClasses =
    "dark:border-cyan-400 border-b-2 py-[5px] lg:py-0 lg:border-none text-[14px] font-bold lg:text-xl dark:text-amber-100 lg:text-left text-center";
  const amountClasses =
    "-mt-5 lg:mt-0 text-[16px] dark:text-amber-100 lg:text-left text-center";
  const textClasses =
    "-mt-5 lg:mt-0 mb-4 lg:mb-0 text-[16px] lg:text-left text-center";

  return (
    <div className="flex flex-col justify-around items-center mx-auto mt-16 mb-[50px] md:mb-[150px] max-w-[380px] lg:max-w-[1024px]">
      {/* Title Section */}
      <div>
        <h3 className="mt-5 lg:w-[800px] font-semibold text-[22px] lg:text-[45px] text-center">
          Our Production{" "}
          <span className="hover:shadow-[0_0_7px_4px_#61caff] px-2.5 py-1.5 rounded-full text-cyan-400 transition-all duration-800">
            Items & Capacity{" "}
          </span>
        </h3>
        <div className="mt-9">
          <Link
            href="https://www.facebook.com/creativetapeinds"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex justify-around items-center bg-black hover:shadow-[0_0_7px_4px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] mx-auto px-2 py-2 border-2 border-cyan-400 rounded-full w-40 font-semibold text-white active:scale-95 transition-all duration-800"
          >
            Our Profile <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* Slider */}
      <div className="relative mt-8 max-w-[380px] lg:max-w-[1024px] glide-02">
        {/* Slides Track */}
        <div className="overflow-hidden" data-glide-el="track">
          <div className="relative flex flex-nowrap justify-center items-center py-3 w-full overflow-hidden whitespace-no-wrap">
            {productionUnits.map((unit, index) => (
              <div
                key={index}
                className="flex lg:flex-row flex-col justify-between items-center dark:bg-transparent p-[20px] lg:p-[24px] border-3 border-cyan-400 w-[380px] lg:w-[1024px] h-[400px] lg:h-[250px]"
              >
                {/* Left Part - Image */}
                <div className="flex justify-center items-center lg:w-[500px]">
                  <Link href="/">
                    <Image
                      src={unit.image}
                      alt={unit.alt}
                      width={300}
                      height={300}
                      className="shadow-[10px] hover:shadow-[0_0_20px_10px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] mt-5 lg:mt-0 border-1 dark:border-amber-100 w-[180px] lg:w-[200px] h-[180px] lg:h-[200px] hover:rotate-[360deg] transition-all duration-2000 transform"
                    />
                  </Link>
                </div>

                {/* Right Part - Info */}
                <div className="flex flex-col justify-center lg:items-start gap-4 lg:px-12 py-5 border-green-600 lg:border-l-3 lg:w-[500px] lg:h-[230px]">
                  <h3 className={titleClasses}>{unit.title}</h3>
                  <h4 className="text-xl lg:text-left text-center">Everyday</h4>
                  <h4 className={amountClasses}>
                    {unit.amount} {unit.unit}
                  </h4>
                  <h4 className={textClasses}>( {unit.text} )</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div
          className="bottom-[-25] left-[25px] lg:left-[340px] absolute flex justify-center items-center gap-2 mx-auto max-w-[380px] lg:max-w-[1024px]"
          data-glide-el="controls[nav]"
        >
          {productionUnits.map((_, index) => (
            <button
              key={index}
              className={`group p-4 ${
                index < 2 ? `text-accent-${700 - index * 100}` : ""
              }`}
              data-glide-dir={`=${index}`}
              aria-label={`goto slide ${index + 1}`}
            >
              <span
                className={`block bg-amber-${indicatorColors[index]} rounded-full focus:outline-none ring-1 dark:ring-amber-300 w-2 h-2 transition-colors duration-300`}
              ></span>
            </button>
          ))}
        </div>
      </div>
      <Production />
    </div>
  );
}
