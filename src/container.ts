import Bottle from 'bottlejs';
import expressPromiseRouter from 'express-promise-router';

// Providers
import loggerProvider from './providers/logger';
import serverProvider from './providers/server';
import knexClient from './providers/knexClient';
import csvParser from './providers/csvParser';

// Context entrypoints
import endpointsProvider from './api/entrypoints';

const container = new Bottle();
const router = expressPromiseRouter();

const providers = [loggerProvider, knexClient, csvParser, endpointsProvider];

// Should always be the last.
providers.push(serverProvider);
providers.forEach((provider) => {
  provider(container, router);
});

export default container.container;
