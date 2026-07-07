"use client";

import Message from "./Message";

const messages = [
  {
    sender: "ai",
    text: "Hello 👋 I'm Nexfolio AI.",
  },
  {
    sender: "ai",
    text: "I'll help you build an amazing portfolio.",
  },
  {
    sender: "user",
    text: "Great! Let's start.",
  },
];

export default function ChatWindow() {
  return (
    <div className="flex-1 overflow-y-auto p-8">

      {messages.map((message, index) => (
        <Message
          key={index}
          sender={message.sender as "user" | "ai"}
          text={message.text}
        />
      ))}

    </div>
  );
}