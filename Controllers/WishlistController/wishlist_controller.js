import { tb_wishlist } from "../../Models/wishlist_model.js";

const get_wishlist_details = async (req, res) => {
    try {
        const { user_name } = req.body;

        // Aggregate query with lookup
        const wishlist_details = await tb_wishlist.aggregate([
            {
                $match: { user_name: user_name }
            },
            {
                $lookup: {
                    from: "tb_products",          // The collection to join
                    localField: "wishlist_product_id",    // Field from tb_wishlist
                    foreignField: "product_id",         // Field from tb_product
                    as: "product_details"        // Output array field
                }
            }
        ]);

        if (wishlist_details && wishlist_details?.length > 0) {
            res.status(200).json(wishlist_details);
        } else {
            res.status(404).json({ result: 'Cart is empty' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ result: 'Internal server error' });
    }
};

const add_to_wishlist = async (req, res) => {
    try {
        const {wishlist_product_id, wishlist_product_color, wishlist_product_description, wishlist_product_ram, wishlist_product_internal_memory, wishlist_product_price, wishlist_product_quantity, user_address, user_name, user_role, wishlist_product_insurance} = req.body;
        const add_wishlist_data = new tb_wishlist({wishlist_product_id, wishlist_product_description, wishlist_product_color, wishlist_product_ram, wishlist_product_internal_memory, wishlist_product_price, wishlist_product_quantity, user_name, user_role, user_address, wishlist_product_insurance});
        const result = await add_wishlist_data.save();
        if(result) {
            res.status(200).json(result);
        } else{
            res.status(500).json({error: 'Error'});
        }

    } catch(error) {
        res.status(500).json({error: 'Unable to add the data in cart'});

    }
}

const remove_wishlist = async (req, res) => {
    try {
        const remove_wishlist_data = await tb_wishlist.deleteOne({wishlist_product_id: req.params.id});
        if(remove_wishlist_data.deletedCount === 1) {
            res.status(200).json(remove_wishlist_data);
        } else {
            res.status(404).json({error: 'No Product found with specified ID'});
        }
    } catch (error) {
        res.status(500).json({error});
    }
}

export {get_wishlist_details, add_to_wishlist, remove_wishlist};
