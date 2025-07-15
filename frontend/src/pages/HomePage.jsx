import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";
import "./css/HomePage.css";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="home-page">
      <div className="home-wrapper">
        <div className="home-container">
          <div className="chat-section">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
