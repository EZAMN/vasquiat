// Packages
import winston from 'winston';
import { format } from 'date-fns';

const devFormat = winston.format.printf(({ level, message }) => {
  const now = format(new Date(), 'dd/MM/yyyy HH:mm:ss');
  return `[${level}][${now}] ${message.trim()}`;
});

const winstonLogger = winston.createLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    devFormat
  ),
});

export default (container) => {
  container.factory('logger', () => winstonLogger);
};
