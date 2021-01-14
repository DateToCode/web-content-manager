import { Button, Grid, TextField ,Typography} from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {

    const [loginUser, setLoginUser] = useState({email: "", password:""})
    
    const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
       alert("Hola!")
    }

    return (
        <Grid container>
            <form>
            <Grid item xs={12}>
                <TextField type="text" fullWidth/>
                <TextField type="password" fullWidth/>

                <Button type="submit" color="primary" variant="contained" fullWidth onClick={handleSubmit}>LOG IN</Button>
                <Link to="/reset-password"><Typography variant="body1">Resetear contraseña</Typography></Link>
            </Grid>
            </form>
        </Grid>
    )
}

export default LoginPage
