import { validatePayload } from '../../../middlewares/validatePayload';
import { authenticate } from '../../../middlewares/authenticate';
import { createProductSchema } from '../infrastructure/schemas/createProduct.schema';
import { getProductsSchema } from '../infrastructure/schemas/getProducts.schema';

export default ({ controllers, router }) => {
  const { createProductController, getProductsController } = controllers;

  router.post('/product', validatePayload(createProductSchema), (req, res) => {
    return createProductController.handle(req, res);
  });

  router.get(
    '/products',
    authenticate,
    validatePayload(getProductsSchema),
    (req, res) => {
      return getProductsController.handle(req, res);
    }
  );
};
