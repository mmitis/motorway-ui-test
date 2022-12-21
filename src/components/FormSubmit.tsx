import React from "react";

interface FormSubmitButtonProps {
  isValid: boolean;
}

export const FormSubmitButton = ({ isValid }: FormSubmitButtonProps) => {
  return (
    <button
      type="submit"
      className={`${
        isValid ? "" : "opacity-25"
      } inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
    >
      Send form
    </button>
  );
};
