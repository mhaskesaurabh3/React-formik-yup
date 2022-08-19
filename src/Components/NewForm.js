import React, { useState } from "react";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";

import * as yup from "yup";

const NewForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(10).required(),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    {
      name && email && password === " "
        ? alert("Please Enter Valid Credentials")
        : alert("Form submitted successfully") &&
          console.log("Form submitted succesfully");
    }

    let formData = {
      name: event.target.value,
      email: { email },
      password: { password },
    };
    const isValid = await userSchema.isValid(formData);
    console.log(isValid);
    console.log(formData);
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        autoComplete="on"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="100vh"
        onSubmit={handleSubmit}
      >
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="contained" type="Submit">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default NewForm;
