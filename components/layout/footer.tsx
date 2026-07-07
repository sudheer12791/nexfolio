export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center">

          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              Nexfolio
            </h2>

            <p className="text-slate-400 mt-2">
              AI Powered Portfolio Builder
            </p>
          </div>

          <div className="flex gap-8 mt-8 md:mt-0 text-slate-400">
            <a href="#">Features</a>
            <a href="#">Templates</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-slate-500">
          © {new Date().getFullYear()} Nexfolio. All rights reserved.
        </div>

      </div>
    </footer>
  );
}