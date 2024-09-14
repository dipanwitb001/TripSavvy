import mongoose,{Schema} from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price : {
        type: String,
        required: true

    },
    image: {
        type: String,
        required: true
    },
    duration : {
        type: Number,
        required: true
    },
},{
    timestamps : true
});

const Product = mongoose.model('Product', productSchema);

export default Product;