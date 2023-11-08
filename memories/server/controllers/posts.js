import Postmessage from '../models/postmessage.js';
import mongoose from 'mongoose';

export const getPosts=async(req,res)=>{
    try{
        const postmessage=await Postmessage.find();
        res.status(200).json(postmessage);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}

export const createPost=async(req,res)=>{
    const post=req.body;
    const newPost=new Postmessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch(error){
        res.status(409).json({message:error.message});
    }
}

export const updatePost=async(req,res)=>{
    const{id:_id}=req.params;
    const post=req.body;
    if(!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No post with that id');
    const updatedPost=await Postmessage.findByIdAndUpdate(_id,{...post,_id},{new:true});
    res.json(updatedPost);
    // try {
    //     const updatedPost = await Postmessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    //     if (!updatedPost) {
    //         return res.status(404).json({ message: 'No post found with that ID' });
    //     }
    //     console.log(updatedPost);
    //     res.json(updatedPost);
    //     } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ message: 'Something went wrong' });
    // }
}
export const deletePost=async(req,res)=>{
    const{id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No post with that id');
    await Postmessage.findByIdAndRemove(id);
    res.json({message:'Post deleted successfully'});
}
export const likePost=async(req,res)=>{
    const{id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No post with that id');
    const post=await Postmessage.findById(id);
    const updatedPost=await Postmessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true});
    res.json(updatedPost);
}


    