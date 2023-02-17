import React from "react";
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import { useDispatch } from "react-redux";
import { setDesc } from "../features/counter/EditSlice";

const CardComp = ({id, text, date, deleteNote}:any) => {
    const dispatch = useDispatch();

    const handleEditButton = () => {
        dispatch(setDesc({desc:text}))
    }
    const handleDeleteButton = () => {
        deleteNote(id)
        dispatch(setDesc({desc:""}))
    }

  return (
    <div>
      {" "}
      <Card variant="outlined">{text} {date} </Card>
      <Button onClick={handleEditButton} variant="contained">Edit</Button>
      <Button onClick={handleDeleteButton} variant="contained">Delete</Button>
    </div>
  );
};

export default CardComp;
