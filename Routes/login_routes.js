import express from 'express';
import {get_login_details, sign_up_user, authenticated_user_details, delete_user} from '../Controllers/LoginController/login_controller.js';

const router = express.Router();

router.route('/user_details').get(get_login_details);
router.route('/sign_up').post(sign_up_user);
router.route('/authenticate_user').post(authenticated_user_details);
router.route('/delete_user/:id').delete(delete_user);