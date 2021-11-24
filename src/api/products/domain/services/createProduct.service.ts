export class CreateProductService {
  private readonly productsRepository;
  private readonly productsNormalizer;

  constructor({ productsRepository, productsNormalizer }) {
    this.productsRepository = productsRepository;
    this.productsNormalizer = productsNormalizer;
  }

  async handle({ product }) {
    const normalizedProduct = this.productsNormalizer.handle({ product });

    const createResult = await this.productsRepository.create({
      product: normalizedProduct,
    });

    return createResult;
  }
}
