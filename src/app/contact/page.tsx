import Form from "@/components/body/form";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Tape - Contact",
  description:
    "Creative Tape Industries is a best & top garments accessories manufacturer in Bangladesh, producing high-quality elastic bands, jacquard elastic, drawstrings, twill tapes, belts, drawcords, rib tapes, sporting tapes, and tipping solutions. Trusted by global brands since 2006.",
};

export default function page() {
  return (
    <div>
      <Form />
    </div>
  );
}
