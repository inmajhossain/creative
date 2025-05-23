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
    image: null,
  });

  const [previewUrl, setPreviewUrl] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      // Check if file is in accepted format
      const fileType = file.type;
      if (!["image/jpeg", "image/jpg", "image/png"].includes(fileType)) {
        alert("Please upload only JPEG, JPG or PNG images");
        e.target.value = null;
        return;
      }

      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      setFormData({
        ...formData,
        image: file,
      });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const toastId = toast.loading("Sending Your Message...");

    try {
      const response = await axios.post(
        "https://formspree.io/f/xyzwablg",
        formData
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!", { id: toastId });
        setFormData({ name: "", email: "", message: "", image: null });

        if (previewUrl) {
          URL.revokeObjectURL(previewUrl);
          setPreviewUrl("");
        }
      }
    } catch (error) {
      toast.error("Error sending message. Please try again.", { id: toastId });
    }
  };

  return (
    <div className="flex flex-col items-center gap-[35px] mx-auto mb-[50px] w-[380px] xl:w-[1200px] lg:max-w-[1024px]">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Top */}
      <div>
        <h3 className="mt-5 lg:w-[600px] font-semibold lg:text-[45px] text-3xl text-center">
          Send Your{" "}
          <span className="hover:shadow-[0_0_7px_4px_#61caff] px-2.5 py-1.5 rounded-full text-cyan-400 transition-all duration-800">
            Message{" "}
          </span>
        </h3>
      </div>

      {/* Bottom */}
      <div className="flex lg:flex-row flex-col justify-around items-center px-[20px] lg:px-[20px] xl:px-[50px] border-2 border-cyan-400 w-[370px] lg:w-[1024px] xl:w-[1200px]">
        {/* Left Side */}
        <div className="lg:w-[500px] xl:w-[600px]">
          <Image
            src={email}
            alt={"email"}
            width={300}
            height={300}
            className="hidden lg:flex shadow-[0_0_30px_20px_#61caff] mx-auto border-2 rounded-full hover:rotate-360 transition-all animate-pulse duration-5000 transform"
          />
        </div>

        {/* Right Side */}
        <div className="p-[10px] lg:p-[30px] w-[370px] lg:w-[500px] xl:w-[600px]">
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
            <div className="flex flex-col gap-[10px] mb-[10px]">
              <label htmlFor="image">Upload Smaple Photo: (optional)</label>
              <div className="flex md:flex-row flex-col items-center lg:items-start gap-4">
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept=".jpg,.jpeg,.png"
                  className="px-4 py-1 border-1 dark:border-amber-100 w-[350px] lg:w-[550px]"
                  onChange={handleImageChange}
                />
                {previewUrl && (
                  <div className="flex flex-col items-center p-2 border-1 dark:border-amber-100 w-[250px]">
                    <p className="mb-1 text-md text-center">Preview</p>
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-[150px] h-[150px] object-contain"
                    />
                  </div>
                )}
              </div>
              <p className="text-gray-500 text-xs lg:text-left text-center">
                Accepted formats: JPEG, JPG, PNG
              </p>
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
