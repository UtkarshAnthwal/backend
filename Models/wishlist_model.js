import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    wishlist_product_id: {
        type: Number,
        required: [true,'Product  is required']
    },
    wishlist_product_description: {type: String, required: [true, 'Product Description is required']},
    wishlist_product_ram: {type: String, required: false},
    wishlist_product_internal_memory: {type: String, required: false},
    wishlist_product_color: {type: String, required: false},
    wishlist_product_price: {type: Number, required: [true, 'Price is required']},
    wishlist_product_size: {type: String, required: false},
    wishlist_product_quantity: {type: Number, required: [true, 'Quantity is required']},
    wishlist_product_warrenty: {type: String, required: false},
    wishlist_product_insurance: {type: Boolean, required: false},
    user_name: {type: String, required: [true, 'User Name is required']},
    user_address: {type: String, required: [true, 'User Address is required']},
    user_role: {type: String, required: [true, 'User Role is required']},
})
export const tb_wishlist =  mongoose.model('tb_wishlist', wishlistSchema);