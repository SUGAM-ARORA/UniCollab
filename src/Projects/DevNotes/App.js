import React, { useState } from 'react';
import './App.css';
import Note from './Note';

function App() {
  const [notes, setNotes] = useState([]);
  const [noteContent, setNoteContent] = useState('');

  const addNote = () => {
    if (noteContent.trim()) {
      setNotes([...notes, noteContent]);
      setNoteContent('');
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <h1>Developer Note-Taking App</h1>
      <div className="note-input">
        <textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Enter your note here..."
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <Note key={index} content={note} onDelete={() => deleteNote(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
