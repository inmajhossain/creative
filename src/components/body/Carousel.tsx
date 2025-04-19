import Image from "next/image";
import asos from "@/image/logo/asos.webp";
import auchan from "@/image/logo/auchan.svg";
import babyshop from "@/image/logo/babyshop.png";
import boss from "@/image/logo/boss.svg";
import calvin from "@/image/logo/calvin.svg";
import cottonon from "@/image/logo/cottonon.webp";
import gap from "@/image/logo/gap.svg";
import george from "@/image/logo/george.svg";
import hm from "@/image/logo/h&m.svg";
import hurley from "@/image/logo/hurely.png";
import JCPenney from "@/image/logo/JCPenney.svg";
import johnlewis from "@/image/logo/johnlewis.svg";
import kmart from "@/image/logo/kmart.svg";
import lacoste from "@/image/logo/lacoste.svg";
import lefties from "@/image/logo/lefties.svg";
import mango from "@/image/logo/mango.svg";
import marks from "@/image/logo/marks.svg";
import matalan from "@/image/logo/matalan.png";
import myer from "@/image/logo/myer.svg";
import next from "@/image/logo/next.svg";
import obaibi from "@/image/logo/obaibi.png";
import okaidi from "@/image/logo/okaidi.svg";
import pullbea2 from "@/image/logo/pull&bea.svg";
import springfield from "@/image/logo/springfield.png";
import target from "@/image/logo/target.svg";
import tesco from "@/image/logo/tesco.svg";
import tommy from "@/image/logo/tommy.svg";
import topman from "@/image/logo/topman.svg";
import vertbaudet from "@/image/logo/vertbaudet.png";
import waitrose from "@/image/logo/waitrose&partners.svg";
import zara from "@/image/logo/zara.svg";

const logos = [
  { src: asos, alt: "asos" },
  { src: auchan, alt: "auchan" },
  { src: babyshop, alt: "babyshop" },
  { src: boss, alt: "boss" },
  { src: calvin, alt: "calvin" },
  { src: cottonon, alt: "cottonon" },
  { src: gap, alt: "gap" },
  { src: george, alt: "george" },
  { src: hm, alt: "hm" },
  { src: hurley, alt: "hurley" },
  { src: JCPenney, alt: "JCPenney" },
  { src: johnlewis, alt: "johnlewis" },
  { src: kmart, alt: "kmart" },
  { src: lacoste, alt: "lacoste" },
  { src: lefties, alt: "lefties" },
  { src: mango, alt: "mango" },
  { src: marks, alt: "marks" },
  { src: matalan, alt: "matalan" },
  { src: myer, alt: "myer" },
  { src: next, alt: "next" },
  { src: obaibi, alt: "obaibi" },
  { src: okaidi, alt: "okaidi" },
  { src: pullbea2, alt: "pullbea2" },
  { src: springfield, alt: "springfield" },
  { src: target, alt: "target" },
  { src: tesco, alt: "tesco" },
  { src: tommy, alt: "tommy" },
  { src: topman, alt: "topman" },
  { src: vertbaudet, alt: "vertbaudet" },
  { src: waitrose, alt: "waitrose" },
  { src: zara, alt: "zara" },
];

// Duplicate the logos for seamless infinite scrolling
const duplicatedLogos = [...logos, ...logos];

export default function LogoCarousel() {
  return (
    <div className="relative bg-white/60 mx-auto mt-[50px] lg:mt-[-120px] py-2 w-full h-[100px] lg:h-[120px] overflow-hidden">
      <div className="absolute inset-0 flex items-center mx-auto w-full">
        <div className="flex mx-auto animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex-shrink-0 opacity-80 hover:opacity-100 mx-8 transition-opacity"
            >
              {/* Global CSS has Keyframes classes */}
              <Image
                src={logo.src}
                alt={logo.alt}
                width={110}
                height={80}
                className="h-[80px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
