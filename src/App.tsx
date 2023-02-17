import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './components/first';
import Second from './components/second';
import { nanoid } from '@reduxjs/toolkit';

function App() {
  const [searchText, setSearchText] = useState('');
  const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
		},
		
	]);
  const addNote = (text: any) => {
		const newNote = {
			id: nanoid(),
			text: text,
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

  const deleteNote = (id: any) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
  
  return (
    <div style={{display:"flex", flexDirection: "row", gap:"24px"}}>
      
      <div >
        <h1>
          first
        </h1>
        <First notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
          setSearchText={setSearchText}
           deleteNote={deleteNote}/>
      </div>
      <div>
        <h1>
          second
        </h1>
        <Second addNote={addNote}/>
      </div>
    </div>
  );
}

export default App;
