import { when } from 'jest-when';
import { CreateProductService } from '../createProduct.service';

const createInstance = () => {
  const productsRepository = {
    create: jest.fn(),
    getList: jest.fn(),
    get: jest.fn(),
  };

  const productsNormalizer = {
    handle: jest.fn(),
  };

  const createSoundsService = new CreateProductService({
    productsRepository,
    productsNormalizer,
  });

  return {
    createSoundsService,
    productsRepository,
    productsNormalizer,
  };
};

describe('#CreateProductService', () => {
  describe('#handle', () => {
    it('should properly call the normalizer method', () => {
      const { createSoundsService, productsNormalizer } = createInstance();
      const product = { foo: 'bar' };

      createSoundsService.handle({ product });

      expect(productsNormalizer.handle).toHaveBeenCalledWith({
        product,
      });
    });

    it('should properly call the repository create method', () => {
      const { createSoundsService, productsNormalizer, productsRepository } =
        createInstance();
      const product = { foo: 'bar' };

      when(productsNormalizer.handle)
        .calledWith({ product })
        .mockReturnValue(product);

      createSoundsService.handle({ product });

      expect(productsRepository.create).toHaveBeenCalledWith({
        product,
      });
    });
  });
});
