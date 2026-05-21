// App.jsx
// Root component: manages which conversation is active and
// composes the two-panel Instagram Direct layout (Sidebar + ChatWindow).
// On mobile (<768px) only one panel is shown at a time.

import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import EmptyState from "./components/EmptyState/EmptyState";
import { conversations } from "./data/mockData";
import "./App.css";

const App = () => {
  // Track which conversation is currently open (null = none selected)
  const [activeConversationId, setActiveConversationId] = useState(null);

  // Derive the full conversation object from the active ID
  const activeConversation = conversations.find(
    (c) => c.id === activeConversationId
  ) || null;

  const handleSelectConversation = (id) => {
    setActiveConversationId(id);
  };

  // Back button on mobile returns to the sidebar
  const handleBack = () => {
    setActiveConversationId(null);
  };

  return (
    <div className="app">
      {/* Left panel — conversation list */}
      <div className={`app__sidebar ${activeConversationId ? "app__sidebar--hidden-mobile" : ""}`}>
        <Sidebar
          conversations={conversations}
          activeId={activeConversationId}
          onSelect={handleSelectConversation}
        />
      </div>

      {/* Right panel — active chat or empty state */}
      <div className={`app__chat ${!activeConversationId ? "app__chat--hidden-mobile" : ""}`}>
        {activeConversation ? (
          <ChatWindow
            conversation={activeConversation}
            onBack={handleBack}
          />
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

export default App;
