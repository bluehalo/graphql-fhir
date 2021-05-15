const env = require('var');
const scopeChecker = require('@asymmetrik/sof-scope-checker');
/**
 * Throws an error if no scope is valid for this request
 * @param {string} name
 * @param {string} action
 * @param {string} user
 * @param {?string} scope
 */
 module.exports.verifyHasValidScopes = (name, action, user, scope) => {
    if (env.AUTH_ENABLED === '1') {
        // http://www.hl7.org/fhir/smart-app-launch/scopes-and-launch-context/index.html
        /**
         * @type {string[]}
         */
        let scopes = parseScopes(scope);
        let {error, success} = scopeChecker(name, action, scopes);

        if (success) {
            return;
        }
        let errorMessage = 'user ' + user + ' with scopes [' + scopes + '] failed access check to [' + name + '.' + action + ']';
        console.info(errorMessage);
        throw new ForbiddenError(error.message + ': ' + errorMessage);
    }
};

/**
 * converts a space separated list of scopes into an array of scopes
 * @param {string} scope
 * @return {string[]}
 */
 let parseScopes = (scope) => {
    if (!scope) {
        return [];
    }
    return scope.split(' ');
};

