import React,{useState} from 'react';
import {Avatar,Typography,Button,Paper,Grid,Container} from '@mui/material';
// import FontAwesomeIcon from './images/lock-solid.svg';
import './styles.css';
import Input from './input';


const Auth = () => {
    // const state=null;
    const isSignup=true;
    const [showPassword,setShowPassword]=useState(false);
    const handleShowPassword=()=>setShowPassword((prevShowPassword)=>!prevShowPassword);
    {

    }
    const handleSubmit=()=>
    {

    }
    const handleChange=()=>
    {

    }
    const switchMode=()=>
    {
        
    }
    return (
    <Container component="main" maxWidth="xs">
        <Paper className='paper' elevation={3}>
            <Avatar className='avatar'>
                {/* <FontAwesomeIcon icon="fa-solid fa-lock" size="xs" /> */}
                {/* <FontAwesomeIcon/> */}
            </Avatar>
            <Typography variant="h5">{isSignup?'Sign Up':'Sign In'}</Typography>
            <form className='form' onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup&&(
                            <>
                            
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>)}
                            <Input name="email" label="Email Address" handleSubmit={handleChange} type="email"/>
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword?"text":"password"}handleShowPassword={handleShowPassword} />
                            {isSignup&& <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                            <Button type="submit" fullWidth variant="contained" color="primary" className="submit">
                                {isSignup?'Sign up':'Sign In'}
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Button onClick={switchMode}></Button>
                                </Grid>
                            </Grid>

                </Grid>
            </form>
        </Paper>
        </Container>
    
    )
}

export default Auth