const { GraphQLObjectType, GraphQLBoolean, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary CapabilityStatementRestSecurity Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CapabilityStatementRestSecurity',
	description: 'Information about security implementation from an interface perspective - what a client needs to know.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		cors: {
			type: GraphQLBoolean,
			description: 'Server adds CORS headers when responding to requests - this enables javascript applications to use the server.'
		},
		_cors: {
			type: require('./element.schema'),
			description: 'Server adds CORS headers when responding to requests - this enables javascript applications to use the server.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/restful-security-service
		service: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Types of security services that are supported/required by the system.'
		},
		description: {
			type: GraphQLString,
			description: 'General description of how security works.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'General description of how security works.'
		},
		certificate: {
			type: new GraphQLList(require('./capabilitystatementrestsecuritycertificate.schema')),
			description: 'Certificates associated with security profiles.'
		}
	})
});
