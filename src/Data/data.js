const data = [
  {
    question: "Which perk increases max health?",
    finalAnswer: { answerText: "Jugger-Nog" },
    answers: [
      { answerText: "Jugger-Nog", correctAnswer: true },
      { answerText: "Stamin-Up", correctAnswer: false },
      { answerText: "Quick Revive", correctAnswer: false },
      { answerText: "Speed Cola", correctAnswer: false },
    ],
  },
  {
    question: "Exfil becomes available starting after round __",
    finalAnswer: { answerText: "10" },
    answers: [
      { answerText: "11", correctAnswer: false },
      { answerText: "5", correctAnswer: false },
      { answerText: "10", correctAnswer: true },
      { answerText: "15", correctAnswer: false },
    ],
  },
  {
    question: "Tier 1 pack-a-punch costs __ points",
    finalAnswer: { answerText: "5,000" },
    answers: [
      { answerText: "2,500", correctAnswer: false },
      { answerText: "5,000", correctAnswer: true },
      { answerText: "6,000", correctAnswer: false },
      { answerText: "7,500", correctAnswer: false },
    ],
  },
  {
    question: "What perk increases reload speed?",
    finalAnswer: { answerText: "Speed-Cola" },
    answers: [
      { answerText: "Stamin-Up", correctAnswer: false },
      { answerText: "Speed-Cola", correctAnswer: true },
      { answerText: "Mule Kick", correctAnswer: false },
      { answerText: "Quick Revive", correctAnswer: false },
    ],
  },
  {
    question: "Tier 3 pack-a-punch costs __ points",
    finalAnswer: { answerText: "30,000" },
    answers: [
      { answerText: "25,000", correctAnswer: false },
      { answerText: "15,000", correctAnswer: false },
      { answerText: "20,000", correctAnswer: false },
      { answerText: "30,000", correctAnswer: true },
    ],
  },
  {
    question: "Pack-a-punch ammo mods cost __ points",
    finalAnswer: { answerText: "2,500" },
    answers: [
      { answerText: "2,500", correctAnswer: true },
      { answerText: "2,000", correctAnswer: false },
      { answerText: "3,500", correctAnswer: false },
      { answerText: "4,000", correctAnswer: false },
    ],
  },
  {
    question: "The first door costs __ points",
    finalAnswer: { answerText: "500" },
    answers: [
      { answerText: "250", correctAnswer: false },
      { answerText: "500", correctAnswer: true },
      { answerText: "750", correctAnswer: false },
      { answerText: "1,000", correctAnswer: false },
    ],
  },
  {
    question: "After round 10 Exfil is available every __ rounds ",
    finalAnswer: { answerText: "5" },
    answers: [
      { answerText: "3", correctAnswer: false },
      { answerText: "5", correctAnswer: true },
      { answerText: "10", correctAnswer: false },
      { answerText: "15", correctAnswer: false },
    ],
  },
];

export default data;
