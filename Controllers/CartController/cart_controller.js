import { tb_cart } from '../../Models/cart_model.js';

const get_cart_details = async (req, res) => {
    try {
        const { user_name } = req.body;

        // Aggregate query with lookup
        const cart_details = await tb_cart.aggregate([
            {
                $match: { user_name: user_name }
            },
            {
                $lookup: {
                    from: "tb_products",          // The collection to join
                    localField: "product_id",    // Field from tb_cart
                    foreignField: "product_id",         // Field from tb_product
                    as: "product_details"        // Output array field
                }
            }
        ]);

        if (cart_details && cart_details?.length > 0) {
            res.status(200).json(cart_details);
        } else {
            res.status(404).json({ result: 'Cart is empty' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ result: 'Internal server error' });
    }
};

const add_to_cart = async (req, res) => {
    try {
        const {product_id, product_color, product_size, product_description, product_ram, product_internal_memory, product_price, product_quantity, user_address, user_name, user_role, product_insurance} = req.body;
        const cart_data_add = new tb_cart({product_id, product_description, product_color, product_size, product_ram, product_internal_memory, product_price, product_quantity, user_name, user_role, user_address, product_insurance});
        const result = await cart_data_add.save();
        if(result) {
            res.status(200).json(result);
        } else{
            res.status(500).json({error: 'Error'});
        }

    } catch(error) {
        res.status(500).json({error: 'Unable to add the data in cart'});

    }
}

const delete_cart = async (req, res) => {
    try {
        const delete_cart_data = await tb_cart.deleteOne({product_id: req.params.id});
        if(delete_cart_data.deletedCount === 1) {
            res.status(200).json(delete_cart_data);
        } else {
            res.status(404).json({error: 'No User found with specifies ID'});
        }
    } catch (error) {
        res.status(500).json({error});
    }
}

const remove_cart_all_data = async (req, res) => {
    try {
        const delete_cart_all_data = await tb_cart.deleteMany({user_name: req.params.name});
        if(delete_cart_all_data.deletedCount === 1) {
            res.status(200).json(delete_cart_all_data);
        } else {
            res.status(404).json({error: 'No User found with specifies ID'});
        }
    } catch (error) {
        res.status(500).json({error});
    }
}

export {get_cart_details, add_to_cart, delete_cart, remove_cart_all_data};
