export default function AuthHero() {
  return (
    <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 text-white p-12">
      <h1 className="text-5xl font-extrabold">
        Welcome to Nexfolio
      </h1>

      <p className="mt-6 text-lg text-white/90">
        Build stunning AI-powered portfolios and resumes in minutes.
      </p>

      <div className="mt-10 space-y-4">
        <div>🚀 AI Portfolio Builder</div>
        <div>📄 ATS Resume Generator</div>
        <div>🌐 One-Click Portfolio Publishing</div>
        <div>📊 Portfolio Analytics</div>
      </div>
    </div>
  );
}