import useAppSelector from "../../../Hooks/useAppSelector";

const useListCourses = () => {
  const {
    student: { records },
  } = useAppSelector((state) => state.session);
  const studentName = records[0].fields.Name;
  const courses = records[0].fields.Classes;
  return { studentName, courses };
};

export default useListCourses;
