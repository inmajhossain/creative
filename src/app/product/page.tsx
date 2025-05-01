import Belt from "@/components/Product/Belt";
import Drawstring from "@/components/Product/Drawstring";
import Elastic from "@/components/Product/Elastic";
import Jaquard from "@/components/Product/Jaquard";
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
      <Jaquard />
      <Belt />
    </div>
  );
}
