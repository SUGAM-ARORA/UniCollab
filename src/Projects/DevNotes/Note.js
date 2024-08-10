import React from "react";

function Note({ content, onDelete }) {
  return (
    <div className='note'>
      <pre className='note-content'>{content}</pre>
      <button onClick={onDelete} className='delete-note-btn'>
        Delete
      </button>
    </div>
  );
}

export default Note;
