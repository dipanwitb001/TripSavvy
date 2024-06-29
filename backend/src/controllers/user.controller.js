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

export { registerUser };
