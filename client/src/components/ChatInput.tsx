interface Props {
  send: () => void;
}

const ChatInput = ({ send }: Props) => {
  return (
    <form>
      <input type="text">Write here</input>
      <button onClick={send}></button>
    </form>
  );
};

export default ChatInput;
