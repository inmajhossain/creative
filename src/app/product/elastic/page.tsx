"use client";
import Elastic from "@/components/Product/Elastic";

import React from "react";

export default function page() {
  return (
    <div className="flex flex-col justify-between items-center mx-auto mt-[50px] w-[380px] md:w-[768px] xl:w-[1280px] lg:max-w-[1024px] text-white">
      <div>
        {/* Top Side */}
        <div>
          <h3 className="mx-auto mb-[50px] lg:w-[600px] font-semibold text-[30px] text-black lg:text-[45px] dark:text-white text-center">
            Elastic Unit{" "}
            <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-400 transition-all duration-800">
              Details
            </span>
          </h3>
        </div>

        {/* Bottom Side */}

        <div className="flex flex-col justify-around items-center lg:items-start gap-[10px] bg-cyan-900 dark:bg-cyan-900/30 p-[30px] lg:w-[1024px] xl:w-[1280px] lg:text-left text-center">
          <h2 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-200 text-3xl">
            Elastic Unit – Where Flexibility Meets Innovation
          </h2>
          <p>
            At Elastic Unit, we don’t just manufacture elastic—we bring
            creativity, quality, and customization together to craft the perfect
            stretch solution for your needs. As specialists in woven elastic, we
            offer a wide range of styles, textures, and colors tailored to fit
            your vision.
          </p>
          <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-amber-100 text-2xl">
            Our Collection of Elastic Excellence
          </h3>
          <h4>
            <span className="text-green-400 text-lg">Plain Elastic :</span>{" "}
            Simple, strong, and scalable our advanced production line can
            manufacture plain elastic from 2mm up to 170mm in width. Whether
            you're producing intimate wear, sports gear, or industrial goods,
            we’ve got the stretch to match your scale.
          </h4>
          <h4>
            <span className="text-green-400 text-lg">Stripe Elastic :</span>{" "}
            Make your product pop with single or multi color stripe elastic. We
            weave precision and vibrancy into every strand, adding a touch of
            style to strength.
          </h4>
          <h4>
            <span className="text-green-400 text-lg">Brush Elastic :</span> Soft
            on the surface, strong at the core our one-sided brush elastic
            delivers comfort without compromising durability. Ideal for products
            that demand a gentle touch.
          </h4>
          <h4>
            <span className="text-green-400 text-lg">
              Adjustable Hole Elastic :
            </span>{" "}
            Function meets flexibility with our hole elastic, crafted on
            precision crochet machines. Fully customizable in hole size, width,
            and spacing, this is the ideal choice for adjustable applications.
          </h4>

          <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-amber-100 text-2xl">
            Customization is Our Craft
          </h3>
          <h3>
            Need something truly unique? Our team can create custom elastic
            solutions based on your designs, sizes, colors, and technical specs.
            We turn your requirements into reality woven to perfection.
          </h3>
          <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-amber-100 text-2xl">
            Partner with Elastic Unit
          </h3>
          <h3>
            Let’s stretch the boundaries of what elastic can do. Whether you're
            a designer, manufacturer, or innovator we're here to support your
            vision with flexibility, quality, and unmatched service.
          </h3>
          {/* Closing Tag */}
          <div className="flex flex-row justify-between items-center gap-2 mx-auto mt-[10px]">
            <h3 className="dark:bg-white w-[40px] h-[3px]"></h3>
            <h3 className="dark:bg-white rounded-full w-[10px] h-[10px]"></h3>
            <h3 className="dark:bg-white w-[40px] h-[3px]"></h3>
          </div>
        </div>
      </div>
      {/* Gallery */}
      <div>
        <Elastic />
      </div>
    </div>
  );
}
