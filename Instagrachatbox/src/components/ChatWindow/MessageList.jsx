// MessageList.jsx
// Scrollable container that renders all MessageBubble components for the active conversation.
// Automatically scrolls to the latest message when messages update.

import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import "./ChatWindow.css";

const MessageList = ({ messages, currentUserId, conversationUser }) => {
  const bottomRef = useRef(null);

  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="message-list">
      {/* Profile header shown at top of conversation */}
      <div className="conversation-profile-top">
        <img
          src={conversationUser.avatar}
          alt={conversationUser.name}
          className="profile-top-avatar"
          onError={(e) => { e.target.style.display = "none"; }}
        />
        <p className="profile-top-name">{conversationUser.name}</p>
        <p className="profile-top-username">@{conversationUser.username}</p>
      </div>

      {/* Render each message as a bubble */}
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          message={msg}
          isMine={msg.senderId === currentUserId}
          senderAvatar={conversationUser.avatar}
        />
      ))}

      {/* Invisible anchor to scroll to bottom */}
      <div ref={bottomRef} />
    </div>
  );
};

export default MessageList;
