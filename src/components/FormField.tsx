import React from "react";
import { ErrorMessage, Field } from "formik";
import { FormValues } from "types";
import { FormFieldSlider } from "./FormFieldSlider";

interface FormFieldProps {
  name: keyof FormValues;
  label: string;
  type?: string;
}
export const FormField = ({ name, label, type = "text" }: FormFieldProps) => {
  return (
    <div className="mb-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        {(() => {
          switch (type) {
            case "slider":
              return <FormFieldSlider name={name} label={label} />;
            default:
              return (
                <Field
                  id={name}
                  name={name}
                  placeholder={name}
                  type={type}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              );
          }
        })()}
      </div>
      <div className="text-sm text-red-400 mb-3">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};
