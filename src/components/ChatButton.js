const ChatButton = ({ botName, onClick, theme }) => {
    return (
      <button
        onClick={onClick}
        className={`bg-blue-500 text-white rounded-full p-3 ${theme?.button || ""}`}
      >
        {botName}
      </button>
    );
  };
  
  export default ChatButton;
  