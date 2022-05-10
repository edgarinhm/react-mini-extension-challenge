import CardItems from "../CardItems";
import useListCourses from "./useListCourses";

const ListCourses = () => {
  const { studentCourses, filterStudentsInCourse } = useListCourses();
  return (
    <div>
      {studentCourses.map((course) => {
        return (
          <CardItems
            key={course.id}
            course={course.fields.Name}
            students={filterStudentsInCourse(course.id)}
          />
        );
      })}
    </div>
  );
};

export default ListCourses;
