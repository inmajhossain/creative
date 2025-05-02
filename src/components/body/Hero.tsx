"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import hero1 from "@/image/hero/CREATIVE-TAP-INDUSTRY-scaled.webp";
import hero2 from "@/image/hero/factory-exit.webp";
import hero3 from "@/image/hero/factory-office.webp";
import hero4 from "@/image/hero/factoryeid.jpg";
import hero5 from "@/image/hero/factory.webp";
import { Lobster } from "next/font/google";

const images = [hero1, hero4, hero2, hero5, hero3]; // Array of images

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal starts open

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            layout="fill" // Use layout fill to cover the parent div
            className="object-cover" // Ensure the image covers the div without distortion
          />
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          animate={{ opacity: [0, 100] }}
          transition={{ duration: 3, delay: 1 }}
          className="hidden z-96 fixed inset-0 xl:flex justify-center items-center bg-opacity-50 mx-auto mt-[10px] lg:w-[1024px] xl:w-[1280px] hover:scroll-m-4"
        >
          <div className="relative bg-cyan-950/90 shadow-lg p-6 rounded text-md text-center cursor-alias">
            <h2 className="mb-4 font-thin text-white text-lg lg:text-4xl lobster">
              Message From Chairman...
            </h2>
            <h2 className="mb-4 font-bold text-cyan-400 lg:text-4xl">
              Welcome to Creative Tape Industries Ltd.
            </h2>
            <div className="flex flex-col justify-around items-start gap-[10px] mb-[20px] text-left">
              <h4 className="text-green-400">
                Bangladesh is a densely populated developing country. Industrial
                investment is the sector of most Priority of government.
              </h4>
              <h4 className="text-white">
                Development plan for ultimate development of the country. As the
                country is mainly Garments industrial development might be the
                milestone of economic development in our economy. But it is a
                matter of regret that in this age of science and technology, the
                export portion from Garments Sector is not increasing at
                desirable rate. With this point of view, after successful
                completion and commissioning of the various types of leading
                export businesses in the country & we have decided to develop a
                Garments Accessories Manufacturer & Supplier producing plant
                named CREARTIVE TAPE INDUSTRIES LTD. to accelerate the
                contribution local supply based Industry.
              </h4>
              <h4 className="text-green-400">
                The objective of the study is to assess the feasibility of the
                proposed project in terms of market demand as well as technical,
                financial, economic and environmental viability of the project.
              </h4>
              <h4 className="text-white">
                Creative offers you the most comprehensive & competitive range
                of bottom trims in Ready-made Garments Sector. We always strive
                to provide customer's full satisfaction & round the clock basis
                services.
              </h4>
              <h4 className="text-green-400">
                Our Experts dedicated teamwork always empowers our Buyer's
                energy.
              </h4>
              <h4 className="text-white">
                Our long time experience in this industry has helped us to
                acquire knowledge and information for products and services to
                meet the requirements of our customers. We always offer
                flexibility, competitiveness and sharper lead time to reach the
                customer demand. Our network supported by a dynamic team of
                professionals to serve our clients as a strong chain supply
                management.
              </h4>
              <h4 className="text-green-400">
                Our belief "Together everyone achieves more" By working together
                with our valuable Buyers We understand their needs. For this as
                an active participant with them we have realized our vision
                "Customers satisfaction is our main motto."
              </h4>
            </div>

            <div
              className="top-[35px] right-[35px] absolute flex justify-center items-center hover:shadow-[0_0_7px_4px_#61caff] p-[5px] border-2 border-cyan-400 rounded-full w-[35px] h-[35px] rotate-45"
              onClick={closeModal}
            >
              <h3 className="left-[15px] absolute bg-white w-[3px] h-[20px]"></h3>
              <h3 className="bg-white w-[20px] h-[3px]"></h3>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
