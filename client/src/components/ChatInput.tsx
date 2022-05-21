import { useState } from "react";
import "./ChatInput.css";

interface Props {
  sendMsg: (msg: any) => void;
}

const ChatInput = ({ sendMsg }: Props) => {
  const [input, setInput] = useState("");

  return (
    <div className="input">
      <form className="input__form">
        <input
          className="input__text"
          type="text"
          value={input}
          onChange={(event) => setInput(event?.target.value)}
        />
        <button
          className="input__button"
          onClick={(e) => {
            e.preventDefault();
            sendMsg(input);
            setInput("");
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
