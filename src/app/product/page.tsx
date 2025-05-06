import { Metadata } from "next";
import ProductContent from "./productcontent/ProductContent";

// Export Metadata for Next.js App Router
export const metadata: Metadata = {
  title: "Creative Tape - Products",
  description:
    "Creative Tape Industries is a best & top garments accessories manufacturer in Bangladesh, producing high-quality elastic bands, jacquard elastic, drawstrings, twill tapes, belts, drawcords, rib tapes, sporting tapes, and tipping solutions. Trusted by global brands since 2006.",
};

export default function page() {
  return <ProductContent />;
}
