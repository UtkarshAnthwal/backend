import {tb_purchase} from '../../Models/purchase_model.js';

const get_purchase_details = async (req, res) => {
    try {
        const {user_name} = req.body;
        // const purchase_details = await tb_purchase.find({user_name});
        const purchase_details = await tb_purchase.aggregate([
            {
                $match: { user_name: user_name }
            },
            {
                $lookup: {
                    from: "tb_products",          // The collection to join
                    localField: "purchase_product_id",    // Field from tb_cart
                    foreignField: "product_id",         // Field from tb_product
                    as: "product_details"        // Output array field
                }
            }
        ]);
        // console.log(purchase_details);
        if(purchase_details?.length > 0) {
            res.status(200).json(purchase_details);
        } else {
            res.status(200).json({error: 'Unable to fetch the purchase details'})
        }
    } catch(error) {
        res.status(500).json({error: 'Unable to fetch the purchase details'});
    }
}

const confirm_purchase_details = async (req, res) => {
    try {
        // Get the array of purchase details from the request body
        const { purchase_details } = req.body;
        // Validate the presence of purchase_details and ensure it's an array
        if (!Array.isArray(purchase_details) || purchase_details.length === 0) {
            return res.status(400).json({ error: 'No purchase details provided' });
        }
        // Validate each item in the array
        const validatedDetails = purchase_details.map((detail) => {
            const {
                purchase_product_id,
                purchase_product_description,
                purchase_product_color,
                purchase_product_quantity,
                purchase_product_price,
                purchase_product_size,
                purchase_product_gender,
                purchase_product_ram,
                purchase_product_internal_memory,
                purchase_product_insurance,
                user_name,
                user_email,
                user_address,
                user_phone_number,
                purchase_product_payment_mode,
                purchase_date
            } = detail;
            // Check for required fields
            if (!purchase_product_id || !purchase_product_description || !purchase_product_color || !purchase_product_quantity || !purchase_product_price || !user_name) {
                throw new Error('Missing required fields');
            }
            // Optional fields can be checked if necessary, or simply ignored
            return {
                purchase_product_id,
                purchase_product_description,
                purchase_product_color,
                purchase_product_quantity,
                purchase_product_price,
                purchase_product_size,
                purchase_product_gender,
                purchase_product_ram,
                purchase_product_internal_memory,
                purchase_product_insurance,
                user_name,
                user_email,
                user_address,
                user_phone_number,
                purchase_product_payment_mode,
                purchase_date
            };
        });
        // Insert multiple documents into the collection
        const result = await tb_purchase.insertMany(validatedDetails);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error:', error.message);  // Log the error message for debugging
        res.status(400).json({ error: 'Invalid purchase details' });  // Adjust the status code and message based on the error
    }
};

export {get_purchase_details, confirm_purchase_details}