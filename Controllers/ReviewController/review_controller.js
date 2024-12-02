import {tb_review} from '../../Models/review_model.js';

const display_review = async(req, res) => {
    try {
        const {review_product_id} = req.body;
        const find_review = await tb_review.find({review_product_id});
        if(find_review) {
            res.status(200).json(find_review);
        } else {
            res.status(500).json({error: 'Unable to fetch data'});
        }
    } catch(error) {
        res.status(500).json({error});
    }
}

const post_review = async(req, res) => {
    try {
        const {user_name, review_title, review_description, review_product_id, user_role} = req.body;
        const add_review = new tb_review({user_name, review_title, review_description, review_product_id, user_role});
        const result = await add_review.save();
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(500).json({error: 'Unable to add the comment'});
        }
    } catch(error) {
        res.status(500).json({error});
    }
}
export {
    display_review, 
    post_review};
