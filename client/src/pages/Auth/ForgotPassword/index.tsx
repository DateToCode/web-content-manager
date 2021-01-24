import React, { useState } from "react";
import {
  Button,
  Grid,
  InputAdornment,
  makeStyles,
  Typography,
  TextField,
} from "@material-ui/core";

import Background from "../../../assets/backgrounds/background.svg";
import Mail from "../../../assets/icons/mail.svg";
import { useHistory } from "react-router-dom";

type ForgotPasswordPageProps = {};

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

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = () => {
  const [mailUser, setMailUser] = useState("");

  // DELETE IN FUTURE
  const history = useHistory();

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    // DELETE IN FUTURE
    history.push("/auth/reset-password");
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMailUser(event.target.value);
  };
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justify="center"
    >
      <form className={classes.form}>
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
            No te preocupes, indícanos tu email y te enviaremos un enlace para
            continuar con el proceso de resetear contraseña
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="text"
            fullWidth
            value={mailUser}
            name="email"
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            placeholder="EMAIL"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={Mail} alt="user__icon" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            onClick={handleSubmit}
            className={classes.button}
          >
            SEND EMAIL
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default ForgotPasswordPage;
