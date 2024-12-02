// import mongoose from 'mongoose';

// const purchase_schema = new mongoose.Schema({
//     purchase_product_id: {
//         type: Number,
//         required: [true,'Product ID is required']
//     },
//     purchase_product_image: {
//         type: String,
//         required: [true,'Product Image is required']
//     },
//     purchase_product_description: {
//         type: String,
//         required: [true,'Product Description is required']
//     },
//     purchase_product_category: {
//         type: String,
//         required: [true,'Product Category is required']
//     },
//     purchase_product_brand: {
//         type: String,
//         required: [true,'Product Brand is required']
//     },
//     purchase_product_type: {
//         type: String,
//         required: [true,'Product Type is required']
//     },
//     purchase_product_color: {
//         type: String,
//         required: [true,'Product Color is required']
//     },
//     purchase_product_name: {
//         type: String,
//         required: [true,'Product Name is required']
//     },
//     purchase_product_price: {
//         type: Number,
//         required: [true,'Product Price is required']
//     },
//     purchase_product_quantity: {
//         type: Number,
//         required: [true,'Product Quantity is required']
//     },
//     purchase_product_size: {
//         type: String,
//         required: false
//     },
//     purchase_product_gender: {
//         type: String,
//         required: false
//     },
//     purchase_product_ram: {
//         type: String,
//         required: false
//     },
//     purchase_product_internal_memory: {
//         type: String,
//         required: false
//     },
//     purchase_product_operating_system: {
//         type: String,
//         required: false
//     },
//     purchase_product_hard_disk: {
//         type: String,
//         required: false
//     },
//     purchase_product_processor: {
//         type: String,
//         required: false
//     },
//     purchase_product_cpu_model: {
//         type: String,
//         required: false
//     },
//     purchase_product_screen: {
//         type: String,
//         required: false
//     },
//     purchase_product_graphic_card :{
//         type: String,
//         required: false
//     },
//     purchase_product_special_feature: {
//         type: String,
//         required: false
//     },
//     purchase_product_accessories: {
//         charger: {
//             type: String, 
//             required: false
//         },
//         back_cover: {
//             type: String, 
//             required: false
//         },
//         warrenty: {
//             type: String, 
//             required: false
//         },
//         earphones: {
//             type: String, 
//             required: false
//         }
//     },
//     purchase_product_insurance: {
//         type: Boolean,
//         required: false
//     },
//     user_name: {
//         type: String,
//         required: [true,'Name is required']
//     }
// })

// export const tb_purchase =  mongoose.model('tb_purchase', purchase_schema);





import mongoose from 'mongoose';

const purchase_schema = new mongoose.Schema({
    purchase_product_id: {
        type: Number,
        required: [true,'Product ID is required']
    },
    purchase_product_description: {
        type: String,
        required: [true,'Product Description is required']
    },
    purchase_product_price: {
        type: Number,
        required: [true,'Product Price is required']
    },
    purchase_product_color: {
        type: String,
        required: [true,'Product Color is required']
    },
    purchase_product_quantity: {
        type: Number,
        required: [true,'Product Quantity is required']
    },
    purchase_product_size: {
        type: String,
        required: false
    },
    purchase_product_gender: {
        type: String,
        required: false
    },
    purchase_product_ram: {
        type: String,
        required: false
    },
    purchase_product_internal_memory: {
        type: String,
        required: false
    },
    purchase_product_insurance: {
        type: Boolean,
        required: false
    },
    user_name: {
        type: String,
        required: [true,'Name is required']
    },
    user_phone_number: {
        type: String,
        required: [true,'Name is required']
    },
    user_email: {
        type: String,
        required: [true,'Name is required']
    },
    user_address: {
        type: String,
        required: [true,'Name is required']
    },
    purchase_product_payment_mode: {
        type: String,
        required: [true,'Payment Mode is required']
    },
    purchase_date: {
        type: String,
        required: [true,'Date is required']
    }
})

export const tb_purchase =  mongoose.model('tb_purchase', purchase_schema);