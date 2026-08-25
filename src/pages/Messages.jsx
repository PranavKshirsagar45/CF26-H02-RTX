import {
  Search,
  Send,
  Paperclip,
  MoreVertical,
  Phone,
  Video,
  CheckCheck,
  MessageCircle,
} from "lucide-react";

import { useState } from "react";

const conversations = [
  {
    id: 1,
    name: "Dr. Priya Mehta",
    role: "Cardiologist",
    initials: "PM",
    lastMessage: "Please continue your medication.",
    time: "10:42 AM",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Dr. Arjun Patel",
    role: "General Physician",
    initials: "AP",
    lastMessage: "Your reports look good.",
    time: "Yesterday",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "Hospital Support",
    role: "Patient Support",
    initials: "HS",
    lastMessage: "How can we help you?",
    time: "20 May",
    unread: 0,
    online: true,
  },
];

const initialMessages = [
  {
    id: 1,
    sender: "doctor",
    text: "Hello Rahul, how are you feeling today?",
    time: "10:35 AM",
  },
  {
    id: 2,
    sender: "patient",
    text: "I am feeling better today, doctor.",
    time: "10:37 AM",
  },
  {
    id: 3,
    sender: "doctor",
    text: "That's good to hear. Please continue your medication regularly.",
    time: "10:40 AM",
  },
  {
    id: 4,
    sender: "patient",
    text: "Sure doctor. I will follow the prescription.",
    time: "10:42 AM",
  },
];

function Messages() {
  const [selectedConversation, setSelectedConversation] =
    useState(conversations[0]);

  const [messages, setMessages] =
    useState(initialMessages);

  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    const newMessage = {
      id: messages.length + 1,
      sender: "patient",
      text: trimmedMessage,
      time: "Just now",
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      newMessage,
    ]);

    setMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="simple-page messages-page">

      {/* ================= HEADER ================= */}

      <div className="page-header messages-header">

        <div>
          <h1>Messages</h1>

          <p>
            Securely communicate with your doctors and
            hospital support team.
          </p>
        </div>

      </div>

      {/* ================= MESSAGES CONTAINER ================= */}

      <div className="messages-container">

        {/* ================= LEFT SIDEBAR ================= */}

        <div className="conversation-sidebar">

          <div className="conversation-header">

            <div>
              <h2>Conversations</h2>

              <span>
                {conversations.length} chats
              </span>
            </div>

            <MessageCircle size={20} />

          </div>

          {/* Search */}

          <div className="conversation-search">

            <Search size={16} />

            <input
              type="text"
              placeholder="Search messages..."
            />

          </div>

          {/* Conversations */}

          <div className="conversation-list">

            {conversations.map((conversation) => (

              <button
                type="button"
                key={conversation.id}
                className={`conversation-item ${
                  selectedConversation.id === conversation.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setSelectedConversation(conversation)
                }
              >

                <div className="conversation-avatar">

                  {conversation.initials}

                  {conversation.online && (
                    <span className="online-dot" />
                  )}

                </div>

                <div className="conversation-info">

                  <div className="conversation-top">

                    <strong>
                      {conversation.name}
                    </strong>

                    <span>
                      {conversation.time}
                    </span>

                  </div>

                  <div className="conversation-bottom">

                    <p>
                      {conversation.lastMessage}
                    </p>

                    {conversation.unread > 0 && (
                      <b>
                        {conversation.unread}
                      </b>
                    )}

                  </div>

                </div>

              </button>

            ))}

          </div>

        </div>

        {/* ================= CHAT ================= */}

        <div className="chat-area">

          {/* Chat Header */}

          <div className="chat-header">

            <div className="chat-person">

              <div className="chat-avatar">

                {selectedConversation.initials}

                {selectedConversation.online && (
                  <span className="online-dot" />
                )}

              </div>

              <div>

                <h3>
                  {selectedConversation.name}
                </h3>

                <span>
                  {selectedConversation.online
                    ? "Online"
                    : selectedConversation.role}
                </span>

              </div>

            </div>

            <div className="chat-actions">

              <button
                type="button"
                aria-label="Call"
              >
                <Phone size={18} />
              </button>

              <button
                type="button"
                aria-label="Video call"
              >
                <Video size={19} />
              </button>

              <button
                type="button"
                aria-label="More options"
              >
                <MoreVertical size={19} />
              </button>

            </div>

          </div>

          {/* Messages */}

          <div className="chat-messages">

            <div className="chat-date">
              Today
            </div>

            {messages.map((item) => (

              <div
                key={item.id}
                className={`message-row ${
                  item.sender === "patient"
                    ? "sent"
                    : "received"
                }`}
              >

                <div className="message-bubble">

                  <p>
                    {item.text}
                  </p>

                  <div className="message-time">

                    <span>
                      {item.time}
                    </span>

                    {item.sender === "patient" && (
                      <CheckCheck size={14} />
                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Message Input */}

          <div className="chat-input-area">

            <button
              type="button"
              className="attachment-button"
              aria-label="Attach file"
            >
              <Paperclip size={19} />
            </button>

            <input
              type="text"
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
            />

            <button
              type="button"
              className="send-button"
              onClick={sendMessage}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Messages;