import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

// Import the CSS
import "./css/ProfilePage.css";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="profile-page">
      <div className="profile-wrapper">
        <div className="profile-card">
          <div className="profile-header">
            <h1>Profile</h1>
            <p>Your profile information</p>
          </div>

          {/* Avatar Upload */}
          <div className="avatar-section">
            <div className="avatar-container">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="avatar-image"
              />
              <label htmlFor="avatar-upload" className={`avatar-upload-label ${isUpdatingProfile ? "disabled" : ""}`}>
                <Camera className="camera-icon" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="upload-text">
              {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
            </p>
          </div>

          {/* Info */}
          <div className="info-section">
            <div className="info-group">
              <div className="info-label">
                <User className="info-icon" />
                Full Name
              </div>
              <p className="info-box">{authUser?.fullName}</p>
            </div>

            <div className="info-group">
              <div className="info-label">
                <Mail className="info-icon" />
                Email Address
              </div>
              <p className="info-box">{authUser?.email}</p>
            </div>
          </div>

          {/* Account Info */}
          <div className="account-info">
            <h2>Account Information</h2>
            <div className="account-detail">
              <span>Member Since</span>
              <span>{authUser.createdAt?.split("T")[0]}</span>
            </div>
            <div className="account-detail">
              <span>Account Status</span>
              <span className="status-active">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
