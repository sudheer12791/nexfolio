"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Button from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaRobot, FaGlobe, FaFileAlt } from "react-icons/fa";
import Features from "@/components/landing/features";
import AIDemo from "@/components/landing/ai-demo";
import Templates from "@/components/landing/templates";
import Pricing from "@/components/landing/pricing";
import FAQ from "@/components/landing/faq";
import CTA from "@/components/landing/cta";
export default function Home() {
  return (
    <main className="bg-slate-950 text-white overflow-hidden">
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center px-6">

        {/* Background Glow */}
        <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full top-10 left-10" />
        <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full bottom-10 right-10" />

        <div className="relative max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-400 font-semibold mb-3">
              🚀 AI Powered Portfolio Builder
            </p>

            <h1 className="text-6xl font-extrabold leading-tight">
              Build Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}Future{" "}
              </span>
              with AI
            </h1>

            <p className="mt-8 text-slate-400 text-lg leading-8">
              Create beautiful portfolios, ATS-ready resumes and personal
              websites in minutes using artificial intelligence.
            </p>

            <div className="flex gap-5 mt-10">
              <Button>Start Free</Button>

              <button className="border border-slate-700 rounded-xl px-6 py-3 hover:bg-slate-800 transition">
                Live Demo
              </button>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-8 shadow-2xl">

              <div className="flex justify-between">
                <h2 className="text-2xl font-bold">
                  AI Dashboard
                </h2>

                <span className="text-green-400">
                  ● Online
                </span>
              </div>

              <div className="mt-8 space-y-5">

                <div className="rounded-xl bg-slate-800 p-5 flex items-center gap-4">
                  <FaRobot className="text-blue-400 text-3xl" />

                  <div>
                    <h3 className="font-semibold">
                      AI Portfolio Builder
                    </h3>

                    <p className="text-slate-400 text-sm">
                      Portfolio generated successfully
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-800 p-5 flex items-center gap-4">
                  <FaFileAlt className="text-purple-400 text-3xl" />

                  <div>
                    <h3 className="font-semibold">
                      Resume Builder
                    </h3>

                    <p className="text-slate-400 text-sm">
                      ATS Score: 96%
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-800 p-5 flex items-center gap-4">
                  <FaGlobe className="text-cyan-400 text-3xl" />

                  <div>
                    <h3 className="font-semibold">
                      Portfolio Published
                    </h3>

                    <p className="text-slate-400 text-sm">
                      Your portfolio is live
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

      </section>
      <Features />
      <AIDemo />
      <Templates />
      <Pricing />
      <FAQ />

<CTA />
      <Footer />
    </main>
  );
}