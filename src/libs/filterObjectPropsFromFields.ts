import lodash from 'lodash';
const { snakeCase } = lodash;

export default (object, fields, excludeFields = []) =>
  Object.entries(object).reduce((acc, [key, value]) => {
    if (
      fields.includes(snakeCase(key)) &&
      !excludeFields.includes(snakeCase(key))
    ) {
      acc[key] = value;
    }
    return acc;
  }, {});

export const excludeProps = (object, excludeFields = []) =>
  Object.entries(object).reduce((acc, [key, value]) => {
    if (!excludeFields.includes(snakeCase(key))) {
      acc[key] = value;
    }
    return acc;
  }, {});
