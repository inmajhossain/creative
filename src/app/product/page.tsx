import Drawstring from "@/components/Product/Drawstring";
import Elastic from "@/components/Product/Elastic";
import TwillTape from "@/components/Product/TwillTape";
import UnitDetails from "@/components/Product/UnitDetails";
import React from "react";

export default function page() {
  return (
    <div>
      <UnitDetails />
      <Elastic />
      <Drawstring />
      <TwillTape />
    </div>
  );
}
