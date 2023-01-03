// PathNode
import path from 'node:path';

// Multer
import multer from 'multer';

// Multer = uploadImage
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  })
});

// useCases
import { listCategory } from './useCases/category/listCategory';
import { createCategory } from './useCases/category/createCategory';
import { deleteCategory } from './useCases/category/deleteCategory';
import { listChef } from './useCases/chef/listChef';
import { createChef } from './useCases/chef/createChef';
import { listCheftById } from './useCases/chef/listCheftById';
import { listChefByCategory } from './useCases/chef/listChefByCategory';
import { deleteChef } from './useCases/chef/deleteChef';
import { createProduct } from './useCases/products/createProduct';
import { listProductsByChef } from './useCases/products/listProductsByChef';
import { listOrder } from './useCases/order/listOrder';
import { createOrder } from './useCases/order/createOrder';
import { changeOrderStatus } from './useCases/order/changeOrderStatus';
import { deleteOrder } from './useCases/order/deleteOrder';

// Routes
import { Router } from 'express';

export const router = Router();

//List Category
router.get('/categories', listCategory);

//Create Category
router.post('/categories', upload.single('image'), createCategory);

//Delete Category
router.delete('/categories/:categoryId', deleteCategory);

//List Chef
router.get('/chefs', listChef);

//Create Chef
router.post('/chefs', upload.single('image'), createChef);

//List Chef By Id
router.get('/chefs/:chefsId', listCheftById);

//List Chef By Category
router.get('/categories/:categoryId/chefs', listChefByCategory);

//Delete Chef
router.delete('/chefs/:chefsId', deleteChef);

//Create Product
router.post('/products', upload.single('image'), createProduct);

//List Product By Chef
router.get('/chefs/:chefsId/products', listProductsByChef);

//List Order
router.get('/orders', listOrder);

//Create Order
router.post('/orders', createOrder);

//Change Order Status
router.patch('/orders/:orderId', changeOrderStatus);

//Delete Order
router.delete('/orders/:orderId', deleteOrder);
