import { MessageSquare } from "lucide-react";
import "./css/NoChatSelected.css";

const NoChatSelected = () => {
  return (
    <div className="no-chat-wrapper">
      <div className="no-chat-container">
        {/* Icon */}
        <div className="icon-wrapper">
          <div className="icon-circle">
            <MessageSquare size={32} />
          </div>
        </div>

        {/* Text */}
        <h2 className="no-chat-heading">Welcome to QuickTalk!</h2>
        <p className="no-chat-subtext">
          Select a conversation from the sidebar to start a meaningful chat.
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
