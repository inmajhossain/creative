"use client";
import { Metadata } from "next";
import creative from "@/image/CREATIVE-TAP-INDUSTRY-scaled.webp";

const metadata: Metadata = {
  title: "About Us",
  description: "Garments Accessories Manufacturer & Supplier.",
};

import { useState } from "react";
import Image from "next/image";
import { Link } from "lucide-react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("infrastructure");

  const tabs = [
    { id: "infrastructure", label: "Infrastructure" },
    { id: "production", label: "Production" },
    { id: "sustainability", label: "Sustainability" },
    { id: "services", label: "Services" },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto px-4 w-[380px] md:w-[768px] lg:w-[1280px] max-w-6xl">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-2 font-bold dark:text-amber-100 text-sm uppercase tracking-wider">
            About Us
          </h2>
          <h1 className="mb-6 font-bold text-gray-900 dark:text-cyan-400 text-4xl md:text-5xl">
            <span className="relative">
              Creative Tape Industries Ltd
              <span className="bottom-[-10] left-0 absolute dark:bg-amber-100 mx-auto w-full h-1"></span>
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-300 text-lg md:text-xl">
            Since 2006, we've been a leading garments accessories manufacturer
            in Bangladesh, serving top-tier local and international brands with
            quality, compliance, and sustainability.
          </p>
        </div>

        {/* Company Overview Section */}
        <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2 mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="mb-6 font-bold text-gray-900 dark:text-white text-3xl">
              Excellence in Every Thread
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-200">
              Based in Dhaka, we specialize in high-quality, compliant, and
              sustainable garments accessories, ensuring excellence at every
              stage of production. Our commitment to quality, compliance, and
              customer satisfaction makes us a trusted global partner.
            </p>
            <div className="gap-4 grid grid-cols-2">
              <div className="bg-white dark:bg-gray-800/50 shadow-md p-4 rounded-lg text-center">
                <div className="mb-1 font-bold text-cyan-400 text-xl">100+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  Skilled Employees
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800/50 shadow-md p-4 rounded-lg text-center">
                <div className="mb-1 font-bold text-cyan-400 text-xl">
                  50,000
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  Sq. Ft. Facility
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800/50 shadow-md p-4 rounded-lg text-center">
                <div className="mb-1 font-bold text-cyan-400 text-xl">2006</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  Established
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800/50 shadow-md p-4 rounded-lg text-center">
                <div className="mb-1 font-bold text-cyan-400 text-xl">24/7</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  Production Capacity
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative shadow-[0_0_20px_10px_#61caff] rounded-xl h-64 md:h-96 object-cover overflow-hidden hover:rotate-[360deg] transition-all duration-3000 transform">
              <Image
                src={creative}
                alt="creative"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-emerald-600 opacity-20"></div>
              <div className="bottom-4 left-4 absolute bg-white dark:bg-gray-800 shadow-lg px-4 py-2 rounded-lg">
                <span className="font-bold text-cyan-400">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h2 className="mb-8 font-bold text-gray-900 dark:text-amber-100 text-2xl text-center">
            Comprehensive Compliance
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["Sedex", "OEKO-TEX®", "GRS", "Customs Bond", "Fire Safety"].map(
              (cert, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white dark:bg-gray-800/50 shadow-md px-6 py-4 rounded-lg"
                >
                  <div className="flex justify-center items-center bg-emerald-100 dark:bg-emerald-900 mr-3 rounded-full w-10 h-10">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {cert}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Tabbed Content */}
        <div className="mb-16">
          <div className="flex space-x-1 mb-6 border-gray-200 dark:border-gray-700 border-b overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`py-3 px-6 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "text-cyan-400 border-b-2 border-emerald-600"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg">
            {activeTab === "infrastructure" && (
              <div className="space-y-4">
                <h3 className="mb-4 font-bold text-gray-900 dark:text-white text-xl">
                  Modern Infrastructure
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Two spacious buildings spanning 50,000 sq. ft., equipped with
                  advanced machinery and safety systems.
                </p>
                <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                  <div className="flex items-start">
                    <svg
                      className="mt-1 mr-2 w-5 h-5 text-emerald-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Skilled workforce of 100+ employees
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="mt-1 mr-2 w-5 h-5 text-emerald-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Two shifts for timely production
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="mt-1 mr-2 w-5 h-5 text-emerald-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Central generator & water pump
                    </span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="mt-1 mr-2 w-5 h-5 text-emerald-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      In-house testing lab
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "production" && (
              <div className="space-y-4">
                <h3 className="mb-4 font-bold text-gray-900 dark:text-white text-xl">
                  State-of-the-Art Production Facility
                </h3>
                <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: "Elastic Machines", count: 16 },
                    { name: "Drawstring Machines", count: 22 },
                    { name: "Twill Tape Machines", count: 15 },
                    { name: "Jacquard Machines", count: 6 },
                    { name: "Yarn Rolling Machines", count: 5 },
                    { name: "Calendering Machines", count: 2 },
                    { name: "Metal/Needle Detector Machines", count: 2 },
                    { name: "In-House Dyeing Section", count: 1 },
                    { name: "Quality Testing Lab", count: 1 },
                  ].map((machine, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center"
                    >
                      <div className="mb-1 font-bold text-cyan-400 text-2xl">
                        {machine.count}
                      </div>
                      <div className="text-gray-700 dark:text-gray-300">
                        {machine.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "sustainability" && (
              <div className="space-y-4">
                <h3 className="mb-4 font-bold text-gray-900 dark:text-white text-xl">
                  Sustainable & Employee-Friendly Workplace
                </h3>
                <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                  <div className="flex items-start">
                    <div className="flex flex-shrink-0 justify-center items-center bg-emerald-100 dark:bg-emerald-900 mr-3 rounded-full w-10 h-10">
                      <svg
                        className="w-6 h-6 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        Green Natural Zone
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Promoting an eco-friendly environment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex flex-shrink-0 justify-center items-center bg-emerald-100 dark:bg-emerald-900 mr-3 rounded-full w-10 h-10">
                      <svg
                        className="w-6 h-6 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        Solar Power System
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Reducing carbon footprint
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex flex-shrink-0 justify-center items-center bg-emerald-100 dark:bg-emerald-900 mr-3 rounded-full w-10 h-10">
                      <svg
                        className="w-6 h-6 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        Danger Alert Alarm
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Ensuring workplace safety
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex flex-shrink-0 justify-center items-center bg-emerald-100 dark:bg-emerald-900 mr-3 rounded-full w-10 h-10">
                      <svg
                        className="w-6 h-6 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        Prayer Room
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Supporting employee well-being
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex flex-shrink-0 justify-center items-center bg-emerald-100 dark:bg-emerald-900 mr-3 rounded-full w-10 h-10">
                      <svg
                        className="w-6 h-6 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        Canteen & Common Spaces
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        For a comfortable work environment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "services" && (
              <div className="space-y-4">
                <h3 className="mb-4 font-bold text-gray-900 dark:text-white text-xl">
                  Business Flexibility & Services
                </h3>
                <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                  {[
                    "Sample Collection from Clients",
                    "Letter of Credit (LC) Accepted",
                    "Bonded Warehouse Facility",
                    "Central Generator & Water Pump",
                    "Timely Delivery Guarantee",
                    "We Take Care About Urgent Requirement",
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                    >
                      <svg
                        className="mr-3 w-5 h-5 text-emerald-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-6 font-bold text-gray-900 dark:text-white text-2xl md:text-3xl">
            Let's grow together contact us today for reliable, high-quality
            garments accessories!
          </h2>
          <a href="/contact">
            <button className="group relative lg:flex bg-black hover:shadow-[0_0_7px_4px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] mt-[10px] lg:mt-0 px-6 py-3 border-2 border-cyan-400 rounded-full font-semibold text-white transition-all duration-800">
              <span className="">Contact us</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
