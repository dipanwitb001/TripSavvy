import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
//jwt is a bearer token

const userSchema = new Schema(
    {
        fullName :{
            required : true,
            type: String,
            index: true
        },
        username :{
            required : true,
            unique : true,
            type: String,
            lowercase : true,
            index: true
        },
        email :{
            required : true,
            unique : true,
            type: String,
            lowercase : true,
            index: true
        },
        phoneNumber :{
            required : true,
            unique : true,
            type: Number,
            index: true
        },
        password :{
            type : String,
            required : [true,"password is required"]
        },
        confirmPassword :{
            type : String,
            required : [true,"password is required"]
        },
        refreshToken :{
            type : String
        }
    },
    {
        timestamps: true
    }
)


// mongoose hook
userSchema.pre("save",async function(next) {


    // this checks if the user has not done any change in the password then it will only next() otherwise the password will be hashed

    // this is done because ,otherwise whenever user clicks on the save(for any purpose maybe after updating username ), the password will be hashed
    if(!this.isModified("password")) return next();

    this.password=bcrypt.hash(this.password,10)
    next()
})

// method is called isPasswordCorrect and is intended to verify whether a given password matches the stored hashed password for a user

userSchema.method.isPasswordCorrect = async function(password) {

    return await bcrypt.compare(password,this.password)


}



userSchema.methods.generateAccessToken = function(){
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName

        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    jwt.sign(
        {
            _id: this._id,

        },
        process.env.ACCESS_REFRESH_SECRET,
        {
            expiresIn: process.env.ACCESS_REFRESH_EXPIRY
        }
    )
}




export const User = mongoose.model("User", userSchema)