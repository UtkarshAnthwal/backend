import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    product_id: {
        type: Number,
        required: [true,'Product  is required']
    },
    product_description: {type: String, required: [true, 'Product Description is required']},
    product_ram: {type: String, required: false},
    product_internal_memory: {type: String, required: false},
    product_color: {type: String, required: false},
    product_price: {type: Number, required: [true, 'Price is required']},
    product_size: {type: String, required: false},
    product_quantity: {type: Number, required: [true, 'Quantity is required']},
    product_warrenty: {type: String, required: false},
    product_insurance: {type: Boolean, required: [true, 'Insurance Flag is required']},
    user_name: {type: String, required: [true, 'User Name is required']},
    user_address: {type: String, required: [true, 'User Address is required']},
    user_role: {type: String, required: [true, 'User Role is required']},
})
export const tb_cart =  mongoose.model('tb_cart', cartSchema);