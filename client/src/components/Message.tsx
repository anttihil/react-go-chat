import React, { useMemo } from "react";
import "./Message.css";

interface Props {
  data: string;
}

const Message = ({ data }: Props) => {
  const parsed = useMemo(() => JSON.parse(data), [data]);
  return <li className="Message">{parsed.body}</li>;
};

export default Message;
