import React, {useContext, useState} from "react";
import "./Settings.css";
import { Link } from "react-router-dom";
import homeIcon from '../../img/homeicon.png';
import {ThemeContext} from "../../App";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const {theme} = useContext(ThemeContext)

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className={`profile-settings settings-content ${theme}`}>
            <h2>Profile Settings</h2>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter your username" />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <input type="text" id="bio" placeholder="Enter your bio" />
            </div>
            <div className="form-group">
              <label htmlFor="profilePic">Profile Picture URL</label>
              <input type="text" id="profilePic" placeholder="Enter URL of profile picture" />
            </div>
            <button>Save Profile Settings</button>
          </div>
        );
      case "account":
        return (
          <div className={`account-settings settings-content ${theme}`}>
            <h2>Account Settings</h2>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <div className="form-group">
              <label htmlFor="language">Language</label>
              <select id="language">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
            <button>Save Account Settings</button>
          </div>
        );
      case "notifications":
        return (
          <div className={`notification-settings settings-content ${theme}`}>
            <h2>Notification Settings</h2>
            <div className="form-group checkbox-group">
              <label htmlFor="emailNotifications">Email Notifications</label>
              <input type="checkbox" id="emailNotifications" />
            </div>
            <div className="form-group checkbox-group">
              <label htmlFor="smsNotifications">SMS Notifications</label>
              <input type="checkbox" id="smsNotifications" />
            </div>
            <div className="form-group checkbox-group">
              <label htmlFor="pushNotifications">Push Notifications</label>
              <input type="checkbox" id="pushNotifications" />
            </div>
            <button>Save Notification Settings</button>
          </div>
        );
      case "privacy":
        return (
          <div className={`privacy-settings settings-content ${theme}`}>
            <h2>Privacy Settings</h2>
            <div className="form-group">
              <label htmlFor="profileVisibility">Profile Visibility</label>
              <select id="profileVisibility">
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
            <div className="form-group checkbox-group">
              <label htmlFor="searchEngineIndexing">Search Engine Indexing</label>
              <input type="checkbox" id="searchEngineIndexing" />
            </div>
            <div className="form-group checkbox-group">
              <label htmlFor="twoFactorAuth">Two-Factor Authentication</label>
              <input type="checkbox" id="twoFactorAuth" />
            </div>
            <button>Save Privacy Settings</button>
          </div>
        );
      case "collaboration":
        return (
          <div className={`collaboration-settings settings-content ${theme}`}>
            <h2>Collaboration Settings</h2>
            <div className="form-group">
              <label htmlFor="inviteCollab">Invite to Collaborate</label>
              <input type="text" id="inviteCollab" placeholder="Enter email or username" />
            </div>
            <div className="form-group">
              <label htmlFor="projectVisibility">Project Visibility</label>
              <select id="projectVisibility">
                <option value="public">Public</option>
                <option value="team">Team Only</option>
              </select>
            </div>
            <div className="form-group checkbox-group">
              <label htmlFor="collabNotifications">Collaboration Notifications</label>
              <input type="checkbox" id="collabNotifications" />
            </div>
            <button>Save Collaboration Settings</button>
          </div>
        );
      case "application":
        return (
          <div className={`application-settings settings-content ${theme}`}>
            <h2>Application Settings</h2>
            <div className="form-group">
              <label htmlFor="theme">Theme</label>
              <select id="theme">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="notifications">Enable Notifications</label>
              <input type="checkbox" id="notifications" />
            </div>
            <div className="form-group">
              <label htmlFor="autoUpdate">Auto-Update</label>
              <input type="checkbox" id="autoUpdate" />
            </div>
            <button>Save Application Settings</button>
          </div>
        );
      case "helpSupport":
        return (
          <div className={`help-support settings-content ${theme}`}>
            <h2>Help & Support</h2>
            <ul>
              <li className="help-support-list">FAQ</li>
              <p className="help-support-content">
                Frequently Asked Questions (FAQ) serve as a vital resource for users seeking quick answers to common queries. Whether it's troubleshooting technical issues or understanding platform features, our FAQ section is meticulously curated to address the most pressing concerns. Dive into a wealth of information covering account management, billing inquiries, feature functionalities, and more.
              </p>
              <br />
              <li className="help-support-list">Contact Support</li>
              <p className="help-support-content">
                At UniCollab, your satisfaction is our priority, which is why our dedicated support team is readily available to assist you every step of the way. Whether you're encountering technical difficulties, have questions about our services, or require assistance with account-related matters, our support specialists are here to provide prompt and personalized assistance. Reach out to us via email, phone, or live chat for timely resolutions and expert guidance tailored to your needs.
              </p>
              <br />
              <li className="help-support-list">Community Guidelines</li>
              <p className="help-support-content">
                Our community thrives on collaboration, innovation, and respect for all members. To foster a vibrant and inclusive environment, we've established clear Community Guidelines that outline the standards of behavior expected from every participant. Upholding principles of mutual respect, integrity, and professionalism, our guidelines promote constructive engagement and discourage harmful conduct.
              </p>
            </ul>
          </div>
        );
      case "legal":
        return (
          <div className={`legal-settings settings-content ${theme}`}>
            <h2>Legal Settings</h2>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`settings ${theme}`}>
      <div className="settings-header">
        <Link to="/">
          <img src={homeIcon} alt="Home" className="home-icon" />
        </Link>
      </div>
      <div className="settings-tabs">
        <button
          className={activeTab === "profile" ? "active" : ""}
          onClick={() => setActiveTab("profile")}
        >
          Profile Settings
        </button>
        <button
          className={activeTab === "account" ? "active" : ""}
          onClick={() => setActiveTab("account")}
        >
          Account Settings
        </button>
        <button
          className={activeTab === "notifications" ? "active" : ""}
          onClick={() => setActiveTab("notifications")}
        >
          Notification Settings
        </button>
        <button
          className={activeTab === "privacy" ? "active" : ""}
          onClick={() => setActiveTab("privacy")}
        >
          Privacy Settings
        </button>
        <button
          className={activeTab === "collaboration" ? "active" : ""}
          onClick={() => setActiveTab("collaboration")}
        >
          Collaboration Settings
        </button>
        <button
          className={activeTab === "application" ? "active" : ""}
          onClick={() => setActiveTab("application")}
        >
          Application Settings
        </button>
        <button
          className={activeTab === "helpSupport" ? "active" : ""}
          onClick={() => setActiveTab("helpSupport")}
        >
          Help & Support
        </button>
        <button
          className={activeTab === "legal" ? "active" : ""}
          onClick={() => setActiveTab("legal")}
        >
          Legal Settings
        </button>
      </div>
      <div className="settings-content-container">{renderTabContent()}</div>
    </div>
  );
};

export default SettingsPage;
