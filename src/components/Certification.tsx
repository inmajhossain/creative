"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import hero1 from "@/image/oekotex.png"; // Replace with your actual image paths
import hero2 from "@/image/sedex2.webp"; // Replace with your actual image paths
import hero3 from "@/image/grs.png"; // Replace with your actual image paths
import hero4 from "@/image/gots.jpg"; // Replace with your actual image paths
const images = [hero1, hero2, hero3, hero4]; // Array of images

export default function Certification() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal starts open

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative mx-auto px-[10px] w-[100px] h-[60px] overflow-hidden">
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
            layout="fill"
            className=""

            // Use layout fill to cover the parent div
            // Ensure the image covers the div without distortion
          />
        </div>
      ))}
    </div>
  );
}
