import useAppSelector from "../../../Hooks/useAppSelector";

const useListCourses = () => {
  const { student, courses } = useAppSelector((state) => state.session);
  const studentName = student.records[0].fields.Name;
  const studentCourses = courses.records;
  const filterStudentsInCourse = (courseId: string) => {
    const filteredCourse = studentCourses.find((course) => {
      return course.id === courseId;
    });
    return filteredCourse?.fields.Students.join(", ") || "";
  };
  return { studentName, studentCourses, filterStudentsInCourse };
};

export default useListCourses;
