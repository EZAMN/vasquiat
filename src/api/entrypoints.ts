import productsRoutes from './products/entrypoint/container';
import productsInjectable from './products/infrastructure/container';

const endpoints = [productsRoutes];
const factories = [productsInjectable];

/**
 * @param {Bottle} container
 */
export default (container, router) => {
  factories.forEach(({ factories }) => {
    factories(container);
  });

  endpoints.forEach(({ routes }) => {
    routes({ router, container });
  });

  container.factory('endpointsRoutes', () => router);
};
