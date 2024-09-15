import {create} from "zustand"
import axios from "axios"

export const ProductProvider = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),


    fetchProducts: async() => {

        try{
            const res = await axios.post('http://localhost:8000/api/v1/products/getProducts');

            set({ products:res.data.data});
        }catch(e){
            console.log("Error fetching products: ", e);
        }

        set((state) => ({ products: [...state.products, data.data] }));
    }
}))