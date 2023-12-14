import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { inputField } from "../styles/Register";

const registerFormInterface = {
  usuario: {
    value: "",
    error: false,
  },
  email: {
    value: "",
    error: false,
  },
  password: {
    value: "",
    error: false,
  },
};

const Register = () => {
  const [formData, setFormData] = useState(registerFormInterface);

  const validateFormInput = (field, value) => {
    if (!value) {
      setFormData({ ...formData, [field]: { value, error: true } });
    } else {
      setFormData({ ...formData, [field]: { value, error: false } });
    }
  };

  const canRegisterUser = () => {
    let allOk = 0;

    Object.keys(formData).forEach((atr) => {
      if (!formData[atr].error && formData[atr].value.trim() !== "") {
        allOk++;
      }
    });

    return allOk === Object.keys(formData).length;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Bienvenido a nuestro ecommerce</h1>
      <p>Completa el formulario de registro para poder acceder a la web</p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "auto",
          marginTop: "2rem",
        }}
      >
        <TextField
          label="Usuario"
          variant="outlined"
          error={formData.usuario.error}
          onChange={(e) => {
            validateFormInput("usuario", e.target.value);
          }}
          sx={inputField}
        />
        <TextField
          label="Email"
          variant="outlined"
          error={formData.email.error}
          onChange={(e) => {
            validateFormInput("email", e.target.value);
          }}
          sx={inputField}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          error={formData.password.error}
          onChange={(e) => {
            validateFormInput("password", e.target.value);
          }}
          sx={inputField}
        />
      </Box>
      <Button variant="contained" disabled={!canRegisterUser()}>
        Registrarme
      </Button>
    </Box>
  );
};

export default Register;
