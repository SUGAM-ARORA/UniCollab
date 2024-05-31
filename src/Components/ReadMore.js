import React, { useState } from "react";
import "./ReadMore.css";
function ReadMore({content}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentToggle = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <a href="#" className="button btn" onClick={contentToggle}>
        {isExpanded ? "Read Less" : "Read More"}
      </a>
      {
      isExpanded && (
        <div className="expanded">
          <p>{content}</p>
        </div>
      )
      }
    </div>
  );
}
export default ReadMore;
