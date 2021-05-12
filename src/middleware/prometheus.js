/**
 * @description TAKEN FROM: https://community.tibco.com/wiki/monitoring-your-nodejs-apps-prometheus
 * The other prometheus libraries for express returned errors on Buffers.
 */
const client = require('prom-client');
const Register = require('prom-client').register;
const Counter = require('prom-client').Counter;
// const Histogram = require('prom-client').Histogram;
const Summary = require('prom-client').Summary;
const responseTime = require('response-time');
/**
 * A Prometheus counter that counts the invocations of the different HTTP verbs
 * e.g. a GET and a POST call will be counted as 2 different calls
 */
const numOfRequests = new Counter({
  name: 'numOfRequests',
  help: 'Number of requests made',
  labelNames: ['method'],
});

module.exports.numOfRequests = numOfRequests;

/**
 * A Prometheus counter that counts the invocations with different paths
 * e.g. /foo and /bar will be counted as 2 different paths
 */
const pathsTaken = new Counter({
  name: 'pathsTaken',
  help: 'Paths taken in the app',
  labelNames: ['path'],
});

module.exports.pathsTaken = pathsTaken;

/**
 * A Prometheus summary to record the HTTP method, path, response code and response time
 */
const responses = new Summary({
  name: 'responses',
  help: 'Response time in millis',
  labelNames: ['method', 'path', 'status'],
});

module.exports.responses = responses;

/**
 * This funtion will start the collection of metrics and should be called from within in the main js file
 */
module.exports.startCollection = function () {
  if (process.env.NODE_ENV !== 'test') {
    client.collectDefaultMetrics();
  }
};

/**
 * This function increments the counters that are executed on the request side of an invocation
 * Currently it increments the counters for numOfPaths and pathsTaken
 */
module.exports.requestCounters = function (req, res, next) {
  if (req.path !== '/metrics') {
    numOfRequests.inc({ method: req.method });
    pathsTaken.inc({ path: req.path });
  }
  next();
};

/**
 * This function increments the counters that are executed on the response side of an invocation
 * Currently it updates the responses summary
 */
const responseCounters = responseTime(function (req, res, time) {
  if (req.url !== '/metrics') {
    responses.labels(req.method, req.path, res.statusCode).observe(time);
  }
});

module.exports.responseCounters = responseCounters;

/**
 * In order to have Prometheus get the data from this app a specific URL is registered
 */
module.exports.injectMetricsRoute = function (app) {
  app.get('/metrics', async (req, res) => {
    res.set('Content-Type', Register.contentType);
    res.end(await Register.metrics());
  });
};

