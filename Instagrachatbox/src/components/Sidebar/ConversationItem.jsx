// ConversationItem.jsx
// Reusable component that renders a single conversation preview in the sidebar.
// Receives conversation data as props and highlights when selected.

import React from "react";
import "./Sidebar.css";

const ConversationItem = ({ conversation, isActive, onClick }) => {
  const { user, lastMessage, lastMessageTime, unreadCount, isRead } = conversation;

  return (
    <div
      className={`conversation-item ${isActive ? "active" : ""}`}
      onClick={() => onClick(conversation.id)}
    >
      {/* Avatar with online indicator */}
      <div className="avatar-wrapper">
        <img
          src={user.avatar}
          alt={user.name}
          className="avatar"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        {/* Fallback initials avatar */}
        <div className="avatar-fallback" style={{ display: "none" }}>
          {user.name.charAt(0)}
        </div>
        {user.isOnline && <span className="online-dot" />}
      </div>

      {/* Conversation info */}
      <div className="conversation-info">
        <div className="conversation-top">
          <span className="conversation-name">{user.name}</span>
          <span className="conversation-time">{lastMessageTime}</span>
        </div>
        <div className="conversation-bottom">
          <span className={`conversation-last-msg ${!isRead ? "unread" : ""}`}>
            {lastMessage}
          </span>
          {/* Unread badge */}
          {unreadCount > 0 && (
            <span className="unread-badge">{unreadCount}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationItem;
