import { ChangeEvent, useState } from "react";
import { Validation } from "../Interfaces/validation-interface";
import stringValidation from "../Validations/string-validation";

const useForm = <T extends Object>(
  initState: T,
  validationsRules: Validation[]
) => {
  const [form, setForm] = useState(initState);
  const [validations, setValidations] = useState(validationsRules);
  const [error, setError] = useState(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
    validationChangeRules(name, value);
  };

  const validationChangeRules = (name: string, value: string) => {
    const validationRule = validationsRules.map((rule) => {
      if (rule.label === name) {
        rule.required = stringValidation(value);
        const ruleMessage = rule.required ? rule.message : "";
        setError({ ...error, [name]: ruleMessage });
      }
      return rule;
    });
    setValidations([...validationRule]);
  };

  const disabled = !!validations.find((validation) => {
    return validation.required;
  });

  return { handleChange, form, ...form, validations, disabled, error };
};

export default useForm;
