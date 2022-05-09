import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Courses } from "../../../Interfaces/courses-interface";
import { Students } from "../../../Interfaces/students-interface";
import { login, logout } from "../../actions/user-actions";

export interface SessionState {
  authenticated: boolean;
  student: Students;
  classes: Courses[];
}

const initialState: SessionState = {
  authenticated: false,
  student: { records: [] },
  classes: [],
};

const handleLoginFulfilled = (
  state: SessionState,
  { payload }: PayloadAction<SessionState>
) => {
  state.authenticated = payload.authenticated;
  state.student = { ...payload.student };
  state.classes = { ...payload.classes };
};

const handleLogoutFulfilled = () => {
  localStorage.clear();
  console.log("handleLogoutFulfilled");

  return initialState;
};

export default createReducer(initialState, {
  [login.fulfilled.type]: handleLoginFulfilled,
  [login.rejected.type]: handleLogoutFulfilled,
  [logout.fulfilled.type]: handleLogoutFulfilled,
});
