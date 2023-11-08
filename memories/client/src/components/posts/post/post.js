import React from 'react';
import { Card,CardActions,CardContent,CardMedia,Button,Typography } from '@mui/material';
import ThumbUp from './icons/thumbs-up-solid.svg';
import Delete from './icons/trash-solid.svg';
import Menu from './icons/ellipsis-solid.svg';
import moment from 'moment';
import './styles.css';
import {useDispatch} from 'react-redux';
import { deletePost,likePost } from '../../../actions/posts';


const Post = ({post,setCurrentId})=>{
    const dispatch=useDispatch();
    return(
        <Card className="card">
            <CardMedia className="media" image={post.selectedFile} title={post.title}>
            <div className="overlay">
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className='overlay2'>
                <Button style={{ color: 'white' }} size="small" onClick={()=>setCurrentId(post._id)}>
                    <img src={Menu} alt="Menu" className="menu"/>
                </Button>
            </div>
            </CardMedia>
            <div className='details'>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=>`#${tag}`)}</Typography>
            </div>
            <Typography className="title" variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className='cardActions'>
                <Button className='buttonlike' size="small" color="primary" onClick={()=>dispatch(likePost(post._id))}>
                    <span><img src={ThumbUp} alt="thumbup" className='thumb'/></span>
                    <span>Like</span>
                    <span>{post.likeCount}</span>
                </Button>
                <Button size="small" color="primary" onClick={()=>dispatch(deletePost(post._id))}>
                    <img src={Delete} alt="delete" className='delete'/>
                    Delete
                </Button>
            </CardActions>
        </Card>

    );
}
export default Post;