import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserTypes } from "../../Types";
import { RootState } from "../../app/store";

const initialState: UserTypes = {
  _id: "",
  username: "",
  picture: "",
  isLogged: false,
  accessToken: "",
  createdAt:""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserTypes>) => {

        return {
            ...state,
            ...action.payload,
            isLogged:true,
        }
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

//Selectors

export const selectUser = (state: RootState) => state.user;
