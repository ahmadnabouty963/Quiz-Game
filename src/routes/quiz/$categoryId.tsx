import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { quizQuestions } from "../../pages/quizData";

type QuizSearch = {
  difficulty?: "easy" | "medium" | "hard";
  category?: string;
};

export const Route = createFileRoute("/quiz/$categoryId")({
  validateSearch: (search: Record<string, unknown>): QuizSearch => {
    return {
      difficulty: (search.difficulty as QuizSearch["difficulty"]) || "easy",
      category: (search.category as string) || undefined,
    };
  },
  component: QuizComponent,
});

function QuizComponent() {
  const { categoryId } = Route.useParams();
  const { difficulty } = Route.useSearch();

  const questions = quizQuestions[categoryId] || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="alert alert-error max-w-md mx-auto mt-10 shadow-lg">
        <div>
          <span>Kategorie "{categoryId}" wurde nicht gefunden!</span>
        </div>
        <Link to="/" className="btn btn-sm btn-ghost">
          Zurück
        </Link>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setIsFinished(true);
    }
  };

  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  if (isFinished) {
    return (
      <div className="card max-w-xl mx-auto bg-base-500 shadow-2xl border border-success/30 text-center mt-10 p-6">
        <div className="card-body items-center">
          <span className="text-6xl mb-4">🎉</span>
          <h2 className="card-title text-3xl font-bold text-success mb-2">
            Quiz beendet!
          </h2>

          <div className="stats shadow my-4 bg-base-600">
            <div className="stat">
              <div className="stat-title">Dein Ergebnis</div>
              <div className="stat-value text-primary">
                {score} / {questions.length}
              </div>
              <div className="stat-desc">Fragen richtig beantwortet</div>
            </div>
          </div>

          <div className="badge badge-outline badge-lg mb-6">
            Schwierigkeit: {difficulty}
          </div>

          <div className="card-actions">
            <Link to="/" className="btn btn-primary btn-wide">
              Anderes Quiz wählen
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card max-w-2xl mx-auto bg-base-500 shadow-xl border border-base-300 mt-6">
      <div className="card-body">
        <div className="flex justify-between items-center mb-2">
          <span className="badge badge-secondary badge-outline capitalize font-semibold">
            Mode: {difficulty}
          </span>
          <span className="text-sm font-medium opacity-70">
            Frage {currentIndex + 1} von {questions.length}
          </span>
        </div>

        <progress
          className="progress progress-primary w-full mb-6"
          value={progressPercent}
          max="100"
        ></progress>

        <h3 className="text-2xl font-bold mb-6 text-base-content text-center">
          {currentQuestion.questionText}
        </h3>

        <div className="grid grid-cols-1 gap-4 mt-2">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="btn btn-outline btn-primary hover:btn-active normal-case text-left justify-start pl-6 text-lg h-auto py-4 shadow-sm"
            >
              <span className="badge badge-sm badge-neutral mr-3">
                {index + 1}
              </span>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
