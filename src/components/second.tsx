import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useAppSelector } from "../app/hooks";
import { useDispatch } from "react-redux";

import { selectEdit } from "../features/EditSelector";
import { setDesc } from "../features/counter/EditSlice";


const Second = ({ addNote }: any) => {

    const dispatch = useDispatch();
    const {desc} = useAppSelector(selectEdit);
  const [noteText, setNoteText] = useState(desc);

  const handleChange = (event: any) => {
    setNoteText(event.target.value);
    dispatch(setDesc({desc:event.target.value}))
  };

  const handleSaveClick = () => {
    addNote(noteText);
    dispatch(setDesc({desc:""}))
  };
  
  const handleResetClick = () => {
    setNoteText("");
    dispatch(setDesc({desc:""}))

  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <TextField
        value={desc}
        onChange={handleChange}
        id="outlined-basic"
        label="Description"
        variant="outlined"
      />
      <Button onClick={handleSaveClick} variant="contained">
        Save
      </Button>
      <Button onClick={handleResetClick} variant="contained">
        Reset
      </Button>
    </div>
  );
};

export default Second;
