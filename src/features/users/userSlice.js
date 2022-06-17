import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Gladson Venancio" },
  { id: "1", name: "Brenda Venancio" },
  { id: "2", name: "Heleni Venancio" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllusers = (state) => state.usersReducer.map((user) => user);

export default userSlice.reducer;
