import compress from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import healthcheck from 'express-healthcheck';
import helmet from 'helmet';

const server = express();

server.set('etag', false);
server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ limit: '50mb', extended: true }));

server.use(compress());
server.use(helmet());
server.use(cors());
server.use(cookieParser());

/**
 * @param {Bottle} container
 */
export default (container) => {
  const { endpointsRoutes } = container.container;

  server.use('/health', healthcheck());
  server.use(endpointsRoutes);

  container.factory('server', () => server);
};
