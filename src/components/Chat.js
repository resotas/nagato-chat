import React, { useState } from "react";
import { fetchNagatoResponse } from "../api";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
	if (!input.trim()) return;

	const newMessage = { text: input, sender: "user" };
	const response = await fetchNagatoResponse(input);

	const botMessage = { text: response, sender: "nagato" };
	setMessages([...messages, newMessage, botMessage]);
	setInput("");
  };

  return (
	<div className="chat-container">
	  <div className="chat-box">
		{messages.map((msg, index) => (
		  <div key={index} className={`message ${msg.sender}`}>
			{msg.text}
		  </div>
		))}
	  </div>
	  <div className="input-container">
		<input
		  value={input}
		  onChange={(e) => setInput(e.target.value)}
		  placeholder="長門有希に話しかける..."
		/>
		<button onClick={sendMessage}>送信</button>
	  </div>
	</div>
  );
};

export default Chat;