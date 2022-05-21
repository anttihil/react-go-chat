import React from "react";
import "./ChatWindow.css";
import Message from "./Message";

interface Props {
  chat: { data: string }[];
}

const ChatWindow = ({ chat }: Props) => {
  return (
    <ul className="ChatWindow">
      {chat.map((msg) => (
        <Message data={msg.data} />
      ))}
    </ul>
  );
};

export default ChatWindow;
