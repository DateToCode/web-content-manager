import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    login(loginUser.email, loginUser.password)
      .then((_) => {
        console.log("funciona");
      })
      .catch((err) => {
        alert("no funciona");
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginUser({ ...loginUser, [event.target.name]: event.target.value });
  };

  return (
    <Grid container>
      <form>
        <Grid item xs={12}>
          <TextField
            type="text"
            fullWidth
            value={loginUser.email}
            name="email"
            onChange={handleInputChange}
          />
          <TextField
            type="password"
            fullWidth
            name="password"
            value={loginUser.password}
            onChange={handleInputChange}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            onClick={handleSubmit}
          >
            LOG IN
          </Button>
          <Link to="/reset-password">
            <Typography variant="body1">Resetear contraseña</Typography>
          </Link>
        </Grid>
      </form>
    </Grid>
  );
};

export default LoginPage;
