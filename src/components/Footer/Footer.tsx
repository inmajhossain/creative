import Link from "next/link";
import Image from "next/image";
import logo from "@/image/logo.png";
import {
  FaHandPointRight,
  FaOptinMonster,
  FaPhoneAlt,
  FaPhoneSquareAlt,
  FaRegHandPointRight,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
  return (
    <div className="mx-auto w-full">
      {/* Upper Part Start */}
      <div className="flex lg:flex-row flex-col justify-around items-center lg:items-start gap-[30px] lg:gap-0 bg-cyan-950 py-[30px]">
        {/* One Start */}
        <div className="flex flex-col items-center gap-[20px] lg:mt-[30px]">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              className="lg:flex"
              src={logo}
              alt={"logo"}
              width={90}
              height={70}
            />
          </Link>

          <h2 className="mx-auto w-[390px] font-bold text-[27px] text-white dark:text-cyan-400 text-center">
            Creative Tape Industries Ltd.
          </h2>
        </div>
        {/* One End */}
        {/* Two Start */}
        <div className="flex flex-col justify-around items-center lg:items-start text-white">
          <h3 className="flex justify-center lg:justify-start items-center gap-[10px] mb-[10px] border-amber-100 lg:border-0 border-b-2 w-[350px] lg:w-full text-[20px] text-amber-100 text-center">
            <span className="hidden lg:flex lg:flex-row">|</span> Information
          </h3>
          <Link href="/" className="flex items-center gap-[10px]">
            <FaHandPointRight className="hidden lg:flex" />
            Home
          </Link>
          <Link href="/about" className="flex items-center gap-[10px]">
            <FaHandPointRight className="hidden lg:flex" /> About us
          </Link>
          <Link href="/machineries" className="flex items-center gap-[10px]">
            <FaHandPointRight className="hidden lg:flex" />
            Our Machineries
          </Link>
          <Link href="/products" className="flex items-center gap-[10px]">
            <FaHandPointRight className="hidden lg:flex" />
            Products
          </Link>
          <Link href="/production" className="flex items-center gap-[10px]">
            <FaHandPointRight className="hidden lg:flex" />
            Production Capacity
          </Link>
        </div>
        {/* Two End */}
        {/* Three Start */}
        <div className="hidden lg:flex flex-col items-start text-white">
          <h3 className="flex items-center gap-[10px] mb-[10px] text-[20px] text-amber-100">
            | Products
          </h3>
          <Link href="/elastic" className="flex items-center gap-[10px]">
            <FaHandPointRight />
            Elastic Unit
          </Link>
          <Link href="/twilltape" className="flex items-center gap-[10px]">
            <FaHandPointRight /> Twill Tape & Belt Unit
          </Link>
          <Link href="/drawstring" className="flex items-center gap-[10px]">
            <FaHandPointRight />
            Drawstring Unit With Tipping
          </Link>

          <Link href="/production" className="flex items-center gap-[10px]">
            <FaHandPointRight />
            Production Capacity
          </Link>
        </div>
        {/* Three End */}

        {/* Four Start */}
        <div className="hidden lg:flex flex-col gap-[10px] text-white">
          <h3 className="flex items-center gap-[10px] text-[20px] text-amber-100">
            | Contact
          </h3>
          <Link
            href="mailto:rouf@creativetapeinds.com"
            className="flex items-center gap-[10px]"
          >
            <TfiEmail />
            rouf@creativetapeinds.com
          </Link>

          {/* Phone Numbers */}
          <div className="flex flex-col">
            <Link
              href="tel:+8801708517968"
              className="flex items-center gap-[5px]"
            >
              <FaPhoneSquareAlt href="#" className="icon" />
              <h3>+880 1708517968</h3>
            </Link>
            <Link
              href="tel:+8801795442366"
              className="flex items-center gap-[5px]"
            >
              <FaPhoneSquareAlt href="#" className="icon" />
              <h3>+880 1795442366</h3>
            </Link>

            <Link
              href="tel:+8801819214694"
              className="flex items-center gap-[5px]"
            >
              <FaPhoneSquareAlt href="#" className="icon" />
              <h3>+880 1819214694</h3>
            </Link>
          </div>
        </div>
        {/* Four End */}

        {/* Five Start */}
        <div className="flex flex-col gap-[10px] mt-[-25px] lg:mt-0 w-[350px] text-white lg:text-left text-center">
          <h3 className="lg:flex lg:flex-row lg:gap-[6px] border-amber-100 lg:border-0 border-b-2 text-[20px] text-amber-100">
            <span className="hidden lg:flex lg:flex-row">|</span> Corporate
            Office
          </h3>

          <h3>
            Plot-54, Road-04, Block-K, Section-02 Rupnagar I/A. Shial Bari
            Mirpur, Dhaka-1216.
          </h3>
          <h3 className="lg:flex lg:flex-row lg:gap-[6px] border-amber-100 lg:border-0 border-b-2 text-[20px] text-amber-100">
            <span className="hidden lg:flex lg:flex-row">|</span> Factory
          </h3>
          <h3>
            Factory: 136, Abdul Zabbar Sarker Road Durgapur, Kathgara, Bara
            Rangamatia Ashulia, Savar, Dhaka.
          </h3>
        </div>
        {/* Five End */}
      </div>
      {/* Upper Part End */}

      {/* Lower Part Start */}
      <div className="flex lg:flex-row flex-col justify-center items-center bg-black py-[10px] text-white">
        <h3 className="lg:flex">© 2017 - 2025 Creative Tape Industries Ltd</h3>
        <h4 className="hidden lg:flex mr-[10px] ml-[10px] text-amber-100">|</h4>
        <h3>All rights reserved. Site by Inmaj Hossain</h3>
        <h4 className="hidden lg:flex mr-[10px] ml-[10px] text-amber-100">|</h4>
        <Link
          href="tel:+8801515212670"
          className="flex items-center gap-[10px] text-amber-100"
        >
          <FaPhoneSquareAlt /> +8801515212670
        </Link>
      </div>
      {/* Lower Part End */}
    </div>
  );
}
