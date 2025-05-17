"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import hero1 from "@/image/hero/creative.webp";
import hero2 from "@/image/hero/factory-exit.webp";
import hero3 from "@/image/hero/factory-office.webp";
import hero4 from "@/image/hero/factoryeid.webp";
import hero5 from "@/image/hero/factory.webp";

const images = [hero1, hero4, hero2, hero5, hero3];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={{
        y: [1000, 0],
      }}
      transition={{
        duration: 1.5,
        delay: 0,
      }}
      className="relative mx-auto mt-[50px] lg:mt-0 w-full h-[300px] lg:h-[90vh] overflow-hidden"
    >
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
            className="object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
}
