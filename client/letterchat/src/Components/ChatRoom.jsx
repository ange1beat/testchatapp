import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useChat from "../useChat";
import logo from "./logo.png";

const ChatRoom = () => {
  const { roomId } = useParams();
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage !== '') {
        sendMessage(newMessage);
    }
    setNewMessage("");
  };

  return (
    <div className="bg-black h-[100vh] flex flex-col items-center gap-3 justify-center">
      <Link to="/" className="sm:w-[10%] w-[30%]">
        <img src={logo} alt="logo" />
      </Link>
      <div className="text-white">Room: {roomId}</div>

      <div className="flex flex-col bg-zinc-800 w-[90%] h-[50%] sm:w-[35%] sm:h-[50%] rounded gap-1 p-3 shadow-lg overflow-auto whitespace-normal">
        {messages.map((message, i) => (
          <div
            key={i}
            className={`${
              message.ownedByCurrentUser ? "text-white text-right p-3 bg-zinc-600 rounded whitespace-normal break-words" : "text-gray-500 p-3 bg-zinc-700 rounded whitespace-normal break-words"
            }`}
          >
            {message.body}
          </div>
        ))}
      </div>

      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="resize-none rounded text-center w-[90%] sm:w-[35%] bg-zinc-800 text-white/30"
        maxLength={100}
      />
      <button
        onClick={handleSendMessage}
        className="text-white w-[90%] sm:w-[35%] bg-gradient-to-r from-purple-400 via-sky-500 to-indigo-500 animate-bg pt-2 pb-2 pl-14 pr-14 rounded"
      >
        Send
      </button>

      <div className="flex flex-col text-white text-center mt-10">
            <span>Stella Verse.</span>
            <span>by ange1beat</span>
      </div>
    </div>
  );
};

export default ChatRoom;
