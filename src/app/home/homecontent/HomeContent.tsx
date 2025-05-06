"use client";
import React from "react";
import Buyers from "@/components/body/Buyers";
import Carousel from "@/components/body/Carousel";
import ChairmanNote from "@/components/body/ChairmanNote";
import Dedicated from "@/components/body/Dedicated";
import Directors from "@/components/body/Directors";
import Form from "@/components/body/form";
import Hero from "@/components/body/Hero";
import Units from "@/components/body/Units";
import Belt from "@/components/Product/Belt";
import Drawstring from "@/components/Product/Drawstring";
import Elastic from "@/components/Product/Elastic";
import Jaquard from "@/components/Product/Jaquard";
import Rib from "@/components/Product/Rib";
import TwillTape from "@/components/Product/TwillTape";
import UnitDetails from "@/components/Product/UnitDetails";
import Production from "@/components/body/Production";

export default function page() {
  return (
    <div>
      <Hero />
      <Carousel />
      <ChairmanNote />
      <Buyers />
      <Production />
      <Dedicated />
      <Units />
      <UnitDetails />
      <Elastic />
      <Drawstring />
      <TwillTape />
      <Jaquard />
      <Belt />
      <Rib />
      <Form />
      <Directors />
    </div>
  );
}
