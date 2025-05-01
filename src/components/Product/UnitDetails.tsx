"use client";
import { motion } from "framer-motion";
import React from "react";

export default function UnitDetails() {
  return (
    <div className="flex flex-col justify-between items-center mx-auto mt-[50px] w-full md:w-[768px] lg:max-w-[1280px]">
      {/* Top Side */}

      <div>
        <h3 className="mx-auto mb-[50px] lg:w-[600px] font-semibold text-[30px] lg:text-[45px] text-center">
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
          <div className="flex flex-col justify-around items-center lg:items-start gap-[10px] bg-cyan-900/30 p-[30px] lg:w-[900px] lg:text-left text-center">
            <h2 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-200 text-3xl">
              Elastic Unit – Where Flexibility Meets Innovation
            </h2>
            <p>
              At Elastic Unit, we don’t just manufacture elastic—we bring
              creativity, quality, and customization together to craft the
              perfect stretch solution for your needs. As specialists in woven
              elastic, we offer a wide range of styles, textures, and colors
              tailored to fit your vision.
            </p>
            <h3 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-100 text-2xl">
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
              Make your product pop with single or multi color stripe elastic.
              We weave precision and vibrancy into every strand, adding a touch
              of style to strength.
            </h4>
            <h4>
              <span className="text-green-400 text-lg">Brush Elastic :</span>{" "}
              Soft on the surface, strong at the core our one-sided brush
              elastic delivers comfort without compromising durability. Ideal
              for products that demand a gentle touch.
            </h4>
            <h4>
              <span className="text-green-400 text-lg">
                Adjustable Hole Elastic :
              </span>{" "}
              Function meets flexibility with our hole elastic, crafted on
              precision crochet machines. Fully customizable in hole size,
              width, and spacing, this is the ideal choice for adjustable
              applications.
            </h4>
            <h4>
              <span className="text-green-400 text-lg">Jacquard Elastic :</span>{" "}
              Where style and structure intertwine. Our Jacquard elastic is
              available in both Polyester and Nylon, offering endless
              possibilities in design, color, and size. From bold branding to
              intricate detailing, we weave your identity into every piece.
            </h4>
            <h3 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-100 text-2xl">
              Customization is Our Craft
            </h3>
            <h3>
              Need something truly unique? Our team can create custom elastic
              solutions based on your designs, sizes, colors, and technical
              specs. We turn your requirements into reality woven to perfection.
            </h3>
            <h3 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-100 text-2xl">
              Partner with Elastic Unit
            </h3>
            <h3>
              Let’s stretch the boundaries of what elastic can do. Whether
              you're a designer, manufacturer, or innovator we're here to
              support your vision with flexibility, quality, and unmatched
              service.
            </h3>
          </div>
          {/* Second */}

          <div className="flex flex-col justify-around items-center lg:items-start gap-[10px] bg-rose-900/30 p-[30px] lg:w-[900px] lg:text-left text-center">
            <h2 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-200 text-3xl">
              Drawstring Unit – Where Detail Makes the Difference
            </h2>
            <p>
              At Drawstring Unit, our Drawstring Division is all about design,
              precision, and performance. With a wide range of advanced
              machinery and materials, we craft custom drawstrings in every
              style, shape, and color imaginable.
            </p>
            <h3 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-100 text-2xl">
              From Stripe to Solid, Round to Flat we offer:
            </h3>
            <h4>
              <span className="text-green-400 text-lg">Round Drawstring :</span>{" "}
              16SP & 18SP
            </h4>
            <h4>
              <span className="text-green-400 text-lg">Flat Drawstring :</span>{" "}
              17SP & 33SP
            </h4>
            <h4>
              <span className="text-green-400 text-lg">Tube Drawstring :</span>{" "}
              32SP & 48SP
            </h4>
            <h4>
              <span className="text-green-400 text-lg">
                Design Drawstring :
              </span>{" "}
              43SP
            </h4>

            <h3 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-100 text-2xl">
              Premium Tipping Finishes
            </h3>
            <h3>
              We provide both plastic and metal tipping, available in logo or
              non-logo options Azo free, lead free, magnet free, and made to
              meet global safety standards.
            </h3>
            <h3 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-100 text-2xl">
              Custom Colors. Unique Weaves. Tailored Sizes.
            </h3>
            <h3>
              From fashion to function, we bring your drawstring ideas to life
              with quality that ties it all together.
            </h3>
          </div>
          {/* Third */}
          <div className="flex flex-col justify-around items-center lg:items-start gap-[10px] bg-cyan-900/30 p-[30px] lg:w-[900px] lg:text-left text-center id-twilltape">
            <h2 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-200 text-3xl">
              Twill Tape Unit – Woven to Impress
            </h2>
            <p>
              At Twill Tape Unit, our Twill Tape Division is where craftsmanship
              meets creativity. We specialize in producing a wide variety of
              customizable tapes that bring style and strength to your products.
            </p>
            <h3 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-100 text-2xl">
              What We Offer:
            </h3>
            <h4>
              <span className="text-green-400 text-lg">
                Multi-Color Fashion Twill Tapes :
              </span>{" "}
              In both polyester & cotton, with bold or subtle color combos.
            </h4>
            <h4>
              <span className="text-green-400 text-lg">Grosgrain Tapes :</span>{" "}
              A wide variety of patterns and finishes for that perfect touch.
            </h4>
            <h4>
              <span className="text-green-400 text-lg">Jacquard Tapes :</span>{" "}
              Intricate weaves, stylish designs, and standout branding.
            </h4>

            <h3 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-100 text-2xl">
              Custom sizes, colors (DTM), stripe patterns, and weaving styles
            </h3>
            <h3>we bring your tape vision to life.</h3>
            <h3 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-100 text-2xl">
              From high-fashion to industrial, our tapes are designed to
              enhance, built to last.
            </h3>
          </div>
          {/* Four */}
          <div className="flex flex-col justify-around items-center lg:items-start gap-[10px] bg-rose-900/30 p-[30px] lg:w-[900px] lg:text-left text-center">
            <h2 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-200 text-3xl">
              Belt Unit – Strength in Style
            </h2>
            <p>
              At Belt Unit, our Woven Belt Division combines durability with
              design. From bold fashion statements to functional everyday wear,
              we manufacture a wide range of custom belts that are as strong as
              they are stylish.
            </p>
            <h3 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-100 text-2xl">
              Our Belt Collection Includes:
            </h3>
            <h4>
              <span className="text-green-400 text-lg">
                D-Ring & Roller Buckle Belts :
              </span>{" "}
              Woven belts in variety of designs, built for both form and
              function.
            </h4>
            <h4>
              <span className="text-green-400 text-lg">
                {" "}
                D-Ring & Roller Buckle Belts :{" "}
              </span>{" "}
              Available in cotton & polyester, with solid or multicolor options.
            </h4>
            <h4>
              <span className="text-green-400 text-lg">
                Suspender Elastic Belts :
              </span>{" "}
              Fashion-forward, flexible, and available in vibrant designs.
            </h4>
            <h4>
              <span className="text-green-400 text-lg">
                Steel Hook & Stylish Buckle Belts :
              </span>{" "}
              Unique hardware options for a premium finish.
            </h4>
            <h4>
              <span className="text-green-400 text-lg">
                Fancy Ottoman Tape Belts :
              </span>{" "}
              Rich texture meets elegant design in both cotton and polyester.
            </h4>

            <h3 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-100 text-2xl">
              Custom sizes, patterns, colors (DTM), and weaves
            </h3>
            <h3>
              tailored exactly to your vision. From rugged utility to
              runway-ready looks, our belts are crafted to elevate any product.
            </h3>
            <h3 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-100 text-2xl">
              Custom Colors. Unique Weaves. Tailored Sizes.
            </h3>
            <h3>
              From fashion to function, we bring your drawstring ideas to life
              with quality that ties it all together.
            </h3>
          </div>
          {/* Five */}
          <div className="flex flex-col justify-around items-center lg:items-start gap-[10px] bg-cyan-900/30 p-[30px] lg:w-[900px] lg:text-left text-center">
            <h2 className="py-[10px] border-cyan-400 border-b-2 w-full text-amber-200 text-3xl">
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

            <h3 className="py-[10px] w-full text-amber-100 text-2xl">
              Distinctive. Durable. Designed for you. That’s Jacquard Elastic
              Unit.
            </h3>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:hidden lg:hidden relative xl:flex border-amber-100 border-l-[5px] h-[3350px]">
          <motion.div
            animate={{ y: [200, 0] }}
            transition={{ duration: 3, delay: 1 }}
            className="top-[120px] right-[-40] absolute flex justify-center items-center bg-slate-100 shadow-[0_0_7px_4px_#61caff] border-2 border-cyan-400 rounded-full w-[80px] h-[80px] overflow-hidden font-bold text-[30px] text-cyan-950 text-center hover:rotate-360 transition-all animate-pulse animate-rotate duration-1000"
          >
            1
          </motion.div>
          <motion.div
            animate={{ y: [200, 0] }}
            transition={{ duration: 3, delay: 1 }}
            className="top-[1060px] right-[-40] absolute flex justify-center items-center bg-slate-100 shadow-[0_0_7px_4px_#61caff] border-2 border-cyan-400 rounded-full w-[80px] h-[80px] overflow-hidden font-bold text-[30px] text-cyan-950 text-center hover:rotate-360 transition-all animate-pulse animate-rotate duration-1000"
          >
            2
          </motion.div>
          <motion.div
            animate={{ y: [200, 0] }}
            transition={{ duration: 3, delay: 1 }}
            className="top-[1740px] right-[-40] absolute flex justify-center items-center bg-slate-100 shadow-[0_0_7px_4px_#61caff] border-2 border-cyan-400 rounded-full w-[80px] h-[80px] overflow-hidden font-bold text-[30px] text-cyan-950 text-center hover:rotate-360 transition-all animate-pulse animate-rotate duration-1000"
          >
            3
          </motion.div>
          <motion.div
            animate={{ y: [200, 0] }}
            transition={{ duration: 3, delay: 1 }}
            className="top-[2340px] right-[-40] absolute flex justify-center items-center bg-slate-100 shadow-[0_0_7px_4px_#61caff] border-2 border-cyan-400 rounded-full w-[80px] h-[80px] overflow-hidden font-bold text-[30px] text-cyan-950 text-center hover:rotate-360 transition-all animate-pulse animate-rotate duration-1000"
          >
            4
          </motion.div>
          <motion.div
            animate={{ y: [200, 0] }}
            transition={{ duration: 3, delay: 1 }}
            className="top-[3050px] right-[-40] absolute flex justify-center items-center bg-slate-100 shadow-[0_0_7px_4px_#61caff] border-2 border-cyan-400 rounded-full w-[80px] h-[80px] overflow-hidden font-bold text-[30px] text-cyan-950 text-center hover:rotate-360 transition-all animate-pulse animate-rotate duration-1000"
          >
            5
          </motion.div>
        </div>
      </div>
    </div>
  );
}
