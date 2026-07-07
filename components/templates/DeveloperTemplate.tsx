type Props = {
  data: any;
};

export default function DeveloperTemplate({
  data,
}: Props) {
  return (
    <div className="bg-white text-black rounded-2xl p-10">

      <h1 className="text-5xl font-bold">
        {data.name || "Your Name"}
      </h1>

      <p className="mt-3 text-xl">
        {data.headline || "Full Stack Developer"}
      </p>

      <div className="mt-8">

        <h2 className="text-2xl font-bold">
          About
        </h2>

        <p className="mt-3">
          {data.about || "AI generated About Me"}
        </p>

      </div>

    </div>
  );
}