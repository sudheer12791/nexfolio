"use client";

import {
  LayoutDashboard,
  User,
  FileText,
  Sparkles,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Portfolio",
    icon: User,
  },
  {
    title: "Resume",
    icon: FileText,
  },
  {
    title: "AI Assistant",
    icon: Sparkles,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-950 border-r border-slate-800 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-blue-500 mb-10">
        Nexfolio
      </h1>

      <nav className="space-y-3">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="w-full flex items-center gap-4 rounded-xl p-4 hover:bg-slate-900 transition text-slate-300"
            >
              <Icon size={22} />

              {item.title}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}