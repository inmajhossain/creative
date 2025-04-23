"use client";
import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import logo from "@/image/logo.png";
import { Button } from "../ui/button";
import Navbar from "./Navbar";
import { HeaderTop } from "./HeaderTop";
import Certification from "./Certification";

export default function Header() {
  return (
    <div className="top-0 z-99 sticky bg-cyan-950 mx-auto w-full">
      <HeaderTop />
      <div className="mx-auto w-full lg:max-w-[1280px]">
        <div className="flex lg:flex-row flex-col justify-between items-center drop-shadow-2xl mx-auto px-[10px] py-[10px] lg:py-0 lg:h-[67px]">
          {/* Logo */}
          <div className="flex flex-col justify-between items-center lg:gap-[5px]">
            <div className="flex gap-[20px]">
              <Link href={"/"}>
                <Image
                  className="lg:flex animate-pulse"
                  src={logo}
                  alt={"logo"}
                  width={90}
                  height={70}
                />
              </Link>
              {/* Certification */}
              <div className="hidden lg:flex">
                <Certification />
              </div>
            </div>

            <h2 className="lg:hidden mx-auto w-[370px] font-bold text-[25px] text-white dark:text-cyan-400 text-center">
              Creative Tape Industries Ltd.
            </h2>
          </div>
          {/* Navigation */}
          <div className="hidden lg:flex">
            <Navbar />
          </div>

          {/* Button */}
          <div className="flex flex-row justify-between lg:justify-around items-center gap-[20px] px-[10px] w-[390px] lg:w-[240px]">
            <div className="lg:hidden mt-[10px]">
              <ModeToggle />
            </div>
            <Link href="/contact">
              <button className="group relative lg:flex bg-black hover:shadow-[0_0_7px_4px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] mt-[10px] lg:mt-0 px-4 py-3 border-2 border-cyan-400 rounded-full font-semibold text-white transition-all duration-800">
                <span className="">Contact us</span>
              </button>
            </Link>
            <div className="hidden lg:flex">
              <ModeToggle />
            </div>
            <div className="lg:hidden mt-[10px]">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
