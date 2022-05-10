import { Validation } from "../Interfaces/validation-interface";
const loginValidation: Validation[] = [
  { label: "name", required: true, message: "name is required" },
];

export default loginValidation;
