import Welcome from "@/components/body/Welcome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Tape Industries Ltd.",
  description:
    "Creative Tape Industries is a best & top garments accessories manufacturer in Bangladesh, producing high-quality elastic bands, jacquard elastic, drawstrings, twill tapes, belts, drawcords, rib tapes, sporting tapes, and tipping solutions. Trusted by global brands since 2006.",
};

export default function Home() {
  return (
    <div>
      <Welcome />
    </div>
  );
}
