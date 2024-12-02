import {tb_product} from '../../Models/product_model.js';

const display_products = async(req, res) => {
    try {
        const product_details = await tb_product.find();
        console.log(product_details, 'Result');
        res.status(200).json(product_details);
    } catch(error) {
        console.log(error, 'Cannot fetch the products');
    }
}

const display_products_by_id = async(req, res) => {
    try {
        const product_details = await tb_product.findOne({product_id: req.params.id});
        console.log(product_details, 'Result');
        res.status(200).json(product_details);
    } catch(error) {
        console.log(error, 'Cannot fetch the products');
    }
}

export {display_products, display_products_by_id};
