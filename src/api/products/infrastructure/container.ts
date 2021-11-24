import ProductsRepository from './repositories/Products.repository';
import { CreateProductService } from '../domain/services/createProduct.service';
import { GetProductsService } from '../domain/services/getProducts.service';
import { ProductNormalizer } from '../domain/normalizers/Product.normalizer';

const factories = (container) => {
  container.factory('productNormalizer', () => new ProductNormalizer());

  container.factory(
    'productsRepository',
    (c) => new ProductsRepository({ knexClient: c.knexClient })
  );

  container.factory(
    'getProductsService',
    (c) => new GetProductsService({ productsRepository: c.productsRepository })
  );

  container.factory(
    'createProductService',
    (c) =>
      new CreateProductService({
        productsRepository: c.productsRepository,
        productsNormalizer: c.productNormalizer,
      })
  );
};

export default {
  factories,
};
