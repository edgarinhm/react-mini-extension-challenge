import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { Courses } from "../../Interfaces/courses-interface";
import { Students } from "../../Interfaces/students-interface";
import { User } from "../../Interfaces/user-interface";
import CourseService from "../../Services/course-service";
import StudentService from "../../Services/student-service";

export const login = createAsyncThunk("user/login", async (user: User) => {
  try {
    const student: Students = await StudentService.login(user);
    let authenticated = false;
    let courses: Courses = { records: [] };
    if (student.records[0].id !== "") {
      courses = await CourseService.listClases(
        student.records[0].fields.Classes
      );
      authenticated = true;
    }
    return { authenticated, student, courses };
  } catch ({ response: { data } }) {
    throw data;
  }
});

export const logout = createAsyncThunk("user/logout", async () => {
  try {
    console.log("logout-action");
    return StudentService.logout();
  } catch ({ response: { data } }) {
    throw data;
  }
});

export const updateSession = createAction<object | undefined>("session/update");
