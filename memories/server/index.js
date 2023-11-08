import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';
const app=express();
dotenv.config();
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts',postRoutes);

// const CONNECTION_URL='mongodb+srv://UmarAli:UmarAli123@memorycluster.p8ug9rl.mongodb.net/';
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>app.listen(PORT,()=>console.log(`server is running on port:${PORT}`)))
.catch((error)=>console.log(error.message));


// mongoose.model.set(useFindAndModify,false);