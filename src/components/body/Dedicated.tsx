import Image from "next/image";
import dedicated from "@/image/dedicated.jpg";
import { Link } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
export default function Dedicated() {
  return (
    <div className="flex flex-col gap-[30px] mx-auto lg:mt-[100px] lg:max-w-[1280px]">
      {/* Uper Part Start */}

      <div>
        <h3 className="mx-auto mt-[20px] lg:w-[600px] font-semibold text-[30px] lg:text-[45px] text-center">
          Empowers{" "}
          <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-600 transition-all duration-800">
            Dedication{" "}
          </span>
        </h3>
      </div>

      {/* Upper Part End */}
      {/* Bottom Part Start */}
      <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-[100px] mx-auto mb-[50px] px-[20px] py-[20px] max-w-[380px] lg:max-w-[1280px] lg:h-[500px]">
        {/* Left Start */}
        <div className="flex flex-col justify-between items-center lg:items-start gap-[20px] mb-[20px] lg:mb-0 lg:w-[500px] text-left">
          <h2 className="mt-[-20px] lg:mt-0 text-[16px] lg:text-[28px] lg:leading-tight">
            Our Experts dedicated teamwork{" "}
            <span className="dark:text-cyan-600">always empowers</span> our
            Buyer’s energy.
          </h2>
          <h3 className="text-[12px] lg:text-[18px]">
            Creative offers you the most comprehensive & competitive range of
            bottom trims in Ready-made Garments Sector.{" "}
            <span className="dark:text-cyan-600">
              We always strive to provide customer’s full satisfaction & round
              the clock basis services.
            </span>
          </h3>
          <h4 className="text-[12px] lg:text-[16px]">
            Our long time experience in this industry has helped us to acquire
            knowledge and information for products and services to meet the
            requirements of our customers.
          </h4>
          <p className="text-[12px] lg:text-[16px]">
            We always offer flexibility, competitiveness and sharper lead time
            to reach the customer demand. Our network supported by a dynamic
            team of professionals to serve our clients as a strong chain supply
            management.
          </p>
        </div>
        {/* Left End */}

        {/* Right Start */}
        <div>
          <Image
            src={dedicated}
            alt={"dedicated"}
            width={500}
            height={500}
            className="shadow-[10px] hover:shadow-[0_0_20px_10px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] border-1 dark:border-amber-100 w-[350px] lg:w-[500px] h-[220px] lg:h-[350px] hover:rotate-[180deg] transition-all duration-3000 transform"
          />
        </div>
        {/* Right End */}
      </div>
      {/* Bottom Part End */}
    </div>
  );
}
