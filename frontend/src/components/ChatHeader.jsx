import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

import "./css/ChatHeader.css";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="chat-header">
      <div className="chat-user-info">
        <div className="chat-user-avatar">
          <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
        </div>

        <div className="chat-user-details">
          <h3>{selectedUser.fullName}</h3>
          <p>{onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}</p>
        </div>
      </div>

      <button className="chat-close-button" onClick={() => setSelectedUser(null)}>
        <X />
      </button>
    </div>
  );
};

export default ChatHeader;
