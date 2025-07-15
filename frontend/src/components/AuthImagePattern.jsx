import "./css/AuthImagePattern.css";
import { MessageSquare, Users, Shield, Smile, Heart, Globe } from "lucide-react";

const icons = [MessageSquare, Users, Shield, Smile, Heart, Globe];

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="auth-pattern-container">
      <div className="auth-pattern-content">
        <div className="auth-icon-grid">
          {icons.map((Icon, index) => (
            <div key={index} className="auth-icon-box">
              <Icon className="auth-icon" />
            </div>
          ))}
        </div>
        <h2 className="auth-title">{title}</h2>
        <p className="auth-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
