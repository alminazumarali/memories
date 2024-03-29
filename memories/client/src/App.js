import React from 'react';
import {Container} from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

import "./styles.css";

const App=()=>{
    
    return(
        <BrowserRouter>
            <Container maxWidth="lg">
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/auth" exact component={Auth}/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}
export default App;