import React, { useState } from 'react';
import './App.css';

function App() {
  const [outboundMessage, setOutboundMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    const updatedMessageList = [...messages, outboundMessage];
    setOutboundMessage("");
    setMessages(updatedMessageList);
  }

  return (
    <div className="App">
      <div id="conversation-window">{messages}</div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <textarea
          name="outboundMessage"
          onChange={(event) => setOutboundMessage(event.target.value)}
          value={outboundMessage ? outboundMessage : ""}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
}

export default App;
