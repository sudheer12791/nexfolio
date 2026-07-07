import PortfolioPreview from "@/components/preview/PortfolioPreview";

export default function PreviewPage() {

  const sampleData = {
    name: "M. Venkata Sudheer",
    headline: "Full Stack Developer | VLSI Engineer",
    about:
      "Passionate developer creating futuristic applications.",
  };

  return (
    <main className="min-h-screen bg-slate-950 p-10">

      <PortfolioPreview data={sampleData} />

    </main>
  );
}