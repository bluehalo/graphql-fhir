const { GraphQLInputObjectType, GraphQLBoolean, GraphQLList, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Conformance.rest.security Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConformanceRestSecurity_Input',
	description: 'Information about security implementation from an interface perspective - what a client needs to know.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		cors: {
			type: GraphQLBoolean,
			description: 'Server adds CORS headers when responding to requests - this enables javascript applications to use the server.'
		},
		_cors: {
			type: require('./element.input'),
			description: 'Server adds CORS headers when responding to requests - this enables javascript applications to use the server.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/restful-security-service
		service: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Types of security services are supported/required by the system.'
		},
		description: {
			type: GraphQLString,
			description: 'General description of how security works.'
		},
		_description: {
			type: require('./element.input'),
			description: 'General description of how security works.'
		},
		certificate: {
			type: new GraphQLList(require('./conformancerestsecuritycertificate.input')),
			description: 'Certificates associated with security profiles.'
		}
	})
});
