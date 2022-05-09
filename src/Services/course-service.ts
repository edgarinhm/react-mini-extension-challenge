import { CLASSES_URL } from "../Constants/api-constant";
import HttpClient from "../HttpClient/HttpClient";
import { Courses } from "../Interfaces/courses-interface";

const { get } = HttpClient();

class CourseService {
  static async listClases(clasesIds: string[]): Promise<Courses> {
    try {
      const orQuery = clasesIds.map(
        (classId) => `OR(FIND(ARRAYJOIN({Students}),'${classId}')>0)`
      );
      const data: Courses = await get(
        `${CLASSES_URL}?view=Grid view&filterByFormula='${orQuery}')`
      );
      return data;
    } catch (error) {
      throw Error(error as string);
    }
  }
}

export default CourseService;
