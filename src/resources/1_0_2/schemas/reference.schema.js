const { GraphQLObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Reference Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Reference',
	description: 'Base StructureDefinition for Reference Type.',
	fields: () => extendSchema(require('./element.schema'), {
		reference: {
			type: GraphQLString,
			description: 'A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with \'#\') refer to contained resources.'
		},
		_reference: {
			type: require('./element.schema'),
			description: 'A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with \'#\') refer to contained resources.'
		},
		display: {
			type: GraphQLString,
			description: 'Plain text narrative that identifies the resource in addition to the resource reference.'
		},
		_display: {
			type: require('./element.schema'),
			description: 'Plain text narrative that identifies the resource in addition to the resource reference.'
		}
	})
});
