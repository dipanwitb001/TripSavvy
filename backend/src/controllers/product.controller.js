import Product from "../models/product.model.js";
import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { response } from "express";

const addProducts = asyncHandler(async(req, res) => {
    const {name, price, image, duration} = req.body;

    // if([name, price, image, duration].some(field => field?.trim() === ""))
    // {
    //     throw new ApiError(400, "All fields are required");
    // }

    if(!name || !price || !image || !duration)
    {
        throw new ApiError(400, "All fields are required");
    }

    const existedProduct = await Product.findOne({name});

    if(existedProduct) {
        throw new ApiError(409, "Product already exists")
    }


    try{
        const product = await Product.create({
            name,
            price,
            image,
            duration
        })

        const createdProduct = await Product.findById(product._id);

        if(!createdProduct)
        {
            throw new ApiError(500, "Something  has gone wrong while creating product")
        }

        const userPlainObject = createdProduct.toObject();

        // Send success response
        return res
        .status(201)
        .json(
            new ApiResponse(200, userPlainObject, "Product registered successfully")
        )
    }catch(err) {
        console.error('Error creating product document:', err.message);
        throw new ApiError(500, 'Error creating product document');
    }
    //creating a new product in the database using create keyword. we could have done ...first creating a new product using new keyword and then saving it in the database.
    

    
});

const updateProducts = asyncHandler(async(req,res) => {
    const {id} = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res
        .status(201)
        .json(
            new ApiResponse(200, "Invalid Product id")
        )
    }
    const existedProducts = await Product.findById(id);

    if(!existedProducts)
    {
        throw new ApiError(404, "Product not found");
    }

    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new : true});

        return res
        .status(200)
        .json(
            new ApiResponse(200, updateProducts, "Product updated successfully")
        )

    }catch(err) {
        throw new ApiError(500, "Error while updating", err);
    }
})

const deleteProduct = asyncHandler(async(req,res) => {
    const {name} = req.params;

    const product = await Product.findOne({name});
    if(!product) {
        return res
        .status(405)
        .json(
            new ApiResponse(404, "Product not found")
        )
    }

    try{
        await Product.findByIdAndDelete(product._id);
        return res
        .status(200)
        .json(
            new ApiResponse(200, "Product deleted successfully")
        )
    }catch(err){
        console.log(err);
        throw new ApiError(500,"Error in deleting the product: ", err);
    }
})

const getProducts = asyncHandler(async(req, res) => {
    try{
        const products = await Product.find({});

        return res
        .status(200)
        .json(
            new ApiResponse(200,products)
        )

    }catch(err){
        console.log(err);
        throw new ApiError(500,"Error in fetching");
    }
})

export {addProducts, updateProducts, deleteProduct,getProducts};