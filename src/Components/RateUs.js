// RateUsComponent.js
import React, { useState } from "react";
import "./RateUs.css";
import TopContainer from "./TopContainer";
import Menu from "./Menu";
import { Link } from 'react-router-dom';
import homeIcon from '../img/homeicon.png';

function RateUsComponent({ previousContent }) {
  const [emoji, setEmoji] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEmojiClick = (selectedEmoji) => {
    setEmoji(selectedEmoji);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async () => {
    if (emoji !== "" && feedback.trim() !== "") {
      try {
        const response = await fetch('/api/submit-feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ emoji, feedback }),
        });
        
        if (response.ok) {
          // Reset the state after submitting
          setEmoji("");
          setFeedback("");
          setSubmitted(true); // Hide the rating and feedback area
        } else {
          // Handle error response
          console.error('Failed to submit feedback');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      // Optionally handle error feedback
      console.error('Please select an emoji and provide feedback');
    }
  };

  return (
    <div>
      <div className="header">
        <Link to="/">
          <img src={homeIcon} alt="Home" className="home-icon" style={{ marginTop: '130px' }} />
        </Link>
        <TopContainer />
      </div>
      <div className="rateUsContainer">
        <Menu />
        <div className={`rate-us-page ${previousContent ? 'animated' : ''}`}>
          <div className="rate-us-container">
            {!submitted ? (
              <>
                <h2 className="rate-us-heading">Rate Our Website</h2>
                <div className="emoji-selection">
                  {["😡", "😞", "😐", "😊", "😍"].map((emojiOption) => (
                    <span
                      key={emojiOption}
                      className={`emoji ${emoji === emojiOption ? 'selected' : ''}`}
                      onClick={() => handleEmojiClick(emojiOption)}
                    >
                      {emojiOption}
                    </span>
                  ))}
                </div>
                <textarea
                  className="feedback-textarea"
                  placeholder="How Can We Improve?"
                  value={feedback}
                  onChange={handleFeedbackChange}
                ></textarea>
                <button className="submit-button" onClick={handleSubmit}>
                  Submit
                </button>
              </>
            ) : (
              <p className="thank-you-message">Thank you for your feedback!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RateUsComponent;
