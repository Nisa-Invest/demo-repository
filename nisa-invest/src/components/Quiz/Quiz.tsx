import { useState } from "react";

interface Question {
  id: number;
  text: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "What is your primary financial goal?",
    options: [
      "Saving for retirement",
      "Buying a home",
      "Paying off debt",
      "Building an emergency fund",
    ],
  },
  {
    id: 2,
    text: "How would you describe your risk tolerance when it comes to investments?",
    options: ["Very low", "Low", "Moderate", "High", "Very high"],
  },
  {
    id: 3,
    text: "What percentage of your monthly income do you currently save or invest?",
    options: ["0-5%", "6-10%", "11-20%", "More than 20%"],
  },
  {
    id: 4,
    text: "Do you have an emergency fund that could cover 3-6 months of expenses?",
    options: ["Yes", "No", "I'm working on it"],
  },
  {
    id: 5,
    text: "When do you plan to retire?",
    options: [
      "In the next 10 years",
      "In 11-20 years",
      "In 21-30 years",
      "More than 30 years from now",
    ],
  },
  {
    id: 6,
    text: "What is your current debt situation?",
    options: [
      "No debt",
      "Only mortgage debt",
      "Some credit card or personal loan debt",
      "Significant debt",
    ],
  },
  {
    id: 7,
    text: "Are you currently contributing to a retirement account (e.g., 401(k), IRA)?",
    options: [
      "Yes, regularly",
      "Yes, but irregularly",
      "No, but I plan to start",
      "No, and I don't plan to",
    ],
  },
  {
    id: 8,
    text: "How would you rate your overall financial knowledge?",
    options: ["Beginner", "Intermediate", "Advanced", "Expert"],
  },
];

const styles = {
  container: {
    maxWidth: "600px",
    margin: "30px auto",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#9EA8ED",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#2c3e50",
    textAlign: "center" as const,
  },
  subHeader: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#34495e",
    textAlign: "center" as const,
  },
  question: {
    fontSize: "20px",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },
  option: {
    padding: "12px 20px",
    backgroundColor: "#ffffff",
    border: "1px solid #bdc3c7",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  optionSelected: {
    backgroundColor: "#FFDC73",
    color: "#ffffff",
    border: "1px solid #3498db",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#595959",
    color: "white",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#FFDC73",
  },
  disabledButton: {
    backgroundColor: "#bdc3c7",
    cursor: "not-allowed",
  },
  completionMessage: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "20px",
    color: "#34495e",
  },
};

export function FinancialPlanningQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div style={styles.container}>
        <h2 style={styles.header}>Quiz Completed</h2>
        <p style={styles.completionMessage}>
          Thank you for completing the financial planning quiz! Your answers
          have been recorded. A financial planner will review your responses and
          contact you soon.
        </p>
        <button
          onClick={handleRestart}
          style={{
            ...styles.button,
            ...(hoveredButton === "restart" ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setHoveredButton("restart")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div  style={styles.container}>
      <h2 style={styles.header}>Financial Planning Quiz</h2>
      <p style={styles.subHeader}>
        Question {currentQuestion + 1} of {questions.length}
      </p>
      <div style={styles.question}>{question.text}</div>
      <div style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <div
            key={index}
            style={{
              ...styles.option,
              ...(answers[currentQuestion] === option
                ? styles.optionSelected
                : {}),
            }}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div style={styles.buttonContainer}>
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          style={{
            ...styles.button,
            ...(currentQuestion === 0 ? styles.disabledButton : {}),
            ...(hoveredButton === "previous" && currentQuestion !== 0
              ? styles.buttonHover
              : {}),
          }}
          onMouseEnter={() => setHoveredButton("previous")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          style={{
            ...styles.button,
            ...(hoveredButton === "next" ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setHoveredButton("next")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
