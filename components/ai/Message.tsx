type MessageProps = {
  sender: "user" | "ai";
  text: string;
};

export default function Message({
  sender,
  text,
}: MessageProps) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-4`}
    >
      <div
        className={`max-w-xl rounded-2xl px-5 py-3 ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-slate-800 text-slate-200"
        }`}
      >
        {text}
      </div>
    </div>
  );
}