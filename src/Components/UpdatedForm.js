import React, { useState } from "react";
import { Button, Box, TextField } from "@mui/material";
import { Form, Formik, Field } from "formik";
import * as yup from "yup";
import "./UpdatedForm.css";
import Alert from "@mui/material/Alert";

import { boolean } from "yup/lib/locale";

const initialValues = {
  name: "",
  email: "",
  password: "",
  date: "",
};

const userSchema = yup.object({
  name: yup.string().required("Please Enter Your Name"),
  email: yup
    .string()
    .email("Invalid Email")
    .required("Please Enter Your Email"),
  password: yup
    .string()
    .min(4, "Password Too Short")
    .max(10, "Password Should be in between  4 to 10 characters"),
  date: yup.date("Select the Date").required(""),
});

const UpdatedForm = () => {
  const handleSubmit = (values, formikHelpers) => {
    alert("Form Submitted Successfully");
    console.table(values);
    formikHelpers.resetForm();
  };

  return (
    <div className="MaterialForm">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        {({ errors, isValid, dirty, touched }) => (
          <Form>
            <Box height={15} />
            <Field
              name="name"
              type="name"
              as={TextField}
              variant="outlined"
              label="Name"
              color="primary"
              fullWidth
              error={Boolean(errors.name) && Boolean(touched.name)}
              helperText={Boolean(touched.name) && errors.name}
            />
            <Box height={15} />
            <Field
              name="email"
              type="email"
              as={TextField}
              variant="outlined"
              label="Email"
              color="primary"
              fullWidth
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />
            <Box height={15} />
            <Field
              name="password"
              type="password"
              as={TextField}
              variant="outlined"
              label="Password"
              color="primary"
              fullWidth
              error={Boolean(errors.password) && Boolean(touched.password)}
              helperText={Boolean(touched.password) && errors.password}
            />
            <Box height={15} />
            <Field
              name="date"
              type="date"
              as={TextField}
              variant="outlined"
              color="primary"
              fullWidth
              error={Boolean(errors.date) && Boolean(touched.date)}
              helperText={Boolean(touched.date) && errors.date}
            />
            <Box height={15} />
            <Button
              type="Submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={!dirty || !isValid}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdatedForm;
