# 02190108_WEB101_PA1 – Instagram DM Clone

## Overview
A React-based recreation of the Instagram Direct Messages (DM) interface, built with Vite for WEB101 Practical Assignment 1.

## Functionality
- Browse a list of conversations in the left sidebar
- Search/filter conversations by name or username
- Click a conversation to open the chat in the right panel
- View message history with sent (blue, right) and received (grey, left) bubbles
- Send new messages using the input bar (Enter or Send button)
- Responsive layout: sidebar collapses to icons on tablet; single-panel view on mobile with a back button

## Component Architecture

```
App
├── Sidebar
│   ├── ConversationItem (×6, reusable)
│   └── [search filter logic]
├── ChatWindow
│   ├── ChatHeader
│   ├── MessageList
│   │   └── MessageBubble (×n, reusable)
│   └── MessageInput
└── EmptyState
```

## Tech Stack
- React 18
- Vite 5
- Plain CSS (no UI library)

## Data Source
All data lives in `src/data/mockData.js` — exported as `conversations`, `messagesByConversation`, and `currentUser`. Components receive data via props, keeping them reusable and decoupled from the data layer.

## Running Locally
```bash
npm install
npm run dev
```

## Tested On
- Desktop (Chrome, Firefox)
- Tablet (768px breakpoint)
- Mobile (480px breakpoint)
