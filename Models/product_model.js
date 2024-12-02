import mongoose from 'mongoose';

const product_schema = new mongoose.Schema({
    product_id: {
        type: Number,
        required: [true,'Product  is required']
    },
    product_image: {
        type: String,
        required: false,
    },
    product_brand: {
        type: String,
        required: [true,'Brand is required']
    },
    product_gender: {
        type: String,
        required: false,
    },
    product_category: {
        type: String,
        required: [true,'Product Category is required']
    },
    product_type: {
        type: String,
        required: [true,'Product Type is required']
    },
    product_name: {
        type: String,
        required: [true,'Product Name is required']
    },
    product_ram_latop: {
        type: String, 
        required: false
    },
    product_hard_disk: {
        type: String, 
        required: false
    },
    product_cpu_model: {
        type: String, 
        required: false
    },
    product_screen_size: {
        type: String, 
        required: false
    },
    product_special_feature: {
        type: String,
        required: false
    },
    product_graphic_card: {
        type: String, 
        required: false
    },
    product_ram: {
        type: String,
        required: false
    },
    product_internal_memory: {
        type: String,
        required: false
    },
    product_operating_system: {
        type: String,
        required: false
    },
    product_processor: {
        type: String,
        required: false
    },
    product_screen: {
        type: String,
        required: false
    },
    product_accessories: [
        {
            charger: {
                type: String, 
                required: false
            },
            back_cover: {
                type: String, 
                required: false
            },
            warrenty: {
                type: String, 
                required: false
            },
            earphones: {
                type: String, 
                required: false
            }
        },
    ],
    product_size: {
        type: String,
        required: false
    },
    product_color: {
        type: String,
        required: [true, 'Product Color is required']
    },
    product_price: {
        type: String,
        required: [true, 'Product Price is required']
    },
    product_warrenty: {
        type: String,
        required: [true, 'Product Price is required']
    },
    colors_available: [
        {
          label: {
            type: String, required: [true, 'Label is required']
        },
          color_code: {type: String, required: [true, 'Color Code is required']}
        },
    ],
    product_stock: {
        type: Number,
        required: [true, 'Product Price is required']
    },
})

export const tb_product =  mongoose.model('tb_product', product_schema);