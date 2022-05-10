import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
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
      const studentsCollection = await StudentService.listStudents();
      courses.records = courses.records.map((course) => {
        const filterStudents = studentsCollection.records.filter((students) => {
          return course.fields.Students.join("|").includes(students.id);
        });
        const studentNames = filterStudents.map((filter) => {
          return filter.fields.Name;
        });
        course.fields.Students = studentNames;
        return course;
      });

      authenticated = true;
    }
    return { authenticated, student, courses };
  } catch ({ response: { data } }) {
    throw data;
  }
});

export const logout = createAction<boolean | undefined>("user/logout");
