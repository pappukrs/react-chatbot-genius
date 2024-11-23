import { useState } from "react";
import ChatWindow from "./ChatWindow";
import ChatButton from "./ChatButton";

const Chatbot = ({ botName = "Chatbot", position = "bottom-right", chatFlow, theme = {} }) => {
  const [showChatWindow, setShowChatWindow] = useState(false);

  const toggleChatWindow = () => {
    setShowChatWindow(!showChatWindow);
  };

  return (
    <div className={`fixed ${position} z-50`}>
      <ChatButton botName={botName} onClick={toggleChatWindow} theme={theme} />
      {showChatWindow && <ChatWindow botName={botName} chatFlow={chatFlow} theme={theme} />}
    </div>
  );
};

export default Chatbot;
