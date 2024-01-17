import { useState } from "react";
import { TextField, Button } from "@mui/material";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setNameError(false);
    setPhoneError(false);
    setEmailError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (name == "") {
      setNameError(true);
    }
    if (phone == "") {
      setPhoneError(true);
    }
    if (email && name && phone) {
      console.log(email, name, phone);
      const userDetails = {
        name,
        phone,
        email
    };
    
    localStorage.setItem("user", JSON.stringify(userDetails));
    }
  };

  return (
    <>
      <form
        // autoComplete="on"
        onSubmit={handleSubmit}
      >
        <h2>Form</h2>
        <TextField
          label="Full Name"
          onChange={(e) => setName(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="text"
          sx={{ mb: 3 }}
          fullWidth
          value={name}
          error={nameError}
        />
        <TextField
          label="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="number"
          value={phone}
          error={phoneError}
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={email}
          error={emailError}
        />

        <Button variant="outlined" color="secondary" type="submit">
          Sign In
        </Button>
      </form>
    </>
  );
};

export default Form;
