// ChatHeader.jsx
// Displays the active conversation user's avatar, name, online status,
// and action icons (audio call, video call, info) at the top of ChatWindow.

import React from "react";
import "./ChatWindow.css";

const ChatHeader = ({ user, onBack }) => {
  return (
    <div className="chat-header">
      <div className="chat-header-user">
        {/* Back button — only visible on mobile */}
        <button className="back-btn" onClick={onBack} title="Back">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="header-avatar-wrapper">
          <img
            src={user.avatar}
            alt={user.name}
            className="header-avatar"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="header-avatar-fallback" style={{ display: "none" }}>
            {user.name.charAt(0)}
          </div>
          {user.isOnline && <span className="header-online-dot" />}
        </div>

        <div className="header-user-text">
          <span className="header-name">{user.name}</span>
          <span className="header-status">{user.isOnline ? "Active now" : "Offline"}</span>
        </div>
      </div>

      {/* Action icons */}
      <div className="chat-header-actions">
        <button className="header-icon-btn" title="Audio call">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
        <button className="header-icon-btn" title="Video call">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
          </svg>
        </button>
        <button className="header-icon-btn" title="Info">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20A10 10 0 0112 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
