/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/*import camelCaseKeys from 'camelcase-keys';
import lodash from 'lodash';*/

const camelCaseKeys = require('camelcase-keys');
const lodash = require('lodash');

module.exports = {
  client: 'mysql2',

  connection: {
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },

  debug: process.env.NODE_ENV !== 'production',

  migrations: {
    tableName: 'migrations',
    directory: './config/database/migrations',
  },

  seeds: {
    directory: './config/database/seeds',
  },

  postProcessResponse: (result) => {
    if (Array.isArray(result)) {
      return result.map((row) => row && camelCaseKeys(row));
    }
    if (result && typeof result === 'object') {
      return camelCaseKeys(result);
    }

    return result;
  },

  wrapIdentifier: (value, origImpl) => {
    return origImpl(value && lodash.snakeCase(value));
  },
};
