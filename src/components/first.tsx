import Button from '@mui/material/Button'
import React from 'react'
import CardComp from './card'
import TextField from '@mui/material/TextField'
const First = ({notes, deleteNote, setSearchText}: any) => {
  return (
    <div style={{display:"flex", flexDirection: "column", gap:"24px"}}>
         <TextField
       
        onChange={(event) =>
            setSearchText(event.target.value)
        }
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
       {notes.map((note: { id: string | undefined; text: any; date: any }) => (
				<CardComp
					id={note.id}
					text={note.text}
					date={note.date}
                    deleteNote={deleteNote}
				/>
			))}
    </div>
  )
}

export default First