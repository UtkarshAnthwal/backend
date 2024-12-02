import {tb_purchase} from '../../Models/purchase_model.js';

const get_admin_dashboard_details = async (req, res) => {
    try {
        const result = await tb_purchase.aggregate([
            {
                $group: {
                    _id:{
                        user_name: '$user_name',
                        user_email: '$user_email',
                        user_phone: '$user_phone_number',
                    },
                    total_quantity: { $sum: '$purchase_product_quantity' }, // Sum up the quantity
                    total_price: { $sum: '$purchase_product_price' } // Sum up the price
                },
            },
            {
                $project: {
                    _id: 0, // Exclude _id field from the result
                    user_name: '$_id.user_name', // Rename _id field to user_name
                    user_email: '$_id.user_email',
                    user_phone: '$_id.user_phone',
                    total_quantity: 1,
                    total_price: 1
                }
            }
        ]);

        console.log(result, 'Result');
        res.status(200).json(result);
    } catch (error) {
        console.log(error, 'Error');
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export {get_admin_dashboard_details};
