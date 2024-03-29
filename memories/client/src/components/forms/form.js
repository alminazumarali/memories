import React,{useState,useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import './styles.css';
import { useDispatch } from 'react-redux';
import { createPost,updatePost } from '../../actions/posts.js'
// import { updatePost } from '../../../../server/controllers/posts';
import {useSelector} from 'react-redux';


const Forms=({currentID,setCurrentId})=>{
    const [postData,setPostData]=useState({
        creator:'',title:'',message:'',tags:'',selectedFile:''
    });
    const post=useSelector((state)=>currentID?state.posts.find((p)=>p._id=currentID):null);
    const dispatch=useDispatch();
    useEffect(()=>{
        if(post) setPostData(post);
    },[post])


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(currentID)
        {
            dispatch(updatePost(currentID,postData));
        }
        else{
            dispatch(createPost(postData));
        }
        clear();
    }
    const clear=()=>{
        setCurrentId(null);
        setPostData({creator:'',title:'',message:'',tags:'',selectedFile:''});

    }
    return(
        <Paper className="paper">
            <form autoComplete="off" noValidate className="form root" onSubmit={handleSubmit}>
                <Typography variant="h6">{currentID?'EDITING':'CREATING'} MEMORIES</Typography>
                <TextField name="creator"
                variant="outlined"
                label="creator"
                fullWidth
                value={postData.creator}
                onChange={(e)=>setPostData({...postData,creator:e.target.value})}
                />
                <TextField name="title"
                variant="outlined"
                label="title"
                fullWidth
                value={postData.title}
                onChange={(e)=>setPostData({...postData,title:e.target.value})}
                />
                <TextField name="message"
                variant="outlined"
                label="message"
                fullWidth
                value={postData.message}
                onChange={(e)=>setPostData({...postData,message:e.target.value})}
                />
                <TextField name="tags"
                variant="outlined"
                label="tags"
                fullWidth
                value={postData.tags}
                onChange={(e)=>setPostData({...postData,tags:e.target.value.split(',')})}
                />
                <div className="fileInput">
                    <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64})=>{
                        console.log('Base64 Data:', base64);
                        setPostData({...postData,selectedFile: base64});}} />
                </div>
                <Button className="buttonSubmit"
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth>Submit
                </Button>
                <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={clear}
                fullWidth>Clear
                </Button>
            </form>
        </Paper>

    );
}
export default Forms;