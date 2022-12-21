import React from "react";
import { Form, Formik, FormikProps } from "formik";
import { formValidationSchema } from "./schemas/validationSchema";
import { FormValues } from "types";
import { FormField } from "components/FormField";
import { FormSubmitButton } from "components/FormSubmit";

const DEFAUlT_VALUES: FormValues = {
  name: "",
  email: "",
  birthDate: "",
  favColor: "",
  salary: 0,
};

export const FormPage = () => {
  return (
    <Formik<FormValues>
      validationSchema={formValidationSchema}
      initialValues={DEFAUlT_VALUES}
      onSubmit={async (values) => {
        // logic to send
        console.log(values);
      }}
    >
      {({ values, errors, isValid }: FormikProps<FormValues>) => (
        <div className="max-w-[600px] m-auto container">
          <Form>
            <FormField name="name" label="Name" />
            <FormField name="email" label="Email" />
            <FormField name="birthDate" label="Date of Birth" type="date" />
            <FormField name="favColor" label="Favorite color" type="color" />
            <FormField name="salary" label="Salary" type="slider" />
            <div>
              <FormSubmitButton isValid={isValid} />
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
