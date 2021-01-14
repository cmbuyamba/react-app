import React from 'react';
import { Button, Container, Avatar, Typography, TextField, FormControlLabel, Checkbox, Grid, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Login = () => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.container}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Sign In</Typography>
                <form className={classes.form}>
                    <TextField variant="outlined"
                        required
                        label="Enter Email"
                        margin="normal"
                        name="email"
                        id="email"
                        type="email"
                        fullWidth={true}
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
                        className={classes.submit}
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