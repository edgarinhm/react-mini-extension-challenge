import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Courses } from "../../../Interfaces/courses-interface";
import { Students } from "../../../Interfaces/students-interface";
import { login, logout } from "../../actions/user-actions";

export interface SessionState {
  authenticated: boolean;
  student: Students;
  courses: Courses;
}

const initialState: SessionState = {
  authenticated: false,
  student: { records: [] },
  courses: { records: [] },
};

const handleLoginFulfilled = (
  state: SessionState,
  { payload }: PayloadAction<SessionState>
) => {
  state.authenticated = payload.authenticated;
  state.student = { ...payload.student };
  state.courses = { ...payload.courses };
};

const handleLogout = (state: SessionState) => {
  localStorage.clear();
  state.authenticated = initialState.authenticated;
  state.student = { ...initialState.student };
  state.courses = { ...initialState.courses };
};

export default createReducer(initialState, {
  [login.fulfilled.type]: handleLoginFulfilled,
  [logout.type]: handleLogout,
});
