import Joi from 'joi';

export const getProductsSchema = {
  query: Joi.object().keys({
    category: Joi.string(),
    minPrice: Joi.number(),
    maxPrice: Joi.number(),
  }),
};
