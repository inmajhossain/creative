"use client";
import Dedicated from "@/components/body/Dedicated";
import Directors from "@/components/body/Directors";
import Hero from "@/components/body/Hero";
import Units from "@/components/body/Units";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal starts open

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-cyan-950 shadow-lg p-6 rounded text-center">
            <h2 className="mb-4 font-bold text-amber-100 text-lg lg:text-2xl">
              Garments Accessories Manufacturer & Supplier.
            </h2>
            <h2 className="mb-4 font-bold text-[22px] text-white lg:text-5xl">
              Welcome to Creative Tape Industries Ltd.
            </h2>

            <h2 className="mx-auto mb-[25px] w-full lg:w-[880px] text-amber-100">
              Creative offers you the most comprehensive & competitive range of
              bottom trims in Ready-made Garments Sector. We always strive to
              provide customer’s full satisfaction & round the clock basis
              services.
            </h2>
            <button
              onClick={closeModal}
              className="group relative lg:flex bg-black hover:shadow-[0_0_7px_4px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] mx-auto lg:mt-0 px-8 py-3 border-2 border-cyan-400 font-semibold text-white active:scale-95 transition-all duration-800"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
      {!isModalOpen && (
        <div>
          <Hero />
          <Directors />
          <Units />
          <Dedicated />
        </div>
      )}
    </div>
  );
}
