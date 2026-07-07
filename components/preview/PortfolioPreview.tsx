"use client";

import { useState } from "react";
import DeviceSwitcher from "./DeviceSwitcher";
import DeveloperTemplate from "../templates/DeveloperTemplate";

export default function PortfolioPreview({
  data,
}: {
  data: any;
}) {
  const [device, setDevice] = useState<
    "desktop" | "tablet" | "mobile"
  >("desktop");

  return (
    <div>

      <DeviceSwitcher
        device={device}
        setDevice={setDevice}
      />

      <div
        className={`mx-auto transition-all duration-300 ${
          device === "desktop"
            ? "max-w-6xl"
            : device === "tablet"
            ? "max-w-3xl"
            : "max-w-sm"
        }`}
      >

        <DeveloperTemplate data={data} />

      </div>

    </div>
  );
}