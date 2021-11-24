import filterObjectPropsFromFields from '../../../../libs/filterObjectPropsFromFields';
import { v4 as uuidv4 } from 'uuid';

export default class ProductsRepository {
  private readonly tableName;
  private readonly knexClient;
  private readonly fields;

  constructor({ knexClient }) {
    this.tableName = 'products';
    this.knexClient = knexClient;
    this.fields = [
      'id',
      'category',
      'name',
      'price',
      'created_at',
      'updated_at',
      'removed_at',
    ];
  }

  async get({ filters = {} }) {
    const [result] = await this.knexClient(this.tableName)
      .select(this.fields)
      .where(filters)
      .limit(1);

    return result || null;
  }

  async getList({ filters }) {
    const { minPrice, maxPrice, ...regularFilters } = filters;

    const result = await this.knexClient(this.tableName)
      .select(this.fields)
      .where(regularFilters)
      .modify((queryBuilder) => {
        if (minPrice) queryBuilder.andWhere('price', '>', minPrice);
        if (maxPrice) queryBuilder.andWhere('price', '<', maxPrice);
      });

    return result || [];
  }

  async create({ product }) {
    const id = uuidv4();
    const fields = filterObjectPropsFromFields(product, this.fields, [
      'created_at',
      'updated_at',
      'removed_at',
    ]);

    const result = await this.knexClient(this.tableName).insert({
      ...fields,
      id,
    });

    return result;
  }
}
