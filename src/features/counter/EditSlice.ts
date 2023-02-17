import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PayloadInterface {
  desc: string;
}

const initialState: PayloadInterface = {
  desc: "",
};

export const EditSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    setDesc: (state, action: PayloadAction<PayloadInterface>) => {
      state.desc = action.payload.desc;
    },
  },
});

export const { setDesc } = EditSlice.actions;

export default EditSlice;
