import { ReactNode } from "react";
import AuthHero from "./AuthHero";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-slate-950">
      <AuthHero />

      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          {children}
        </div>
      </div>
    </main>
  );
}