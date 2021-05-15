const Sentry = require('@sentry/node');

const logger = require('@asymmetrik/node-fhir-server-core').loggers.get();

Sentry.init({
  dsn: process.env.SENTRY_DSN_SERVER,
  environment: process.env.NODE_ENV,
  release: process.env.GIT_TAG_VERSION,
});

process.on('uncaughtException', (err) => {
  logger.error('UNCAUGHT EXCEPTION: ', err);
  Sentry.captureException(err);
  process.exitCode = 1;
});

process.on('unhandledRejection', (err) => {
  logger.error('UNHANDLED REJECTION: ', err);
  Sentry.captureException(err);
  process.exitCode = 1;
});

module.exports = Sentry;
