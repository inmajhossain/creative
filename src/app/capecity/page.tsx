import { Metadata } from "next";
import CapecityContent from "./capecitycontent/CapecityContent";

export const metadata: Metadata = {
  title: "Creative Tape - Production Capacity",
  description:
    "Creative Tape Industries is a best & top garments accessories manufacturer in Bangladesh, producing high-quality elastic bands, jacquard elastic, drawstrings, twill tapes, belts, drawcords, rib tapes, sporting tapes, and tipping solutions. Trusted by global brands since 2006.",
};

export default function page() {
  return <CapecityContent />;
}
