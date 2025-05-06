import Link from "next/link";
import {
  FaFacebookSquare,
  FaPhoneSquareAlt,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { ModeToggle } from "./ModeToggle";

export function HeaderTop() {
  return (
    <div className="top-0 sticky bg-black mx-auto w-full text-white">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-[20px] lg:gap-0 mx-auto px-[10px] xl:px-[50px] py-[5px] w-[380px] lg:w-[1024px] xl:w-[1280px]">
        <div className="flex flex-row items-center gap-[20px] text-[13px] lg:text-[16px]">
          <Link
            href="tel:+8801708517968"
            className="flex items-center gap-[5px]"
          >
            <FaPhoneSquareAlt
              href="#"
              className="text-amber-50 hover:text-cyan-200 icon"
            />
            <h3 className="hover:text-cyan-200 hover:animate-pulse">
              +8801708517968
            </h3>
          </Link>
          <h3>|</h3>
          <Link
            href="mailto:rouf@creativetapeinds.com"
            className="flex items-center gap-[5px]"
          >
            <TfiEmail className="text-amber-50 hover:text-cyan-200 icon" />
            <h3 className="hover:text-cyan-200 hover:animate-pulse">
              rouf@creativetapeinds.com
            </h3>
          </Link>
          {/* <div className="lg:hidden">
          <ModeToggle />
        </div> */}
        </div>

        {/* Social Media Section */}

        <div className="hidden lg:flex flex-row gap-[5px]">
          <Link href="" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare className="text-amber-50 hover:text-cyan-200 icon" />
          </Link>

          <Link
            href="https://www.facebook.com/creativetapeinds"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="text-amber-50 hover:text-cyan-200 icon" />
          </Link>

          <FaYoutubeSquare
            href="#"
            className="text-amber-50 hover:text-cyan-200 icon"
          />
        </div>
      </div>
    </div>
  );
}
