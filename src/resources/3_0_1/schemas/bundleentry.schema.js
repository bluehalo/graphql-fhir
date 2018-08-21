const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary BundleEntry Schema
 */
module.exports = new GraphQLObjectType({
	name: 'BundleEntry',
	description: 'An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only).',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		fullUrl: {
			type: UriScalar,
			description: 'The Absolute URL for the resource.  The fullUrl SHALL not disagree with the id in the resource. The fullUrl is a version independent reference to the resource. The fullUrl element SHALL have a value except that:  * fullUrl can be empty on a POST (although it does not need to when specifying a temporary id for reference in the bundle) * Results from operations might involve resources that are not identified.'
		},
		_fullUrl: {
			type: require('./element.schema'),
			description: 'The Absolute URL for the resource.  The fullUrl SHALL not disagree with the id in the resource. The fullUrl is a version independent reference to the resource. The fullUrl element SHALL have a value except that:  * fullUrl can be empty on a POST (although it does not need to when specifying a temporary id for reference in the bundle) * Results from operations might involve resources that are not identified.'
		},
		resource: {
			type: require('./resourcelist.schema'),
			description: 'The Resources for the entry.'
		},
		search: {
			type: require('./bundleentrysearch.schema'),
			description: 'Information about the search process that lead to the creation of this entry.'
		},
		request: {
			type: require('./bundleentryrequest.schema'),
			description: 'Additional information about how this entry should be processed as part of a transaction.'
		},
		response: {
			type: require('./bundleentryresponse.schema'),
			description: 'Additional information about how this entry should be processed as part of a transaction.'
		}
	})
});
