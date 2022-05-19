import { useState } from "react";
interface Props {
  sendMsg: (msg: any) => void;
}

const ChatInput = ({ sendMsg }: Props) => {
  const [input, setInput] = useState("");

  return (
    <form>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event?.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          sendMsg(input);
          setInput("");
        }}
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
