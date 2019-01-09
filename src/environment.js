/**
 * WARNING: DO NOT PUT ANY SECRETS IN HERE, THIS IS ONLY INTENDED TO SETUP
 * SIMPLE FEATURE FLAGS. SECRETS SHOULD BE PART OF YOUR DEPLOYMENT STRATEGY
 */

if (process.env.NODE_ENV === 'development') {
	process.env.SOF_AUTHENTICATION = true;
	process.env.HAS_GRAPHIQL = true;
}

if (process.env.NODE_ENV === 'production') {
	process.env.SOF_AUTHENTICATION = true;
	process.env.HAS_GRAPHIQL = false;
}

if (process.env.NODE_ENV === 'test') {
	process.env.SOF_AUTHENTICATION = false;
	process.env.HAS_GRAPHIQL = false;
}
