import { useState } from "react";

function UserProfileCard({ user }) {
  const [messageCount, setMessageCount] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    setMessageCount(0);
  }

  function handleToggleFavorite() {
    setIsFavorited(!isFavorited);
  }

  return (
    <div className="profile-card">
      <img src={user.avatarUrl} style={{ width: "150px", height: "150px" }} />

      <h2>{user.name}</h2>

      <label htmlFor="bio">Bio</label>
      <p id="bio">{user.bio}</p>

      <h3>Skills</h3>
      <ul>
        {user.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <div style={{ color: "red", fontWeight: "bold" }}>
        Messages sent: {messageCount}
      </div>

      {user.isOnline ? <span>🟢 Online</span> : <span>⚪ Offline</span>}

      <button onClick={handleSendMessage}>Send Message</button>
      <button onClick={handleReset}>Reset</button>

      <p className="footer">Card last updated: {user.lastUpdated}</p>

      {user.isOnline && (
        <button onClick={handleToggleFavorite}>
          {isFavorited ? "★ Favorited" : "☆ Favorite"}
        </button>
      )}

    </div>
  );
}

export default UserProfileCard; 
