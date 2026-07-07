type Props = {
  params: {
    username: string;
  };
};

export default function PublicPortfolio({ params }: Props) {
  return (
    <main className="min-h-screen bg-white text-black p-10">

      <h1 className="text-5xl font-bold">
        {params.username}
      </h1>

      <p className="mt-4 text-xl">
        Welcome to my Nexfolio Portfolio
      </p>

    </main>
  );
}