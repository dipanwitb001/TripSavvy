import dotenv from "dotenv";
import { app } from "./app.js";


import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDb from "./db/index.js";


dotenv.config({
    path: './env'
})



connectDb()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is runnimg at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB CONNECTION ERROR: " ,err)
})