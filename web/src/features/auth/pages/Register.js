import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

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
    console.log("gola");
    let allOk = 0;

    Object.keys(formData).forEach((atr) => {
      if (!formData[atr].error && formData[atr].value.trim() !== "") {
        allOk++;
      }
    });

    if (allOk === Object.keys(formData).length) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Box>
      <h1>Bienvenido a nuestro ecommerce</h1>
      <p>Completa el formulario de registro para poder acceder a la web</p>
      <Box>
        <TextField
          label="Usuario"
          variant="outlined"
          error={formData.usuario.error}
          onChange={(e) => {
            validateFormInput("usuario", e.target.value);
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          error={formData.email.error}
          onChange={(e) => {
            validateFormInput("email", e.target.value);
          }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          error={formData.password.error}
          onChange={(e) => {
            validateFormInput("password", e.target.value);
          }}
        />
      </Box>
      <Button variant="contained" disabled={!canRegisterUser()}>
        Registrarme
      </Button>
    </Box>
  );
};

export default Register;
