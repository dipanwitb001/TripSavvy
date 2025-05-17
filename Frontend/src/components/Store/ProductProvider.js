// import {create} from "zustand"
// import axios from "axios"

// export const ProductProvider = create((set) => ({
//     products: [],
//     setProducts: (products) => set({ products }),


//     fetchProducts: async() => {

//         try{
//             const res = await axios.post('https://tripsavvy-backend.onrender.com/api/v1/products/getProducts');

//             set({ products:res.data.data});
//         }catch(e){
//             console.log("Error fetching products: ", e);
//         }

//         //set((state) => ({ products: [...state.products, data.data] }));
//     }
// }))
import { create } from "zustand";
import axios from "axios";

export const ProductProvider = create((set) => ({
  products: [],
  isLoading: false,

  setProducts: (products) => set({ products }),

  fetchProducts: async () => {
    set({ isLoading: true }); // start loading
    try {
      const res = await axios.post('https://tripsavvy-backend.onrender.com/api/v1/products/getProducts');
      set({ products: res.data.data });
    } catch (e) {
      console.log("Error fetching products: ", e);
    } finally {
      set({ isLoading: false }); // stop loading
    }
  },
}));
