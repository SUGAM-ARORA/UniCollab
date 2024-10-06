import React, {useContext, useState} from 'react';
import './feedback.css';
import { Link } from 'react-router-dom';
import homeIcon from './homeicon.png';
import {ThemeContext} from "../../App";

const Feedbackform = () => {
  const [formData, setFormData] = useState({
    nameFeedback: '',
    email: '',
    rating: '',
    issue: 'select',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending feedback.');
    }
  };

  const {theme} = useContext(ThemeContext)

  return (
    <div className={theme}>
      <Link to="/">
        <img src={homeIcon} alt="Home" className="home-icon" />
      </Link>
      <div className="headingFeedback">Help Us Improve!</div>
      <div className="formFeedback">
        <form className="formforFeedback" onSubmit={handleSubmit}>
          <div className="componentsFormFeedback">
            <label htmlFor="nameFeedback" className="starArea">Name:</label>
            <input
              type="text"
              id="nameFeedback"
              name="nameFeedback"
              required
              placeholder="Enter Your Name"
              value={formData.nameFeedback}
              onChange={handleChange}
            />
          </div>
          <div className="componentsFormFeedback">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="componentsFormFeedback">
            <label htmlFor="rating">Rating:</label>
            <div className="star-rating">
              <input
                type="radio"
                id="star5"
                name="rating"
                value="5"
                checked={formData.rating === '5'}
                onChange={handleChange}
              />
              <label htmlFor="star5" title="5 stars">&#9733;</label>
              <input
                type="radio"
                id="star4"
                name="rating"
                value="4"
                checked={formData.rating === '4'}
                onChange={handleChange}
              />
              <label htmlFor="star4" title="4 stars">&#9733;</label>
              <input
                type="radio"
                id="star3"
                name="rating"
                value="3"
                checked={formData.rating === '3'}
                onChange={handleChange}
              />
              <label htmlFor="star3" title="3 stars">&#9733;</label>
              <input
                type="radio"
                id="star2"
                name="rating"
                value="2"
                checked={formData.rating === '2'}
                onChange={handleChange}
              />
              <label htmlFor="star2" title="2 stars">&#9733;</label>
              <input
                type="radio"
                id="star1"
                name="rating"
                value="1"
                checked={formData.rating === '1'}
                onChange={handleChange}
              />
              <label htmlFor="star1" title="1 star">&#9733;</label>
            </div>
          </div>
          <div className="componentsFormFeedback">
            <label htmlFor="issue">Issue Type:</label>
            <select
              id="issue"
              name="issue"
              value={formData.issue}
              onChange={handleChange}
            >
              <option value="select" className="componentsFormFeedbackValues">Select Issue Type</option>
              <option value="bug" className="componentsFormFeedbackValues">Bug</option>
              <option value="suggestion" className="componentsFormFeedbackValues">Suggestion</option>
              <option value="other" className="componentsFormFeedbackValues">Other</option>
            </select>
          </div>
          <div className="componentsFormFeedback">
            <label htmlFor="comments">Comments:</label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit Feedback Form</button>
        </form>
      </div>
    </div>
  );
};

export default Feedbackform;
