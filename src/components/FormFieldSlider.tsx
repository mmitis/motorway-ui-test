import React from "react";
import { Field } from "formik";

interface FormFieldProps {
  name: string;
  label: string;
}
export const FormFieldSlider = ({ name, label }: FormFieldProps) => {
  return (
    <div>
      <Field
        id={name}
        name={name}
        type="range"
        min="0"
        max="30000"
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};
