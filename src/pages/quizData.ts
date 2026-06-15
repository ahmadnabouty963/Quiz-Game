export type Question = {
  id: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
};
export const quizQuestions: Record<string, Question[]> = {
  it: [
    {
      id: 1,
      questionText: "Wofür steht 'HTML'?",
      options: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "Hyperlink and Text Management",
      ],
      correctAnswer: "HyperText Markup Language",
    },
    {
      id: 2,
      questionText:
        "Welche Sprache wird hauptsächlich für das Styling von Webseiten genutzt?",
      options: ["Java", "CSS", "Python"],
      correctAnswer: "CSS",
    },
  ],
  general: [
    {
      id: 1,
      questionText: "Was ist die Hauptstadt von Frankreich?",
      options: ["Berlin", "London", "Paris"],
      correctAnswer: "Paris",
    },
    {
      id: 2,
      questionText: "Was ist die Hauptstadt von Deutschland?",
      options: ["Berlin", "London", "Paris"],
      correctAnswer: "Berlin",
    },
    {
      id: 2,
      questionText: "Was ist die Haupstadt von Syria?",
      options: ["Amman", "Aleppo", "Damaskus"],
      correctAnswer: "Damascus",
    },
  ],
};
