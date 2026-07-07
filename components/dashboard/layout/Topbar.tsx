"use client";

import { Bell, Search } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-8 py-5">

      <div>
        <h2 className="text-3xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-slate-400">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl px-4 py-2">
          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-3 text-white"
          />
        </div>

        <button className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800">
          <Bell size={20} />
        </button>

        {/* Clerk's UserButton types may not include afterSignOutUrl in some versions; cast props to any to avoid TS error */}
        <UserButton {...({ afterSignOutUrl: "/" } as any)} />

      </div>

    </header>
  );
}