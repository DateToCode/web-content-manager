import React, { useState } from "react";

import {
  Grid,
  makeStyles,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@material-ui/core";

import Background from "../../../assets/backgrounds/background.svg";
import Lock from "../../../assets/icons/lock.svg";
import Eye from "../../../assets/icons/eye.svg";

type ResetPasswordPageProps = {};

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: `url('${Background}') #2148C0`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
  },
  form: {
    width: "100%",
    maxWidth: "500px",
    padding: "24px",
    boxSizing: "border-box",
    "& > *": {
      margin: "12px 0 !important",
    },
  },
  button: {
    fontWeight: "bold",
  },
}));

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = () => {
  const classes = useStyles();

  const [resetPasswordState, setResetPasswordState] = useState({
    password: "",
    newPassword: "",
  });

  const checkPasswords = (): boolean => {
    return resetPasswordState.password === resetPasswordState.newPassword &&
      resetPasswordState.password !== ""
      ? true
      : false;
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setResetPasswordState({
      ...resetPasswordState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justify="center"
    >
      <form className={classes.form}>
        <Typography variant="body1" align="center">
          ¡Perfecto! Ahora podrás restablecer tu contraseña. Intenta recordarla
          mejor esta vez
        </Typography>
        <TextField
          type="password"
          fullWidth
          name="password"
          onChange={handleInputChange}
          variant="outlined"
          placeholder="NEW PASSWORD"
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
        <TextField
          type="password"
          fullWidth
          name="newPassword"
          onChange={handleInputChange}
          variant="outlined"
          placeholder="REPEAT NEW PASSWORD"
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
          disabled={
            // TODO REFACTOR IN NEW FUNCTION
            !(
              resetPasswordState.password === resetPasswordState.newPassword &&
              resetPasswordState.password !== ""
            )
          }
          className={classes.button}
        >
          Reset password
        </Button>
      </form>
    </Grid>
  );
};

export default ResetPasswordPage;
