import React, { useContext, useState } from "react";
import {
  Button,
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

import { Link } from "react-router-dom";

import { AuthContext } from "../../../auth/AuthContext";

import Cart from "../../../assets/icons/cart.svg";
import User from "../../../assets/icons/user.svg";
import Lock from "../../../assets/icons/lock.svg";
import Eye from "../../../assets/icons/eye.svg";
import Background from "../../../assets/backgrounds/background.svg";

type LoginPageProps = {};

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: `url('${Background}') #2148C0`,
    //backgroundColor: "blue",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
  },
  form: {
    width: "100%",
    maxWidth: "500px",
  },
}));

const LoginPage: React.FC<LoginPageProps> = () => {
  const classes = useStyles();

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
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <img src={Cart} alt="cart__icon" />
      <form className={classes.form}>
        <Grid item xs={12}>
          <TextField
            type="text"
            fullWidth
            value={loginUser.email}
            name="email"
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            placeholder="EMAIL"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={User} alt="user__icon" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            type="password"
            fullWidth
            name="password"
            value={loginUser.password}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            placeholder="PASSWORD"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={Lock} alt="lock__icon" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <img src={Eye} alt="eye__icon" />
                </InputAdornment>
              ),
            }}
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
