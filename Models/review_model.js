import mongoose from 'mongoose';

const review_schema = new mongoose.Schema({
    user_name: {
        type: String,
        required: [true,'Name is required']
        // required: false
    },
    review_title: {
        type: String,
        required: [true,'Title is required']
        // required: false
    },
    review_description: {
        type: String,
        required: [true,'Description is required']
        // required: false
    },
    review_product_id: {
        type: Number,
        required: [true,'Product ID is required']
        // required: false
    },
    user_role: {
        type: String,
        // required: false
        required: [true,'Description is required']
    }
})

export const tb_review =  mongoose.model('tb_review', review_schema);