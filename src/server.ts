import container from './container';

const { server, logger } = container;
const port = parseInt(process.env.PORT, 10) || 3000;

(async () => {
  await server.listen(port);

  logger.info(
    `> Server listening at http://localhost:${port} as ${process.env.NODE_ENV}`
  );
})();
