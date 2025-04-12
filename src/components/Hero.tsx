"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import hero1 from "@/image/CREATIVE-TAP-INDUSTRY-scaled.webp"; // Replace with your actual image paths
import hero2 from "@/image/factory-exit.webp"; // Replace with your actual image paths
import hero3 from "@/image/factory-office.webp"; // Replace with your actual image paths

const images = [hero1, hero2, hero3]; // Array of images

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal starts open

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative mx-auto w-full h-[300px] lg:h-[90vh] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImageIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            layout="fill" // Use layout fill to cover the parent div
            // Ensure the image covers the div without distortion
          />
        </div>
      ))}

      {/* Modal */}
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
    </div>
  );
}
