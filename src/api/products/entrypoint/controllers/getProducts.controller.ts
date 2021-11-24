export class GetProductsController {
  private readonly getProductsService;

  constructor({ getProductsService }) {
    this.getProductsService = getProductsService;
  }

  async handle(req, res) {
    const { category = null, minPrice = null, maxPrice = null } = req.query;

    const products = await this.getProductsService.handle({
      category,
      minPrice,
      maxPrice,
    });

    if (!products) res.sendStatus(404);
    if (products) res.json(products);
  }
}
