import Button from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-blue-500">
          NEXFOLIO
        </h1>

        <div className="flex gap-6 text-slate-300">
          <a href="#">Features</a>
          <a href="#">Templates</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
        </div>

        <Button>Get Started</Button>
      </div>
    </nav>
  );
}