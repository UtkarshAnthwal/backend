import mongoose from 'mongoose';

const login_schema = new mongoose.Schema({
    user_name: {
        type: String,
        required: [true,'Name is required']
    },
    user_password: {
        type: String,
        required: [true,'Password is required']
    },
    user_email: {
        type: String,
        required: [true,'Email is required']
    },
    user_phone: {
        type: String,
        required: [true,'Phone Number is required']
    },
    user_address: {
        type: String,
        required: [true,'Address is required']
    },
    user_role: {
        type: String,
        required: [true,'Role is required']
    },
})

export const tb_login =  mongoose.model('tb_login', login_schema);