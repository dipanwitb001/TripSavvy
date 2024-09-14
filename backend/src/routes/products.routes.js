import { Router } from "express";
import { addProducts, updateProducts, deleteProduct} from "../controllers/product.controller.js";

import multer from "multer";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()
const upload = multer();

router.route('/addProducts').post(upload.none(),addProducts);
router.route('/updateProducts/:id').post(upload.none(),updateProducts);
router.route('/deleteProducts/:name').post(upload.none(),deleteProduct);

export default router;