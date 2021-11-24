import { ProductNormalizer } from '../Product.normalizer';

const createInstance = () => {
  const productNormalizer = new ProductNormalizer();

  return {
    productNormalizer,
  };
};

describe('#ProductNormalizer', () => {
  describe('#normalizeFloat', () => {
    it('should normalize a float number', () => {
      const { productNormalizer } = createInstance();

      const result = productNormalizer.normalizeFloat({ number: 1.1115 });

      expect(result).toEqual('1.11');
    });
  });

  describe('#normalizeString', () => {
    it('should normalize a string', () => {
      const { productNormalizer } = createInstance();

      const result = productNormalizer.normalizeString({
        string: 'asdf\rasdf\x1a',
      });

      expect(result).toEqual('asdf\\rasdf\\z');
    });
  });
});
