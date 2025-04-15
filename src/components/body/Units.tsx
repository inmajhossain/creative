"use client";
import { FaArrowRight } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Link from "next/link";
import Image from "next/image";
import elastic1 from "@/image/Elastic-Band-DTM.webp";
import profile1 from "@/image/profile1.png";
import profile2 from "@/image/profile2.png";
import notion from "@/image/notion.png";

export default function Units() {
  useEffect(() => {
    const slider = new Glide(".glide-02", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 5000,
      animationDuration: 2000,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col justify-around items-center mx-auto mt-[65px] mb-[50px] w-full lg:w-[1280px]">
      {/* Testimonial Title Start */}
      <div>
        <h3 className="mt-[20px] lg:w-[600px] text-[30px] lg:text-[45px] text-center">
          Production{" "}
          <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-400 transition-all duration-800">
            Capacity{" "}
          </span>
        </h3>
        <div className="mt-[35px]">
          <Link
            href="https://drive.google.com/file/d/1CDyuiiIyQAxuKYCWKnQ6tPuxo2aJdWrc/view?usp=sharing"
            download="CompanyProfile.pdf"
            target="_blank" // This will open the link in a new tab
            rel="noopener noreferrer" // This is a security measure
            className="group relative flex lg:flex justify-around items-center bg-black hover:shadow-[0_0_7px_4px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] mx-auto mt-[10px] lg:mt-0 px-2 py-2 border-2 border-cyan-400 rounded-full w-[160px] font-semibold text-white active:scale-95 transition-all duration-800"
          >
            Our Profile <FaArrowRight />
          </Link>
        </div>
      </div>
      {/* Testimonial Title End */}
      {/* Slider Part Start */}
      <div className="relative mt-[30px] lg:mt-[30px] w-[380px] lg:w-[1280px] glide-02">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <div className="relative flex flex-no-wrap py-[20px] w-full overflow-hidden whitespace-no-wrap [backface-visibility: [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform]">
            {/* First Slide Start Elastic */}
            <div className="flex lg:flex-row flex-col justify-between items-center p-[15px] lg:p-[20px] border-2 dark:border-cyan-400 w-[380px] lg:w-[1280px] h-[400px] lg:h-[332px]">
              {/* Left Part */}
              <div>
                <Link href={"/"}>
                  <Image
                    src={elastic1}
                    alt={"elastic1"}
                    width={300}
                    height={300}
                    className="shadow-[10px] hover:shadow-[0_0_20px_10px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] mt-[20px] lg:mt-0 lg:ml-[185px] border-1 dark:border-amber-100 w-[180px] lg:w-[250px] h-[180px] lg:h-[250px] hover:rotate-[360deg] transition-all duration-2000 transform"
                  />
                </Link>
              </div>
              {/* Right Part */}
              <div className="flex flex-col justify-center lg:items-start gap-[15px] lg:px-[50px] py-[20px] dark:border-amber-100 lg:border-l-2 lg:w-[600px] lg:h-[280px]">
                <h3 className="dark:border-cyan-400 border-b-2 lg:border-none text-[25px] lg:text-[30px] dark:text-amber-100 lg:text-left text-center">
                  Elastic & Hole Elastic Units
                </h3>
                <h4 className="text-[20px] lg:text-left text-center">
                  Everyday{" "}
                </h4>
                <h4 className="mt-[-20px] lg:mt-0 text-[30px] dark:text-amber-100 lg:text-left text-center">
                  50,0000 Yards
                </h4>
                <h4 className="mt-[-20px] lg:mt-0 mb-[15px] lg:mb-0 text-[20px] lg:text-left text-center">
                  ( Fifty Thousand Yards )
                </h4>
              </div>
            </div>
            {/* First Slide End */}
            {/* Second Slide Start Twill Tape */}
            <div className="flex lg:flex-row flex-col justify-between items-center p-[15px] lg:p-[20px] border-1 dark:border-cyan-400 w-[380px] lg:w-[1280px] h-[400px] lg:h-[332px]">
              {/* Left Part */}
              <div>
                <Link href={"/"}>
                  <Image
                    src={elastic1}
                    alt={"elastic1"}
                    width={300}
                    height={300}
                    className="shadow-[10px] hover:shadow-[0_0_20px_10px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] mt-[20px] lg:mt-0 lg:ml-[185px] border-1 dark:border-amber-100 w-[180px] lg:w-[250px] h-[180px] lg:h-[250px] hover:rotate-[360deg] transition-all duration-2000 transform"
                  />
                </Link>
              </div>
              {/* Right Part */}
              <div className="flex flex-col justify-center lg:items-start gap-[15px] lg:px-[50px] py-[20px] dark:border-amber-100 lg:border-l-2 lg:w-[600px] lg:h-[280px]">
                <h3 className="dark:border-cyan-400 border-b-2 lg:border-none text-[25px] lg:text-[30px] dark:text-amber-100 lg:text-left text-center">
                  Twill tape Units
                </h3>
                <h4 className="text-[20px] lg:text-left text-center">
                  Everyday
                </h4>
                <h4 className="mt-[-20px] lg:mt-0 text-[30px] dark:text-amber-100 lg:text-left text-center">
                  24,000 Yards
                </h4>
                <h4 className="mt-[-20px] lg:mt-0 mb-[15px] lg:mb-0 text-[20px] lg:text-left text-center">
                  ( Twenty Four Thousand Yards )
                </h4>
              </div>
            </div>
            {/* Second Slide End */}
            {/* Third Slide Start */}
            <div className="flex lg:flex-row flex-col justify-between items-center p-[15px] lg:p-[20px] border-1 dark:border-cyan-400 w-[380px] lg:w-[1280px] h-[400px] lg:h-[332px]">
              {/* Left Part */}
              <div>
                <Link href={"/"}>
                  <Image
                    src={elastic1}
                    alt={"elastic1"}
                    width={300}
                    height={300}
                    className="shadow-[10px] hover:shadow-[0_0_20px_10px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] mt-[20px] lg:mt-0 lg:ml-[185px] border-1 dark:border-amber-100 w-[180px] lg:w-[250px] h-[180px] lg:h-[250px] hover:rotate-[360deg] transition-all duration-2000 transform"
                  />
                </Link>
              </div>
              {/* Right Part */}
              <div className="flex flex-col justify-center lg:items-start gap-[15px] lg:px-[50px] py-[20px] dark:border-amber-100 lg:border-l-2 lg:w-[600px] lg:h-[280px]">
                <h3 className="dark:border-cyan-400 border-b-2 lg:border-none text-[25px] lg:text-[30px] dark:text-amber-100 lg:text-left text-center">
                  Drawstring Units
                </h3>
                <h4 className="text-[20px] lg:text-left text-center">
                  Everyday
                </h4>
                <h4 className="mt-[-20px] lg:mt-0 text-[30px] dark:text-amber-100 lg:text-left text-center">
                  60,0000 Yards
                </h4>
                <h4 className="mt-[-20px] lg:mt-0 mb-[15px] lg:mb-0 text-[20px] lg:text-left text-center">
                  ( Sixty Thousand Yards )
                </h4>
              </div>
            </div>

            {/* Third Slide End */}
            {/* Four Slide Start Rib Tape */}
            <div className="flex lg:flex-row flex-col justify-between items-center p-[15px] lg:p-[20px] border-1 dark:border-cyan-400 w-[380px] lg:w-[1280px] h-[400px] lg:h-[332px]">
              {/* Left Part */}
              <div>
                <Link href={"/"}>
                  <Image
                    src={elastic1}
                    alt={"elastic1"}
                    width={300}
                    height={300}
                    className="shadow-[10px] hover:shadow-[0_0_20px_10px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] mt-[20px] lg:mt-0 lg:ml-[185px] border-1 dark:border-amber-100 w-[180px] lg:w-[250px] h-[180px] lg:h-[250px] hover:rotate-[360deg] transition-all duration-2000 transform"
                  />
                </Link>
              </div>
              {/* Right Part */}
              <div className="flex flex-col justify-center lg:items-start gap-[15px] lg:px-[50px] py-[20px] dark:border-amber-100 lg:border-l-2 lg:w-[600px] lg:h-[280px]">
                <h3 className="dark:border-cyan-400 border-b-2 lg:border-none text-[25px] lg:text-[30px] dark:text-amber-100 lg:text-left text-center">
                  Rib Tape Units
                </h3>
                <h4 className="text-[20px] lg:text-left text-center">
                  Everyday
                </h4>
                <h4 className="mt-[-20px] lg:mt-0 text-[30px] dark:text-amber-100 lg:text-left text-center">
                  17,0000 Yards
                </h4>
                <h4 className="mt-[-20px] lg:mt-0 mb-[15px] lg:mb-0 text-[20px] lg:text-left text-center">
                  ( Seventeen Thousand Yards )
                </h4>
              </div>
            </div>

            {/* Four Slide End */}
            {/* Five Slide Start Jaquard Tape */}
            <div className="flex lg:flex-row flex-col justify-between items-center p-[15px] lg:p-[20px] border-1 dark:border-cyan-400 w-[380px] lg:w-[1280px] h-[400px] lg:h-[332px]">
              {/* Left Part */}
              <div>
                <Link href={"/"}>
                  <Image
                    src={elastic1}
                    alt={"elastic1"}
                    width={300}
                    height={300}
                    className="shadow-[10px] hover:shadow-[0_0_20px_10px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] mt-[20px] lg:mt-0 lg:ml-[185px] border-1 dark:border-amber-100 w-[180px] lg:w-[250px] h-[180px] lg:h-[250px] hover:rotate-[360deg] transition-all duration-2000 transform"
                  />
                </Link>
              </div>
              {/* Right Part */}
              <div className="flex flex-col justify-center lg:items-start gap-[15px] lg:px-[50px] py-[20px] dark:border-amber-100 lg:border-l-2 lg:w-[600px] lg:h-[280px]">
                <h3 className="dark:border-cyan-400 border-b-2 lg:border-none text-[25px] lg:text-[30px] dark:text-amber-100 lg:text-left text-center">
                  Jacquard Elastic Units
                </h3>
                <h4 className="text-[20px] lg:text-left text-center">
                  Everyday
                </h4>
                <h4 className="mt-[-20px] lg:mt-0 text-[30px] dark:text-amber-100 lg:text-left text-center">
                  20,0000 Yards
                </h4>
                <h4 className="mt-[-20px] lg:mt-0 mb-[15px] lg:mb-0 text-[20px] lg:text-left text-center">
                  ( Twenty Thousand Yards )
                </h4>
              </div>
            </div>

            {/* Five Slide End */}
            {/* Six Slide Start Tipping */}
            <div className="flex lg:flex-row flex-col justify-between items-center p-[15px] lg:p-[20px] border-1 dark:border-cyan-400 w-[380px] lg:w-[1280px] h-[400px] lg:h-[332px]">
              {/* Left Part */}
              <div>
                <Link href={"/"}>
                  <Image
                    src={elastic1}
                    alt={"elastic1"}
                    width={300}
                    height={300}
                    className="shadow-[10px] hover:shadow-[0_0_20px_10px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] mt-[20px] lg:mt-0 lg:ml-[185px] border-1 dark:border-amber-100 w-[180px] lg:w-[250px] h-[180px] lg:h-[250px] hover:rotate-[360deg] transition-all duration-2000 transform"
                  />
                </Link>
              </div>
              {/* Right Part */}
              <div className="flex flex-col justify-center lg:items-start gap-[15px] lg:px-[50px] py-[20px] dark:border-amber-100 lg:border-l-2 lg:w-[600px] lg:h-[280px]">
                <h3 className="dark:border-cyan-400 border-b-2 lg:border-none text-[25px] lg:text-[30px] dark:text-amber-100 lg:text-left text-center">
                  Tipping Units
                </h3>
                <h4 className="text-[20px] lg:text-left text-center">
                  Everyday
                </h4>
                <h4 className="mt-[-20px] lg:mt-0 text-[30px] dark:text-amber-100 lg:text-left text-center">
                  40,0000 Pcs
                </h4>
                <h4 className="mt-[-20px] lg:mt-0 mb-[15px] lg:mb-0 text-[20px] lg:text-left text-center">
                  ( Forty Thousand Pcs )
                </h4>
              </div>
            </div>

            {/* Six Slide End */}
            {/* Seven Slide Start Belt */}
            <div className="flex lg:flex-row flex-col justify-between items-center p-[15px] lg:p-[20px] border-1 dark:border-cyan-400 w-[380px] lg:w-[1280px] h-[400px] lg:h-[332px]">
              {/* Left Part */}
              <div>
                <Link href={"/"}>
                  <Image
                    src={elastic1}
                    alt={"elastic1"}
                    width={300}
                    height={300}
                    className="shadow-[10px] hover:shadow-[0_0_20px_10px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] mt-[20px] lg:mt-0 lg:ml-[185px] border-1 dark:border-amber-100 w-[180px] lg:w-[250px] h-[180px] lg:h-[250px] hover:rotate-[360deg] transition-all duration-2000 transform"
                  />
                </Link>
              </div>
              {/* Right Part */}
              <div className="flex flex-col justify-center lg:items-start gap-[15px] lg:px-[50px] py-[20px] dark:border-amber-100 lg:border-l-2 lg:w-[600px] lg:h-[280px]">
                <h3 className="dark:border-cyan-400 border-b-2 lg:border-none text-[25px] lg:text-[30px] dark:text-amber-100 lg:text-left text-center">
                  Belt Units
                </h3>
                <h4 className="text-[20px] lg:text-left text-center">
                  Everyday
                </h4>
                <h4 className="mt-[-20px] lg:mt-0 text-[30px] dark:text-amber-100 lg:text-left text-center">
                  10,0000 Pcs
                </h4>
                <h4 className="mt-[-20px] lg:mt-0 mb-[15px] lg:mb-0 text-[20px] lg:text-left text-center">
                  ( Ten Thousand Pcs )
                </h4>
              </div>
            </div>

            {/* Seven Slide End */}
          </div>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="bottom-[-25] absolute flex justify-center items-center gap-2 w-full lg:w-[1280px]"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4 text-accent-700"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block bg-amber-600 rounded-full focus:outline-none ring-1 ring-slate-700 w-2 h-2 transition-colors duration-300"></span>
          </button>
          <button
            className="group p-4 text-accent-600"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block bg-amber-500 rounded-full focus:outline-none ring-1 ring-slate-700 w-2 h-2 transition-colors duration-300"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block bg-amber-400 rounded-full focus:outline-none ring-1 ring-slate-700 w-2 h-2 transition-colors duration-300"></span>
          </button>
          <button
            className="group p-4 text-accent-700"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block bg-amber-300 rounded-full focus:outline-none ring-1 ring-slate-700 w-2 h-2 transition-colors duration-300"></span>
          </button>
          <button
            className="group p-4 text-accent-600"
            data-glide-dir="=4"
            aria-label="goto slide 5"
          >
            <span className="block bg-amber-200 rounded-full focus:outline-none ring-1 ring-slate-700 w-2 h-2 transition-colors duration-300"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=5"
            aria-label="goto slide 6"
          >
            <span className="block bg-amber-100 rounded-full focus:outline-none ring-1 ring-slate-700 w-2 h-2 transition-colors duration-300"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=6"
            aria-label="goto slide 7"
          >
            <span className="block bg-amber-50 rounded-full focus:outline-none ring-1 ring-slate-700 w-2 h-2 transition-colors duration-300"></span>
          </button>
        </div>
      </div>
      {/* Slider Part End */}
    </div>
  );
}
