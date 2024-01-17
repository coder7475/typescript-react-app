// import React, {useState} from "react";
import { TextField, Button } from "@mui/material";

const Form = () => {
  return (
    <>
      <form
        autoComplete="off"
        // onSubmit={handleSubmit}
      >
        <h2>Form</h2>
        <TextField
          label="Full Name"
          // onChange={e => setEmail(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          fullWidth
          // value={email}
          // error={emailError}
        />
        <TextField
          label="Phone Number"
          // onChange={e => setPassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="number"
          // value={password}
          // error={passwordError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          label="Email"
          // onChange={e => setEmail(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          // value={email}
          // error={emailError}
        />

        <Button variant="outlined" color="secondary" type="submit">
          Sign In
        </Button>
      </form>
    </>
  );
};

export default Form;
