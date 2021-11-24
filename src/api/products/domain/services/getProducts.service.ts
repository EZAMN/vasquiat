export class GetProductsService {
  private readonly productsRepository;

  constructor({ productsRepository }) {
    this.productsRepository = productsRepository;
  }

  async handle({ category, minPrice = null, maxPrice = null }) {
    const filters = {};

    if (category) filters['category'] = category;
    filters['minPrice'] = minPrice;
    filters['maxPrice'] = maxPrice;

    const products = await this.productsRepository.getList({ filters });

    return products;
  }
}
