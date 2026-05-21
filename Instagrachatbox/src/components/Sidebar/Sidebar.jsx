// Sidebar.jsx
// Left panel of the Instagram chat UI.
// Contains the username header, search bar, and scrollable conversation list.
// Props: conversations (array), activeId (string), onSelect (function)

import React, { useState } from "react";
import ConversationItem from "./ConversationItem";
import "./Sidebar.css";

const Sidebar = ({ conversations, activeId, onSelect }) => {
  // Local state for search input filtering
  const [searchQuery, setSearchQuery] = useState("");

  // Filter conversations by name or username based on search query
  const filtered = conversations.filter(
    (c) =>
      c.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <span className="sidebar-username">Surash subba</span>
        <button className="icon-btn" title="New message">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
      </div>

      {/* Search bar */}
      <div className="search-wrapper">
        <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Section label */}
      <div className="section-label">Messages</div>

      {/* Conversation list */}
      <div className="conversation-list">
        {filtered.length > 0 ? (
          filtered.map((conv) => (
            <ConversationItem
              key={conv.id}
              conversation={conv}
              isActive={conv.id === activeId}
              onClick={onSelect}
            />
          ))
        ) : (
          <div className="no-results">No conversations found</div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
