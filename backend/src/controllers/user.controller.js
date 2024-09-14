// import { asyncHandler } from "../utils/asyncHandler.js";
// import { ApiError } from "../utils/ApiError.js";
// import {User} from "../models/user.model.js"
// import { ApiResponse } from "../utils/ApiResponse.js";
// import { response } from "express";
// import mongoose from "mongoose";



// const registerUser = asyncHandler( async (req,res) => {
//     //get user details from the frontend
//     //validation -not empty
//     //check if user already exists 
//     //create user object - create entry in db
//     //remove password and refresh token field from response
//     //check for user creation
//     //return res

//     const{fullName, username, email, phoneNumber,password,confirmPassword}= req.body;
//     console.log(req.body);

//     if(
//         [fullName, username,email, phoneNumber,password,confirmPassword].some((field)=>field?.trim()==="")
//     )
//     {
//         throw new ApiError(400,"All fields are required")
//     }
    
//     const existedUser = await User.findOne({
//         $or : [{email},{username}]
//     })

//     if(existedUser) {
//         throw new ApiError(409,"email is already in use")
//     }



//     if(password !== confirmPassword) {
//         throw new ApiError(408,"password did not match")
//     }

//     try{
//         console.log("Before creating user:", name);
//         const user = await User.create({
//             fullName,
//             username,
//             email,
//             phoneNumber,
//             password,
//             confirmPassword
//         });
    
    
//    const createdUser =  User.findById(user._id).select("-password -refreshToken -confirmPassword")
//    console.log(createdUser);

//    if(!createdUser)
//     {
//         throw new ApiError(500,"Something went wrong while registering the user");
//     }
   

//     // // Send success response
//     // return res.status(201).json(
//     //     new ApiResponse(200, userPlainObject, "User registered successfully")
//     // );

//     //    if(!createdUser)
//     //     {
//     //         throw new ApiError(500,"Something went wrong while registering the user");
//     //     }

//     return res
//     .status(201)
//     .json(
//         new ApiResponse(200, createdUser, "User registered successfully")
//     )
// }
// catch (error) {
//     console.error('Error creating user document:', error);
//         throw new ApiError(500, 'Error creating user document');
//  }

// })

// export {registerUser}

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import bcrypt from "bcrypt";

const generateAccessAndRefreshToken = async(usedId) =>{
    try{

        const user = await User.findById(usedId);
        const accessToken= user.generateAccessToken();
        const refreshToken=user.generateRefreshToken();

        // after generating refresh token, we need to to save it in the database so that the user dont have to enter the password again

        // userschema has the refresh token field

        user.refreshToken = refreshToken;

        // after putting the refresh token in the database, we are saving the refresh token but while while it will check for password field which is not provided here so here we usine validateBeforeSave to false so it will not run any validation checks before saving
        await user.save({validateBeforeSave: false});

        return {accessToken, refreshToken}

    }catch(error){
        console.log(error);
        throw new ApiError(500, "Something went wrong while generating refresh and access token");
    }
}



const registerUser = asyncHandler(async (req, res) => {
    // Extract user details from the request body
    const { fullName, username, email, phoneNumber, password, confirmPassword } = req.body;

    // Debug: Log request body
    console.log(req.body);

    // Validate that no field is empty
    if ([fullName, username, email, phoneNumber, password, confirmPassword].some(field => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    // Check if the user already exists by email or username
    const existedUser = await User.findOne({
        $or: [{ email }, { username }]
    });

    // If user exists, throw an error
    if (existedUser) {
        throw new ApiError(409, "Email or username is already in use");
    }

    // Check if the password matches the confirmation password
    if (password !== confirmPassword) {
        throw new ApiError(408, "Password did not match");
    }

    try {
        // Corrected log statement
        console.log("Before creating user:", fullName);

        // Create a new user in the database
        const user = await User.create({
            fullName,
            username,
            email,
            phoneNumber,
            password, // Note: confirmPassword is not saved in the database
        });

        // Retrieve the created user, excluding sensitive fields
        const createdUser = await User.findById(user._id).select("-password -refreshToken -confirmPassword");

        // Check if the user was created successfully
        if (!createdUser) {
            throw new ApiError(500, "Something went wrong while registering the user");
        }

        // Convert createdUser to a plain object to avoid circular references
        const userPlainObject = createdUser.toObject();

        // Send success response
        return res.status(201).json(
            new ApiResponse(200, userPlainObject, "User registered successfully")
        );
    } catch (error) {
        console.error('Error creating user document:', error);
        throw new ApiError(500, 'Error creating user document');
    }
});

const loginUser = asyncHandler(async(req,res) => {
        const {username,email,password} = req.body;
        console.log("Headers:", req.headers);
        console.log("Body:", req.body);
        console.log("Multer processed fields:", req.body);
        console.log("Request body",req.body);

        if([username, email, password].some(field => field?.trim() === "")){
            throw new ApiError(400, "All fields are required");
        }


        // const normalizedEmail = email.toLowerCase();
        const existedUser = await User.findOne({
            $or:[{username},{email}]
        }).select('password');

        console.log(existedUser);

        if(!existedUser){
            throw new ApiError(405,"Email is not registered");
        }

        const isMatch = await existedUser.isPasswordCorrect(password);

        //const isMatch = await User.isPasswordCorrect(password, existedUser.password);

        // const isMatch = await bcrypt.compare(password,existedUser.password);
        //const pass = await existedUser.select('password');

        if(!isMatch)
            {
                throw new ApiError(406,"Passwords do not match");
            }

        const {accessToken, refreshToken} = await generateAccessAndRefreshToken(existedUser._id)

        const loggedInUser = await User.findById(existedUser._id).select("-password -refreshToken");

        const options ={
            httpOnly: true,
            secure: true
        }
        
        return res
        .status(201)
        .cookie("accessToken", accessToken,options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(202,{existedUser: loggedInUser, accessToken, refreshToken},"User logged in successfully")
        )
}) ;


// to logout a user, first we need to remove the cookies and re-setting the refresh token(described in the schema)
const logoutUser = asyncHandler(async(req,res) => {
    await User.findByIdAndUpdate(
        req.user._id,{
            $set: {
                refreshToken: undefined
            }
        },
        {
            new : true,
        }
    )

    const options ={
        httpOnly: true,
        secure: true
    }
    
    return res
    .status(200)
    .clearCookie("accesstoken",options)
    .clearCookie("refreshtoken",options)
    .json(
        new ApiResponse(202,{},"User logged out successfully")
    )
})

export { registerUser, loginUser , logoutUser};
