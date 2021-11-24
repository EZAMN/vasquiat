export class CreateProductController {
  private readonly createProductService;

  constructor({ createProductService }) {
    this.createProductService = createProductService;
  }

  async handle(req, res) {
    const product = req.body;

    this.createProductService.handle({
      product,
    });

    res.sendStatus(200);
  }
}
