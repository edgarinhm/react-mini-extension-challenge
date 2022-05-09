import { STUDENT_URL } from "../Constants/api-constant";
import HttpClient from "../HttpClient/HttpClient";
import { Students } from "../Interfaces/students-interface";
import { User } from "../Interfaces/user-interface";

const { get } = HttpClient();

class StudentService {
  static async login(user: User): Promise<Students> {
    try {
      const data: Students = await get(
        `${STUDENT_URL}?view=Grid view&filterByFormula=LOWER({Name})='${user.name.toLocaleLowerCase()}'`
      );
      return data;
    } catch (error) {
      throw Error(error as string);
    }
  }

  static async logout(): Promise<boolean> {
    try {
      return await Promise.resolve(false);
    } catch (error) {
      throw Error(error as string);
    }
  }
}

export default StudentService;
