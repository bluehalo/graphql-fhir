const { GraphQLInputObjectType, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Reference Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Reference_Input',
	description: 'Base StructureDefinition for Reference Type.',
	fields: () => extendSchema(require('./element.input'), {
		reference: {
			type: GraphQLString,
			description: 'A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with \'#\') refer to contained resources.'
		},
		_reference: {
			type: require('./element.input'),
			description: 'A reference to a location at which the other resource is found. The reference may be a relative reference, in which case it is relative to the service base URL, or an absolute URL that resolves to the location where the resource is found. The reference may be version specific or not. If the reference is not to a FHIR RESTful server, then it should be assumed to be version specific. Internal fragment references (start with \'#\') refer to contained resources.'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'An identifier for the other resource. This is used when there is no way to reference the other resource directly, either because the entity is not available through a FHIR server, or because there is no way for the author of the resource to convert a known identifier to an actual location. There is no requirement that a Reference.identifier point to something that is actually exposed as a FHIR instance, but it SHALL point to a business concept that would be expected to be exposed as a FHIR instance, and that instance would need to be of a FHIR resource type allowed by the reference.'
		},
		display: {
			type: GraphQLString,
			description: 'Plain text narrative that identifies the resource in addition to the resource reference.'
		},
		_display: {
			type: require('./element.input'),
			description: 'Plain text narrative that identifies the resource in addition to the resource reference.'
		}
	})
});
