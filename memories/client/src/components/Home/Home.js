import React from 'react';
import {Container,Grow,Grid} from '@mui/material';
import Posts from '../posts/posts';
import Forms from '../forms/form';
import {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {getPosts} from '../../actions/posts';

const Home = () => {
    const [currentID,setCurrentId]=useState(null);
    const dispatch = useDispatch();
    useEffect(()=>{ dispatch(getPosts());},[currentID,dispatch]);
    return (
            <Grow in>
                <Container>
                    <Grid className="mainContainer"container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Forms currentID={currentID} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
    )
}

export default Home