import express from 'express';
import {get_login_details, sign_up_user, authenticated_user_details, delete_user, forgot_password, change_password} from '../Controllers/LoginController/login_controller.js';
import {display_products, display_products_by_id} from '../Controllers/ProductController/product_controller.js';
import {add_to_cart, delete_cart, get_cart_details, remove_cart_all_data} from '../Controllers/CartController/cart_controller.js';
import {add_to_wishlist, get_wishlist_details, remove_wishlist} from '../Controllers/WishlistController/wishlist_controller.js';
import {confirm_purchase_details, get_purchase_details} from '../Controllers/PurchaseController/purchase_controller.js';
import {display_review, post_review} from '../Controllers/ReviewController/review_controller.js';
import {get_admin_dashboard_details} from '../Controllers/Admin/admin_dashboard_controller.js';

const router = express.Router();

//login_controller_routes
router.route('/auth_services/user_details').get(get_login_details);
router.route('/auth_services/sign_up').post(sign_up_user);
router.route('/auth_services/authenticate_user').post(authenticated_user_details);
router.route('/auth_services/forgot_password').post(forgot_password);
router.route('/auth_services/delete_user/:id').delete(delete_user);
router.route('/auth_services/change_password').post(change_password);

//product_controller_routes
router.route('/product/display_products').get(display_products);
router.route('/product/display_products_by_id/:id').get(display_products_by_id);

//cart_controller_routes
router.route('/add_to_cart/display_cart').post(get_cart_details);
router.route('/add_to_cart/post_cart').post(add_to_cart);
router.route('/add_to_cart/remove_cart_data/:id').delete(delete_cart);
router.route('/add_to_cart/remove_all_cart_data/:name').delete(remove_cart_all_data);

//wishlist_controller_routes
router.route('/wishlist/display_wishlist').post(get_wishlist_details);
router.route('/wishlist/add_to_wishlist').post(add_to_wishlist);
router.route('/wishlist/remove_wishlist/:id').delete(remove_wishlist);

//purchase_controller_routes
router.route('/purchase/display_purchase_history').post(get_purchase_details);
router.route('/purchase/confirm_purchase_history').post(confirm_purchase_details);

//review_controller_routes
router.route('/review/display_review').post(display_review);
router.route('/review/add_review').post(post_review);

//admin_dashboard_controller_routes
router.route('/admin/display_dashboard').get(get_admin_dashboard_details);

export default router;