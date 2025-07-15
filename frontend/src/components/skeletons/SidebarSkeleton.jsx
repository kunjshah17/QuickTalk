import { Users } from "lucide-react";
import "./SidebarSkeleton.css";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Users className="icon" />
        <span className="sidebar-title">Contacts</span>
      </div>

      <div className="sidebar-body">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="contact-skeleton">
            <div className="avatar-skeleton" />
            <div className="info-skeleton">
              <div className="line name-line" />
              <div className="line status-line" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
