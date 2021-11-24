import { CreateProductController } from './controllers/createProduct.controller';
import { GetProductsController } from './controllers/getProducts.controller';
import ProductsRoutes from './Products.routes';

const routes = ({ router, container }) => {
  const { container: c } = container;
  const controllers = {
    createProductController: new CreateProductController({
      createProductService: c.createProductService,
    }),

    getProductsController: new GetProductsController({
      getProductsService: c.getProductsService,
    }),
  };

  return ProductsRoutes({
    router,
    controllers,
  });
};

export default {
  routes,
};
