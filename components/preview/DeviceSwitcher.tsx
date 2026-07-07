"use client";

type Props = {
  device: "desktop" | "tablet" | "mobile";
  setDevice: (device: "desktop" | "tablet" | "mobile") => void;
};

export default function DeviceSwitcher({
  device,
  setDevice,
}: Props) {
  return (
    <div className="flex gap-3 mb-6">

      <button
        onClick={() => setDevice("desktop")}
        className={`px-5 py-2 rounded-xl ${
          device === "desktop"
            ? "bg-blue-600"
            : "bg-slate-800"
        }`}
      >
        Desktop
      </button>

      <button
        onClick={() => setDevice("tablet")}
        className={`px-5 py-2 rounded-xl ${
          device === "tablet"
            ? "bg-blue-600"
            : "bg-slate-800"
        }`}
      >
        Tablet
      </button>

      <button
        onClick={() => setDevice("mobile")}
        className={`px-5 py-2 rounded-xl ${
          device === "mobile"
            ? "bg-blue-600"
            : "bg-slate-800"
        }`}
      >
        Mobile
      </button>

    </div>
  );
}