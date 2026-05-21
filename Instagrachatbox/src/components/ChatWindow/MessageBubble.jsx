// MessageBubble.jsx
// Reusable component that renders a single message bubble.
// Aligns right for sent messages (isMine=true), left for received messages.

import React from "react";
import "./ChatWindow.css";

const MessageBubble = ({ message, isMine, senderAvatar }) => {
  return (
    <div className={`message-row ${isMine ? "mine" : "theirs"}`}>
      {/* Show avatar for received messages */}
      {!isMine && (
        <img
          src={senderAvatar}
          alt="avatar"
          className="bubble-avatar"
          onError={(e) => { e.target.style.visibility = "hidden"; }}
        />
      )}

      <div className="bubble-group">
        <div className={`bubble ${isMine ? "bubble-mine" : "bubble-theirs"}`}>
          <span className="bubble-text">{message.text}</span>
        </div>
        <span className={`bubble-time ${isMine ? "time-right" : "time-left"}`}>
          {message.time}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
