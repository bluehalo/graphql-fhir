/**
 * 3rd party Error Tracking Middleware
 */
const Sentry = require('@sentry/node');

Sentry.init({ dsn: process.env.SENTRY_DSN });

process.on('uncaughtException', (err) => {
  Sentry.captureException(err);
  process.exit = 1;
});

process.on('unhandledRejection', (err) => {
  Sentry.captureException(err);
  process.exit = 1;
});

module.exports = Sentry;
