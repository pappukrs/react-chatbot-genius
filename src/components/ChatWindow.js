import { useState } from "react";
import UserInput from "./UserInput";

const ChatWindow = ({ botName, chatFlow, theme }) => {
  const [messages, setMessages] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleUserMessage = (message) => {
    // Store user input
    setUserAnswers([...userAnswers, message]);

    // Show bot response and next question
    const nextQuestion = chatFlow[currentQuestionIndex + 1];
    setMessages([
      ...messages,
      { sender: "user", text: message },
      { sender: "bot", text: nextQuestion.question },
    ]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleSelection = (answer) => {
    // Store the selected answer
    setUserAnswers([...userAnswers, answer]);

    // Show next question
    const nextQuestion = chatFlow[currentQuestionIndex + 1];
    setMessages([
      ...messages,
      { sender: "user", text: answer },
      { sender: "bot", text: nextQuestion.question },
    ]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  // Initialize the first question
  if (messages.length === 0 && chatFlow.length > 0) {
    setMessages([
      { sender: "bot", text: chatFlow[0].question },
    ]);
  }

  return (
    <div className={`bg-white p-4 rounded-lg shadow-lg ${theme?.chatWindow || "w-80"}`}>
      <div className="h-64 overflow-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === "bot" ? "text-blue-500" : "text-gray-700"}`}>
            <span>{msg.sender === "bot" ? "Bot" : "You"}: </span>{msg.text}
          </div>
        ))}
      </div>
      {chatFlow[currentQuestionIndex] && chatFlow[currentQuestionIndex].type === "text" && (
        <UserInput onSubmit={handleUserMessage} />
      )}
      {chatFlow[currentQuestionIndex] && chatFlow[currentQuestionIndex].type === "selection" && (
        <div className="mt-4">
          {chatFlow[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelection(option)}
              className="bg-blue-500 text-white rounded-full px-4 py-1 mb-2 mr-2"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
