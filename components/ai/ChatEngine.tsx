"use client";

import { useState } from "react";
import ProgressBar from "./ProgressBar";
import { portfolioQuestions } from "@/lib/portfolioQuestions";

export default function ChatEngine() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");

  function nextQuestion() {
    if (currentQuestion < portfolioQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer("");
    }
  }

  return (
    <div className="flex flex-col h-full">

      <ProgressBar
        current={currentQuestion + 1}
        total={portfolioQuestions.length}
      />

      <div className="flex-1">

        <div className="rounded-2xl bg-slate-900 p-6 text-white">
          🤖 {portfolioQuestions[currentQuestion].question}
        </div>

      </div>

      <div className="mt-6 flex gap-4">

        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer..."
          className="flex-1 rounded-xl bg-slate-900 border border-slate-700 px-5 py-4 text-white outline-none"
        />

        <button
          onClick={nextQuestion}
          className="rounded-xl bg-blue-600 px-8 hover:bg-blue-700"
        >
          Next
        </button>

      </div>

    </div>
  );
}