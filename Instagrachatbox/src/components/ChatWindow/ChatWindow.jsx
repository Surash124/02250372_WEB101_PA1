// ChatWindow.jsx
import { useState, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "../MessageInput/MessageInput";
import { messagesByConversation, currentUser } from "../../data/mockData";
import "./ChatWindow.css";

const ChatWindow = ({ conversation, onBack }) => {
  const { user } = conversation;

  const [messages, setMessages] = useState(
    messagesByConversation[conversation.id] || []
  );

  //  This is the fix — resets messages when you switch conversations
  useEffect(() => {
    setMessages(messagesByConversation[conversation.id] || []);
  }, [conversation.id]);

  const handleSend = (text) => {
    const newMsg = {
      id: `m${Date.now()}`,
      senderId: currentUser.id,
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      type: "text",
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  return (
    <div className="chat-window">
      <ChatHeader user={user} onBack={onBack} />
      <MessageList
        messages={messages}
        currentUserId={currentUser.id}
        conversationUser={user}
      />
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;