// node dist/src/scripts/import-initial-csv/index.js

import { pMap } from 'promise-fun';
import container from '../../container.js';

const { logger, createProductService, readCSV } = container;

async function init({ file }) {
  const csvData = await readCSV(file);

  const result = await pMap(
    csvData,
    async ({ product_category, product_name, product_price }) => {
      const createResult = createProductService.handle({
        product: {
          category: product_category,
          name: product_name,
          price: product_price,
        },
      });

      return createResult;
    },
    { concurrency: 3 }
  );

  return result.filter((resultItem) => resultItem);
}

init({ file: './config/initial.csv' }).then((result) => {
  logger.info(`Total Products generated: ${result.length}`);
  logger.info('Done');
  process.exit();
});
