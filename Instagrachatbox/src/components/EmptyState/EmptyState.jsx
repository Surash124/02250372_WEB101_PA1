// EmptyState.jsx
// Displayed in the main chat area when no conversation is selected.
// Mirrors Instagram's actual empty state with icon + prompt text.

import React from "react";
import "./EmptyState.css";

const EmptyState = () => {
  return (
    <div className="empty-state">
      {/* Instagram Direct paper-plane icon recreation */}
      <div className="empty-state__icon-wrapper">
        <svg className="empty-state__icon" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48 18L18 42l10 4 4 18 8-10 16 8 10-36z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"/>
        </svg>
      </div>

      <h2 className="empty-state__title">Your messages</h2>
      <p className="empty-state__subtitle">
        Send private photos and messages to a friend or group.
      </p>
      <button className="empty-state__btn">Send message</button>
    </div>
  );
};

export default EmptyState;
