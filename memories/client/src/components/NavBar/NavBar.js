import React from 'react';
import { AppBar,Avatar,Toolbar,Typography,Button } from '@mui/material';
import {Link} from 'react-router-dom';
import memory from '../../images/memory.jpg';
import "./styles.css";


const NavBar = () => {
    const user=null;
    return (
            <AppBar className="appBar" position="static" color="inherit">
                <div className="brandContainer">
                <Typography component={Link} to="/" className="heading" variant="h2" align="center">Memories</Typography>
                <img className="image" src={memory} alt="memories"/>
                </div>
                
                <Toolbar className='toolbar'>
                    {
                        user?(
                            <div className='profile'>
                                <Avatar className='purple' alt={user.result.name} src={user.result.imageUrl}>
                                    {user.result.name.charAt(0)}
                                </Avatar>
                                <Typography className='userName' variant="h6">{user.result.name}</Typography>
                                <Button className='logout' variant="contained" color="secondary"></Button>
                            </div>
                        ):(
                            <Button variant="contained" component={Link} to="/Auth" color="primary">Sign In</Button>

                        )
                    }
                </Toolbar>
            </AppBar>
    )
}

export default NavBar