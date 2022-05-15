import React from "react";
import "./ChatWindow.css";

interface Props {
  chat: { data: string }[];
}

const ChatWindow = ({ chat }: Props) => {
  return (
    <div className="chat">
      <ul className="chat__list">
        {chat.map((msg) => (
          <li className="chat__msg">{msg.data}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatWindow;
