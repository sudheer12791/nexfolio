"use client";

export default function PromptInput() {
  return (
    <div className="border-t border-slate-800 p-6">

      <div className="flex gap-4">

        <input
          className="flex-1 rounded-xl bg-slate-900 border border-slate-700 px-5 py-4 text-white outline-none"
          placeholder="Ask Nexfolio AI anything..."
        />

        <button className="rounded-xl bg-blue-600 px-8 hover:bg-blue-700 transition">
          Send
        </button>

      </div>

    </div>
  );
}