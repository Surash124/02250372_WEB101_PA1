// Mock data source for Instagram Chat UI
// This provides conversation list and message history for reusable components

export const currentUser = {
  id: "me",
  name: "You",
  avatar:  "/surash.jpeg",
  username: "surash.s",
};

export const conversations = [
  {
    id: "1",
    user: {
      id: "u1",
      name: "Bidhas Magar",
      username: "bidhas.m",
      avatar:  "/bidhas.jpeg", 
      isOnline: true,
    },
    lastMessage: "Are you coming to the fest tomorrow? 🎉",
    lastMessageTime: "2m",
    unreadCount: 2,
    isRead: false,
  },
  {
    id: "2",
    user: {
      id: "u2",
      name: "Sanskar Rai",
      username: "sanskar.r",
      avatar:  "/sanskar.jpeg",
      isOnline: true,
    },
    lastMessage: "Sent a photo",
    lastMessageTime: "15m",
    unreadCount: 0,
    isRead: true,
  },
  {
    id: "3",
    user: {
      id: "u3",
      name: "Yosel Bdr",
      username: "yosel.b",
      avatar:  "/yosel.jpeg",
      isOnline: false,
    },
    lastMessage: "okay sure, talk later 👍",
    lastMessageTime: "1h",
    unreadCount: 0,
    isRead: true,
  },
  {
    id: "4",
    user: {
      id: "u4",
      name: "Dumber Limbu",
      username: "dumber.l",
      avatar:  "/sunjuck.jpeg",
      isOnline: false,
    },
    lastMessage: "You: Did you check the assignment?",
    lastMessageTime: "3h",
    unreadCount: 0,
    isRead: true,
  },
  {
    id: "5",
    user: {
      id: "u5",
      name: "Asis Tamang",
      username: "asis.t",
      avatar:  "/asis.jpeg",
      isOnline: true,
    },
    lastMessage: "haha yes exactly 😂",
    lastMessageTime: "1d",
    unreadCount: 0,
    isRead: true,
  },
  {
    id: "6",
    user: {
      id: "u6",
      name: "Ashis Subba",
      username: "ashis.s",
      avatar:  "/ashis.jpeg",
      isOnline: false,
    },
    lastMessage: "Thanks bro!",
    lastMessageTime: "2d",
    unreadCount: 0,
    isRead: true,
  },
];

export const messagesByConversation = {
  "1": [
    { id: "m1", senderId: "u1", text: "Hey! How's it going?", time: "10:20 AM", type: "text" },
    { id: "m2", senderId: "me", text: "Hey Bidhas! All good, just studying 📚", time: "10:21 AM", type: "text" },
    { id: "m3", senderId: "u1", text: "Nice nice. You done with the WEB101 assignment?", time: "10:22 AM", type: "text" },
    { id: "m4", senderId: "me", text: "Almost! Working on the React components now", time: "10:23 AM", type: "text" },
    { id: "m5", senderId: "u1", text: "Oh nice! Which page are you recreating?", time: "10:24 AM", type: "text" },
    { id: "m6", senderId: "me", text: "Instagram DMs! Feels meta 😄", time: "10:25 AM", type: "text" },
    { id: "m7", senderId: "u1", text: "Haha that's clever 🔥", time: "10:25 AM", type: "text" },
    { id: "m8", senderId: "u1", text: "Are you coming to the fest tomorrow? 🎉", time: "10:30 AM", type: "text" },
  ],
  "2": [
    { id: "m1", senderId: "u2", text: "Bro check this out", time: "9:10 AM", type: "text" },
    { id: "m2", senderId: "u2", text: "Sent a photo", time: "9:11 AM", type: "text" },
  ],
  "3": [
    { id: "m1", senderId: "me", text: "Hey, are you free this evening?", time: "Yesterday", type: "text" },
    { id: "m2", senderId: "u3", text: "okay sure, talk later 👍", time: "Yesterday", type: "text" },
  ],
  "4": [
    { id: "m1", senderId: "me", text: "Did you check the assignment?", time: "3h ago", type: "text" },
  ],
  "5": [
    { id: "m1", senderId: "u5", text: "The lecture was so confusing today lol", time: "Yesterday", type: "text" },
    { id: "m2", senderId: "me", text: "I know right, I had no idea what was happening 😭", time: "Yesterday", type: "text" },
    { id: "m3", senderId: "u5", text: "haha yes exactly 😂", time: "Yesterday", type: "text" },
  ],
  "6": [
    { id: "m1", senderId: "me", text: "I shared the notes with you", time: "2d ago", type: "text" },
    { id: "m2", senderId: "u6", text: "Thanks bro!", time: "2d ago", type: "text" },
  ],
};
