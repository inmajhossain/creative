"use client";
import { motion } from "framer-motion";
import React from "react";

export default function UnitDetails() {
  return (
    <div className="flex flex-col justify-between items-center mx-auto mt-[50px] w-full md:w-[768px] lg:max-w-[1280px] text-white">
      {/* Top Side */}

      <div>
        <h3 className="mx-auto mb-[50px] lg:w-[600px] font-semibold text-[30px] text-black lg:text-[45px] dark:text-white text-center">
          Production Unit{" "}
          <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-400 transition-all duration-800">
            Details
          </span>
        </h3>
      </div>

      {/* Bottom Side */}
      <div className="flex flex-row justify-between items-start lg:gap-[175px]">
        {/* Left Side */}
        <div className="flex flex-col justify-between items-start gap-[50px]">
          {/* First */}
          <div className="flex flex-col justify-around items-start gap-[10px] bg-cyan-900 dark:bg-cyan-900/30 p-[30px] lg:w-[900px] text-left">
            <h2 className="py-[10px] border-cyan-400 border-b-2 w-full text-[24px] text-amber-200 md:text-3xl">
              Elastic Unit – Where Flexibility Meets Innovation
            </h2>
            <p>
              At Elastic Unit, we don’t just manufacture elastic—we bring
              creativity, quality, and customization together to craft the
              perfect stretch solution for your needs. As specialists in woven
              elastic, we offer a wide range of styles, textures, and colors
              tailored to fit your vision.
            </p>
            <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-[20px] dark:text-amber-100 md:text-2xl">
              Our Collection of Elastic Excellence
            </h3>
            <h4>
              <span className="dark:text-green-400 text-lg">
                Plain Elastic :
              </span>{" "}
              Simple, strong, and scalable our advanced production line can
              manufacture plain elastic from 2mm up to 170mm in width. Whether
              you're producing intimate wear, sports gear, or industrial goods,
              we’ve got the stretch to match your scale.
            </h4>
            <h4>
              <span className="dark:text-green-400 text-lg">
                Stripe Elastic :
              </span>{" "}
              Make your product pop with single or multi color stripe elastic.
              We weave precision and vibrancy into every strand, adding a touch
              of style to strength.
            </h4>
            <h4>
              <span className="dark:text-green-400 text-lg">
                Brush Elastic :
              </span>{" "}
              Soft on the surface, strong at the core our one-sided brush
              elastic delivers comfort without compromising durability. Ideal
              for products that demand a gentle touch.
            </h4>
            <h4>
              <span className="dark:text-green-400 text-lg">
                Adjustable Hole Elastic :
              </span>{" "}
              Function meets flexibility with our hole elastic, crafted on
              precision crochet machines. Fully customizable in hole size,
              width, and spacing, this is the ideal choice for adjustable
              applications.
            </h4>

            <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-[20px] dark:text-amber-100 md:text-2xl">
              Customization is Our Craft
            </h3>
            <h3>
              Need something truly unique? Our team can create custom elastic
              solutions based on your designs, sizes, colors, and technical
              specs. We turn your requirements into reality woven to perfection.
            </h3>
            <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-[20px] dark:text-amber-100 md:text-2xl">
              Partner with Elastic Unit
            </h3>
            <h3>
              Let’s stretch the boundaries of what elastic can do. Whether
              you're a designer, manufacturer, or innovator we're here to
              support your vision with flexibility, quality, and unmatched
              service.
            </h3>
            {/* Closing Tag */}
            <div className="flex flex-row justify-between items-center gap-2 mx-auto mt-[10px]">
              <h3 className="bg-white w-[40px] h-[3px]"></h3>
              <h3 className="bg-white rounded-full w-[10px] h-[10px]"></h3>
              <h3 className="bg-white w-[40px] h-[3px]"></h3>
            </div>
          </div>
          {/* Second */}
          <div className="flex flex-col justify-around items-start gap-[10px] bg-green-900 dark:bg-green-900/30 p-[30px] lg:w-[900px] text-left">
            <h2 className="py-[10px] border-cyan-400 border-b-2 w-full text-[24px] text-amber-200 md:text-3xl">
              Jacquard Elastic – Where Style and Structure Intertwine
            </h2>
            <p>
              At Jaquard Elastic Unit, our Jacquard elastic is more than just a
              component—it's a statement. Woven with precision on advanced
              Jacquard looms, this elastic combines strength with
              high-definition patterns to deliver unmatched visual appeal and
              performance.
            </p>

            <h4>
              Available in Polyester and Nylon bases, our Jacquard elastic
              supports intricate logos, text, and motifs in a variety of colors
              and finishes. From bold branding on waistbands to delicate
              detailing on fashion and functional wear, this elastic is designed
              to elevate your product’s identity.
            </h4>
            <h4>
              Choose from a wide range of widths, textures, and design options,
              or bring your own pattern to life with our fully customizable
              Jacquard services. Whether you’re building a high-performance
              sports line or a luxury lingerie collection, our Jacquard elastic
              blends durability, flexibility, and design innovation seamlessly.
            </h4>

            <h3 className="py-[10px] w-full text-[20px] dark:text-amber-100 md:text-2xl">
              Distinctive. Durable. Designed for you. That’s Jacquard Elastic
              Unit.
            </h3>
            {/* Closing Tag */}
            <div className="flex flex-row justify-between items-center gap-2 mx-auto mt-[10px]">
              <h3 className="bg-white w-[40px] h-[3px]"></h3>
              <h3 className="bg-white rounded-full w-[10px] h-[10px]"></h3>
              <h3 className="bg-white w-[40px] h-[3px]"></h3>
            </div>
          </div>

          {/* Third */}

          <div className="flex flex-col justify-around items-start gap-[10px] bg-cyan-900 dark:bg-cyan-900/30 p-[30px] lg:w-[900px] text-left">
            <h2 className="py-[10px] border-cyan-400 border-b-2 w-full text-[24px] text-amber-200 md:text-3xl">
              Drawstring Unit – Where Detail Makes the Difference
            </h2>
            <p>
              At Drawstring Unit, our Drawstring Division is all about design,
              precision, and performance. With a wide range of advanced
              machinery and materials, we craft custom drawstrings in every
              style, shape, and color imaginable.
            </p>
            <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-[20px] dark:text-amber-100 md:text-2xl">
              From Stripe to Solid, Round to Flat we offer:
            </h3>
            <h4>
              <span className="dark:text-green-400 text-lg">
                Round Drawstring :
              </span>{" "}
              16SP & 18SP
            </h4>
            <h4>
              <span className="dark:text-green-400 text-lg">
                Flat Drawstring :
              </span>{" "}
              17SP & 33SP
            </h4>
            <h4>
              <span className="dark:text-green-400 text-lg">
                Tube Drawstring :
              </span>{" "}
              32SP & 48SP
            </h4>
            <h4>
              <span className="dark:text-green-400 text-lg">
                Design Drawstring :
              </span>{" "}
              43SP & 46SP
            </h4>

            <h3 className="py-[10px] border-cyan-400 border-b-2 text-[20px] dark:text-amber-100 md:text-2xl">
              Premium Tipping Finishes
            </h3>
            <h3>
              We provide plastic, metal & thread tipping, available in logo or
              non-logo options Azo free, lead free, magnet free, and made to
              meet global safety standards.
            </h3>
            <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-[20px] dark:text-amber-100 md:text-2xl">
              Custom Colors. Unique Weaves. Tailored Sizes.
            </h3>
            <h3>
              From fashion to function, we bring your drawstring ideas to life
              with quality that ties it all together.
            </h3>
            {/* Closing Tag */}
            <div className="flex flex-row justify-between items-center gap-2 mx-auto mt-[10px]">
              <h3 className="bg-white w-[40px] h-[3px]"></h3>
              <h3 className="bg-white rounded-full w-[10px] h-[10px]"></h3>
              <h3 className="bg-white w-[40px] h-[3px]"></h3>
            </div>
          </div>

          {/* Four */}
          <div className="flex flex-col justify-around items-start gap-[10px] bg-green-900 dark:bg-green-900/30 p-[30px] lg:w-[900px] text-left id-twilltape">
            <h2 className="py-[10px] border-cyan-400 border-b-2 w-full text-[24px] text-amber-200 md:text-3xl">
              Tape & Belt Unit – Woven to Impress
            </h2>
            <p>
              At Tape & Belt Unit, our Tape Division is where craftsmanship
              meets creativity. We specialize in producing a wide variety of
              customizable tapes that bring style and strength to your products.
            </p>
            <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-[20px] dark:text-amber-100 md:text-2xl">
              What We Offer:
            </h3>
            <h4>
              <span className="dark:text-green-400 text-lg">
                Multi-Color Fashion Twill Tapes :
              </span>{" "}
              In both polyester & cotton, with bold or subtle color combos.
            </h4>
            <h4>
              <span className="dark:text-green-400 text-lg">
                Grosgrain Tapes :
              </span>{" "}
              A wide variety of patterns and finishes for that perfect touch.
            </h4>
            <h4>
              <span className="dark:text-green-400 text-lg">
                Jacquard Tapes :
              </span>{" "}
              Intricate weaves, stylish designs, and standout branding.
            </h4>

            <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-[20px] dark:text-amber-100 md:text-2xl">
              Custom sizes, colors (DTM), stripe patterns, and weaving styles
            </h3>
            <h3>we bring your tape vision to life.</h3>
            <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-[20px] dark:text-amber-100 md:text-2xl">
              From high-fashion to industrial, our tapes are designed to
              enhance, built to last.
            </h3>
            {/* Closing Tag */}
            <div className="flex flex-row justify-between items-center gap-2 mx-auto mt-[10px]">
              <h3 className="bg-white w-[40px] h-[3px]"></h3>
              <h3 className="bg-white rounded-full w-[10px] h-[10px]"></h3>
              <h3 className="bg-white w-[40px] h-[3px]"></h3>
            </div>
          </div>

          {/* Five */}
          <div className="flex flex-col justify-around items-start gap-[10px] bg-cyan-900 dark:bg-cyan-900/30 p-[30px] lg:w-[900px] text-left">
            <h2 className="py-[10px] border-cyan-400 border-b-2 w-full text-[24px] text-amber-200 md:text-3xl">
              Sporting Tape or Rib Tape Unit
            </h2>
            <h2 className="py-[10px] border-b-2 border-b-cyan-400 text-amber-100 text-3xl">
              Precision Support, Performance Style
            </h2>
            <p>
              At Rib Tape Unit, we understand that performance wear demands more
              than just stretch—it needs structure, comfort, and resilience. Our
              Sporting and Rib Tape Unit delivers just that, offering tailored
              solutions for activewear, outerwear, and technical garments.
            </p>
            <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-[20px] dark:text-amber-100 md:text-2xl">
              Our Range of Performance Enhancers
            </h3>
            <h4>
              <span className="dark:text-green-400 text-lg">
                Sporting Tape :
              </span>{" "}
              Designed for durability and flexibility, our sporting tape is
              ideal for reinforcing seams, waistbands, cuffs, and collars. With
              excellent stretch recovery and abrasion resistance, it supports
              movement while retaining shape—even under the most intense
              conditions. Perfect for activewear, uniforms, and athleisure
              apparel.
            </h4>
            <h4>
              A staple in garment finishing, our rib tape adds both function and
              flair. Available in various textures, widths, and rib patterns, it
              ensures snug fits and clean edges. Whether used in necklines,
              sleeves, or hems, it provides comfort and structure while
              enhancing your product’s overall look.
            </h4>
            <h4>
              Manufactured with high-quality yarns and advanced weaving
              technology, both tapes offer customizable options in color, width,
              thickness, and elasticity to match your brand’s unique needs.
            </h4>

            <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-[20px] dark:text-amber-100 md:text-2xl">
              Built for Motion. Designed to Last.
            </h3>
            <h3>
              From the gym to the street, our Sporting and Rib Tape Unit keeps
              your garments in peak form, wear after wear.
            </h3>
            {/* Closing Tag */}
            <div className="flex flex-row justify-between items-center gap-2 mx-auto mt-[10px]">
              <h3 className="bg-white w-[40px] h-[3px]"></h3>
              <h3 className="bg-white rounded-full w-[10px] h-[10px]"></h3>
              <h3 className="bg-white w-[40px] h-[3px]"></h3>
            </div>
          </div>

          {/* Six */}
          <div className="flex flex-col justify-around items-start gap-[10px] bg-green-900 dark:bg-green-900/30 p-[30px] lg:w-[900px] text-left">
            <h2 className="py-[10px] border-cyan-400 border-b-2 w-full text-[24px] text-amber-200 md:text-3xl">
              Belt Unit – Strength in Style
            </h2>
            <p>
              At Belt Unit, our Woven Belt Division combines durability with
              design. From bold fashion statements to functional everyday wear,
              we manufacture a wide range of custom belts that are as strong as
              they are stylish.
            </p>
            <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-[20px] dark:text-amber-100 md:text-2xl">
              Our Belt Collection Includes:
            </h3>
            <h4>
              <span className="dark:text-green-400 text-lg">
                D-Ring & Roller Buckle Belts :
              </span>{" "}
              Woven belts in variety of designs, built for both form and
              function.
            </h4>
            <h4>
              <span className="dark:text-green-400 text-lg">
                {" "}
                D-Ring & Roller Buckle Belts :{" "}
              </span>{" "}
              Available in cotton & polyester, with solid or multicolor options.
            </h4>
            <h4>
              <span className="dark:text-green-400 text-lg">
                Suspender Elastic Belts :
              </span>{" "}
              Fashion-forward, flexible, and available in vibrant designs.
            </h4>
            <h4>
              <span className="dark:text-green-400 text-lg">
                Steel Hook & Stylish Buckle Belts :
              </span>{" "}
              Unique hardware options for a premium finish.
            </h4>
            <h4>
              <span className="dark:text-green-400 text-lg">
                Fancy Ottoman Tape Belts :
              </span>{" "}
              Rich texture meets elegant design in both cotton and polyester.
            </h4>

            <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-[20px] dark:text-amber-100 md:text-2xl">
              Custom sizes, patterns, colors (DTM), and weaves
            </h3>
            <h3>
              tailored exactly to your vision. From rugged utility to
              runway-ready looks, our belts are crafted to elevate any product.
            </h3>
            <h3 className="py-[10px] border-b-2 border-b-cyan-400 text-[20px] dark:text-amber-100 md:text-2xl">
              Custom Colors. Unique Weaves. Tailored Sizes.
            </h3>
            <h3>
              From fashion to function, we bring your belt ideas to life with
              quality that ties it all together.
            </h3>
            {/* Closing Tag */}
            <div className="flex flex-row justify-between items-center gap-2 mx-auto mt-[10px]">
              <h3 className="bg-white w-[40px] h-[3px]"></h3>
              <h3 className="bg-white rounded-full w-[10px] h-[10px]"></h3>
              <h3 className="bg-white w-[40px] h-[3px]"></h3>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:hidden lg:hidden relative xl:flex border-cyan-900 dark:border-amber-100 border-l-[5px] h-[4125px]">
          <motion.div
            animate={{ y: [200, 0] }}
            transition={{ duration: 3, delay: 1 }}
            className="top-[85px] right-[-40] absolute flex justify-center items-center bg-slate-100 shadow-[0_0_7px_4px_#61caff] border-2 border-cyan-400 rounded-full w-[80px] h-[80px] overflow-hidden font-bold text-[30px] text-cyan-950 text-center hover:rotate-360 transition-all animate-rotate duration-1000"
          >
            1
          </motion.div>
          <motion.div
            animate={{ y: [200, 0] }}
            transition={{ duration: 3, delay: 1 }}
            className="top-[970px] right-[-40] absolute flex justify-center items-center bg-slate-100 shadow-[0_0_7px_4px_#61caff] border-2 border-cyan-400 rounded-full w-[80px] h-[80px] overflow-hidden font-bold text-[30px] text-cyan-950 text-center hover:rotate-360 transition-all animate-rotate duration-1000"
          >
            2
          </motion.div>
          <motion.div
            animate={{ y: [200, 0] }}
            transition={{ duration: 3, delay: 1 }}
            className="top-[1475px] right-[-40] absolute flex justify-center items-center bg-slate-100 shadow-[0_0_7px_4px_#61caff] border-2 border-cyan-400 rounded-full w-[80px] h-[80px] overflow-hidden font-bold text-[30px] text-cyan-950 text-center hover:rotate-360 transition-all animate-rotate duration-1000"
          >
            3
          </motion.div>
          <motion.div
            animate={{ y: [200, 0] }}
            transition={{ duration: 3, delay: 1 }}
            className="top-[2190px] right-[-40] absolute flex justify-center items-center bg-slate-100 shadow-[0_0_7px_4px_#61caff] border-2 border-cyan-400 rounded-full w-[80px] h-[80px] overflow-hidden font-bold text-[30px] text-cyan-950 text-center hover:rotate-360 transition-all animate-rotate duration-1000"
          >
            4
          </motion.div>
          <motion.div
            animate={{ y: [200, 0] }}
            transition={{ duration: 3, delay: 1 }}
            className="top-[2820px] right-[-40] absolute flex justify-center items-center bg-slate-100 shadow-[0_0_7px_4px_#61caff] border-2 border-cyan-400 rounded-full w-[80px] h-[80px] overflow-hidden font-bold text-[30px] text-cyan-950 text-center hover:rotate-360 transition-all animate-rotate duration-1000"
          >
            5
          </motion.div>
          <motion.div
            animate={{ y: [200, 0] }}
            transition={{ duration: 3, delay: 1 }}
            className="top-[3580px] right-[-40] absolute flex justify-center items-center bg-slate-100 shadow-[0_0_7px_4px_#61caff] border-2 border-cyan-400 rounded-full w-[80px] h-[80px] overflow-hidden font-bold text-[30px] text-cyan-950 text-center hover:rotate-360 transition-all animate-rotate duration-1000"
          >
            6
          </motion.div>
        </div>
      </div>
    </div>
  );
}
