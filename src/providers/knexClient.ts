import knex from 'knex';
import knexConfig from '../../knexfile.js';

const knexClient = knex(knexConfig);

export default (container) => {
  container.factory('knexClient', () => knexClient);
};
