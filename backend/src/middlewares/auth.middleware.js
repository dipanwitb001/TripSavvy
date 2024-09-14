import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT =asyncHandler(async(req,res,next) => {
    try {
        const token=req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
    
        // if access token is present it will be retrieved from, or else if the user is using mobile application, then it will be retrieved from the header(learn more about this how tokens are set in mobile application), in webiste , token are send through cookies
    
    
        if(!token){
            throw new ApiError(401,"Unautthorized request")
        }
    
        //if token is present, from that access token , we have to retrieve the information about the uses(such as email,username,password[as defined in schema]) 
    
        // to retrieve the information, we need to decode the token for that we need to have the key(access) to the token. for that we are using jwt verify to decode the token using the token secret (stored in the env)
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(!user){
            throw new ApiError(401,"Invalid Access Token")
        }
    
        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401,error?.message || "Invalid Access Token")
    }

   


})