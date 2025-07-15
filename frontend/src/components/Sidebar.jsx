import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";
import "./css/Sidebar.css";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-header-top">
          <Users size={20} />
          <span className="sidebar-title">Contacts</span>
        </div>

        <div className="sidebar-filter">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
            />
            Show online only
          </label>
        </div>
      </div>

      <div className="user-list">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`user-item ${
              selectedUser?._id === user._id ? "user-item-selected" : ""
            }`}
          >
            <div className="user-avatar-wrapper">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="user-avatar"
              />
              {onlineUsers.includes(user._id) && <span className="online-dot" />}
            </div>

            <div className="user-info">
              <div className="user-name">{user.fullName}</div>
              <div className="user-status">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="no-users">No online users</div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
