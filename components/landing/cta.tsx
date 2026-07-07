"use client";

import Button from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-28 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold text-white">
          Ready to Build Your Dream Portfolio?
        </h2>

        <p className="mt-6 text-xl text-white/90">
          Join thousands of students and professionals building stunning portfolios with AI.
        </p>

        <div className="mt-10">
          <Button className="bg-white text-slate-900 hover:bg-slate-200">
            Get Started for Free
          </Button>
        </div>

      </div>
    </section>
  );
}