import React from 'react'
import './feedback.css'

const Feedbackform = () => {
  return (
    <div>
      <div className='headingFeedback'>
        Help Us Improve!
      </div>
      <div className='formFeedback'>
        <form className='formforFeedback'>
          <div className='componentsFormFeedback'>
            <label for="nameFeedback" class="starArea">Name:</label>
            <input type="text" id="nameFeedback" name="nameFeedback" required placeholder='Enter Your Name' />
          </div>
          <div className='componentsFormFeedback'>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required  placeholder='Enter Your Email'/>
          </div>
          <div className='componentsFormFeedback'>
            <label for="rating">Rating:</label>
            <div class="star-rating">
              <input type="radio" id="star5" name="rating" value="5" />
              <label for="star5" title="5 stars">&#9733;</label>
              <input type="radio" id="star4" name="rating" value="4" />
              <label for="star4" title="4 stars">&#9733;</label>
              <input type="radio" id="star3" name="rating" value="3" />
              <label for="star3" title="3 stars">&#9733;</label>
              <input type="radio" id="star2" name="rating" value="2" />
              <label for="star2" title="2 stars">&#9733;</label>
              <input type="radio" id="star1" name="rating" value="1" />
              <label for="star1" title="1 star">&#9733;</label>
            </div>
          </div>
          <div className='componentsFormFeedback'>
            <label for="issue">Issue Type:</label>
            <select id="issue" name="issue">
              <option value="select">Select Issue Type</option>
              <option value="bug">Bug</option>
              <option value="suggestion">Suggestion</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className='componentsFormFeedback'>
            <label for="comments">Comments:</label>
            <textarea id="comments" name="comments"></textarea>
          </div>
          <button>Submit Feedback Form</button>
        </form>
      </div>
    </div>
  )
}

export default Feedbackform
