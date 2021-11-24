import Joi from 'joi';

export const createProductSchema = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    category: Joi.string().required(),
    price: Joi.number().required(),
  }),
};
