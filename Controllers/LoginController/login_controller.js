import {tb_login} from '../../Models/login_model.js';

const get_login_details = async(req, res) => {
    try {
        const myData = await tb_login.find();
        console.log(myData, 'Result');
        res.status(200).json(myData);
    } catch(error) {
        console.log(error, 'Error');
    }
}

const forgot_password = async(req, res) => {
    try{
        const {user_phone} = req.body;
        const result = await tb_login.findOne({user_phone});
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(500).json({error: 'User Does Not Exist'});
        }

    } catch (error) {
        res.status(500).json({error: 'User Does Not Exist'});
    }
}

const change_password = async(req, res) => {
    try{
        const {user_name, user_phone, user_password, user_role, user_email, user_address} = req.body;
             // Specify the filter to find the document
             const filter = { user_phone };

             // Specify the update operation
             const update = {
                 $set: {
                     user_name,
                     user_password,
                     user_role,
                     user_email,
                     user_address
                 }
             };
     
             // Perform the update operation
             let password_change = await tb_login.updateOne(filter, update);
        if (password_change) {
            res.status(200).json(password_change);
        } else {
            res.status(404).json({ error: 'No user found with the provided phone number' });
        }
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({error: 'An error ouccured'});
    }
}

const authenticated_user_details = async(req, res) => {
    try {
        const {user_phone, user_password} = req.body;
        const authenticate_user = await tb_login.findOne({user_phone, user_password});
        if(authenticate_user)
            res.status(200).json(authenticate_user);
        else
            res.status(500).json({error: 'User is not present'});
    } catch(error) {
        console.log(error, 'Error');
        res.status(500).json({error})
    }
}

const sign_up_user = async(req, res) => {
    try {
        const {user_name, user_email, user_phone, user_password, user_address} = req.body;
        const add_up_user = new tb_login({user_name,user_name, user_email, user_phone, user_password, user_role: 'client', user_address});
        const result = await add_up_user.save();
        res.status(200).json(result);
    } catch(error) {
        res.status(500).json({error});
    }
}

const delete_user = async(req, res) => {
    try {
        const delete_client = await tb_login.deleteOne({_id: req.params.id});
        if(delete_client.deletedCount === 1) {
            res.status(200).json(delete_client);
        } else {
            res.status(404).json({error: 'No User found with specifies ID'});
        }
    } catch (error) {
        res.status(500).json({error});
    }
}

export {get_login_details, sign_up_user, authenticated_user_details, delete_user, forgot_password, change_password};
