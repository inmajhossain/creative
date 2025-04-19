"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import Image from "next/image";
import email from "@/image/email.jpg";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const toastId = toast.loading("Sending Your Message...");

    try {
      const response = await axios.post(
        "https://formspree.io/f/mqazzlvk",
        formData
      );
      if (response.status === 200) {
        toast.success("Message sent successfully!", { id: toastId });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast.error("Error sending message. Please try again.", { id: toastId });
    }
  };

  return (
    <div className="flex flex-col items-center gap-[35px] mx-auto mb-[50px] w-[380px] lg:w-[1280px]">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Top */}
      <div>
        <h3 className="mt-5 font-semibold lg:text-[45px] text-3xl text-center">
          Send Your{" "}
          <span className="hover:shadow-[0_0_7px_4px_#61caff] px-2.5 py-1.5 rounded-full text-cyan-400 transition-all duration-800">
            Message{" "}
          </span>
        </h3>
      </div>

      {/* Bottom */}
      <div className="flex lg:flex-row flex-col justify-around items-center px-[20px] lg:px-[50px] border-2 border-cyan-400 w-[370px] lg:w-[1280px]">
        {/* Left Side */}
        <div className="w-[640px]">
          {/* <Image
            src={email}
            alt={"email"}
            width={300}
            height={300}
            className="hidden lg:flex hover:shadow-[0_0_40px_25px_#61caff] mx-auto border-2 rounded-full rotate-360 transition-all animate-pulse duration-5000 transform"
          /> */}
          <Image
            src={email}
            alt={"email"}
            width={300}
            height={300}
            className="hidden lg:flex shadow-[0_0_30px_20px_#61caff] mx-auto border-2 rounded-full hover:rotate-360 transition-all animate-pulse duration-5000 transform"
          />
        </div>

        {/* Right Side */}
        <div className="p-[10px] lg:p-[30px] w-[370px] lg:w-[640px]">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[10px] mb-[10px]">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="px-4 py-1 border-1 dark:border-amber-100"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-[10px] mb-[10px]">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="yourmail@email.com"
                className="px-4 py-1 border-1 dark:border-amber-100"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-[10px] mb-[10px]">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                className="p-[20px] border-1 dark:border-amber-100 h-[100px]"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="group flex justify-around items-center bg-black hover:shadow-[0_0_20px_10px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] mx-auto mt-[40px] mb-[10px] lg:mb-0 lg:ml-0 px-2 py-2 border-2 border-cyan-400 rounded-full w-40 font-semibold text-white active:scale-95 transition-all duration-2000"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
