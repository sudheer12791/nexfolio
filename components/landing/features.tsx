"use client";

import { motion } from "framer-motion";
import {
  FaRobot,
  FaFileAlt,
  FaPalette,
  FaChartLine,
  FaGlobe,
  FaMagic,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot size={34} />,
    title: "AI Portfolio Builder",
    description:
      "Answer a few questions and let AI build your complete portfolio automatically.",
  },
  {
    icon: <FaFileAlt size={34} />,
    title: "Resume Builder",
    description:
      "Generate ATS-friendly resumes in seconds with AI assistance.",
  },
  {
    icon: <FaPalette size={34} />,
    title: "Beautiful Templates",
    description:
      "Choose from modern, futuristic, minimal, and premium templates.",
  },
  {
    icon: <FaChartLine size={34} />,
    title: "Analytics",
    description:
      "Track visitors, recruiters, and portfolio performance.",
  },
  {
    icon: <FaGlobe size={34} />,
    title: "One Click Publish",
    description:
      "Publish your portfolio instantly and share it anywhere.",
  },
  {
    icon: <FaMagic size={34} />,
    title: "AI Career Assistant",
    description:
      "Receive suggestions to improve your portfolio and resume.",
  },
];

export default function Features() {
  return (
    <section className="py-28 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Powerful Features
          </h2>

          <p className="text-slate-400 mt-6 text-lg">
            Everything you need to build your professional online presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 transition-all duration-300"
            >
              <div className="text-blue-400 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {feature.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}