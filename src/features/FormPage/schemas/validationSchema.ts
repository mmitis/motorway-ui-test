import { isBefore, isValid, parse } from "date-fns";
import * as Yup from "yup";

export const formValidationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  birthDate: Yup.string()
    .test("birthDate", "Should be valid date", function (value) {
      const parsed = parse(value || "", "yyyy-MM-dd", new Date());
      return isValid(parsed);
    })
    .test("birthDate", "Should not later than now", function (value) {
      const parsed = parse(value || "", "yyyy-MM-dd", new Date());
      return isBefore(parsed, new Date());
    })
    .required("Required"),
  favColor: Yup.string().required("Required"),
  salary: Yup.number(),
});
