import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';
import multer from 'multer';
import dotenv from 'dotenv';


dotenv.config({
    path: './env'
})


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// const submit = multer({dest:'backend/src/uploads'});

// routes

import userRouter from './routes/user.routes.js'
import productRouter from './routes/products.routes.js'


// routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/products", productRouter);

// router.post('/submit', upload.none(), (req, res) => {
//     console.log('Body:', req.body); // Form fields

//     res.send('Form-data without files handled successfully!');
// });
export {app}