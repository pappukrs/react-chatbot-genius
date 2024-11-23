import { useState } from "react";

const UserInput = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex">
      <input
        type="text"
        className="border rounded-l px-2 py-1 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your answer..."
      />
      <button type="submit" className="bg-blue-500 text-white rounded-r px-4 py-1">Send</button>
    </form>
  );
};

export default UserInput;
