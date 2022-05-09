import CardItems from "../CardItems";
import useListCourses from "./useListCourses";

const ListCourses = () => {
  const { studentName, courses } = useListCourses();
  return (
    <div>
      {courses.map((course) => {
        return (
          <CardItems key={course} course={course} students={studentName} />
        );
      })}
    </div>
  );
};

export default ListCourses;
