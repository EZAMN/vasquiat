import { GetProductsService } from '../getProducts.service';

const createInstance = () => {
  const productsRepository = {
    create: jest.fn(),
    getList: jest.fn(),
    get: jest.fn(),
  };

  const mockSound = {
    getPrice: jest.fn(),
    centsPerPlayback: 50,
  };

  const getSoundService = new GetProductsService({
    productsRepository,
  });

  return {
    getSoundService,
    productsRepository,
    mockSound,
  };
};

describe('#CreateProductService', () => {
  describe('#handle', () => {
    it('should properly call the repository with the category', () => {
      const { getSoundService, productsRepository } = createInstance();
      const filters = { category: 'foo' };

      getSoundService.handle(filters);

      expect(productsRepository.getList).toHaveBeenCalledWith({
        filters: {
          category: 'foo',
          minPrice: null,
          maxPrice: null,
        },
      });
    });

    it('should properly call the repository with the minPrice', () => {
      const { getSoundService, productsRepository } = createInstance();
      const filters = { category: 'foo', minPrice: 5 };

      getSoundService.handle(filters);

      expect(productsRepository.getList).toHaveBeenCalledWith({
        filters: {
          category: 'foo',
          minPrice: 5,
          maxPrice: null,
        },
      });
    });

    it('should properly call the repository with the maxPrice', () => {
      const { getSoundService, productsRepository } = createInstance();
      const filters = { category: 'foo', maxPrice: 5 };

      getSoundService.handle(filters);

      expect(productsRepository.getList).toHaveBeenCalledWith({
        filters: {
          category: 'foo',
          minPrice: null,
          maxPrice: 5,
        },
      });
    });
  });
});
