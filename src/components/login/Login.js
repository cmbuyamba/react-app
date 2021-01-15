import React from 'react';
import { 
    Button, 
    Container, 
    Avatar, 
    Typography, 
    TextField, 
    FormControlLabel, 
    Checkbox, 
    Grid, 
    Link
 } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './Login.css';

const Login = () => {
    return (
        <Container component="main" maxWidth="xs">
            <div className="container">
                <Avatar className="avatar">
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Sign In</Typography>
                <form className="form">
                    <TextField variant="outlined"
                        required
                        label="Enter Email"
                        margin="normal"
                        name="email"
                        id="email"
                        type="email"
                        fullWidth
                    />
                    <TextField variant="outlined"
                        required
                        label="Enter Password"
                        margin="normal"
                        name="password"
                        id="password"
                        fullWidth
                        type="password"
                    />
                    <FormControlLabel 
                        label="Remeber me" 
                        control={<Checkbox value="remeber" color="primary" />}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        color="primary"
                        className="submit"
                        variant="contained"
                    >
                        SIGN IN
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2" >Forget Password?</Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">{"Don't have an account ? Sign Up"}</Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default Login;