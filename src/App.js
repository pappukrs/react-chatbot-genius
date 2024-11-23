import React from "react";
import Chatbot from "./components/Chatbot";

function App() {
  const chatFlow = [
    {
      question: "Enter your Name:",
      type: "text",
    },
    {
      question: (name) => `Hello ${name}, nice to meet you! What would you like to do today?`,
      type: "selection",
      options: ["Check Balance", "Get Help", "Talk to Support"],
    },
    {
      question: "Thank you for using our chatbot. Goodbye!",
      type: "text",
    },
  ];

  return (
    <div className="App">
      <Chatbot
        botName="HelperBot"
        position="bottom-right"
        chatFlow={chatFlow}
        theme={{ button: "bg-green-500", chatWindow: "bg-gray-100" }}
      />
    </div>
  );
}

export default App;
