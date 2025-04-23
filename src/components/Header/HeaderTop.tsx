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
      <div className="flex lg:flex-row flex-col justify-between items-center gap-[20px] lg:gap-0 mx-auto px-[10px] py-[5px] max-w-[380px] lg:max-w-[1280px]">
        <div className="flex flex-row items-center gap-[20px] text-[13px] lg:text-[16px]">
          <Link
            href="tel:+8801708517968"
            className="flex items-center gap-[5px]"
          >
            <FaPhoneSquareAlt href="#" className="icon" />
            <h3>+8801708517968</h3>
          </Link>
          <h3>|</h3>
          <Link
            href="mailto:rouf@creativetapeinds.com"
            className="flex items-center gap-[5px]"
          >
            <TfiEmail className="icon" />
            <h3>rouf@creativetapeinds.com</h3>
          </Link>
          {/* <div className="lg:hidden">
          <ModeToggle />
        </div> */}
        </div>

        {/* Social Media Section */}

        <div className="hidden lg:flex flex-row gap-[5px]">
          <FaTwitterSquare
            href="https://www.facebook.com/creativetapeinds"
            className="icon"
          />

          <FaFacebookSquare
            href="https://www.facebook.com/creativetapeinds"
            className="icon"
          />

          <FaYoutubeSquare href="#" className="icon" />
        </div>
      </div>
    </div>
  );
}
