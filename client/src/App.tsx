import React, { useEffect, useState } from "react";
import ChatWindow from "./components/ChatWindow";
import Header from "./components/Header";
import ChatInput from "./components/ChatInput";
import "./App.css";
import { connect, sendMsg } from "./api";

/* function debounce<Params extends any[]>(
  fn: (...args: Params) => any,
  duration: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, duration);
  };
} */

function App() {
  const [chat, setChat] = useState<{ data: string }[]>([]);

  useEffect(() => {
    connect((msg: { data: string }) => {
      console.log("New Message");
      console.log(msg);
      setChat((chat) => [...chat, msg]);
    });
  });

  /* function send() {
    console.log("hello");
    sendMsg("hello");
  } */

  /* let debouncedSend = debounce(() => {
    send();
  }, 0); */

  return (
    <div className="App">
      <Header />
      <ChatWindow chat={chat} />
      <ChatInput sendMsg={sendMsg} />
    </div>
  );
}

export default App;
