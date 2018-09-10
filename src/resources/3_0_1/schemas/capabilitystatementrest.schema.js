const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CapabilityStatement.rest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CapabilityStatementRest',
	description: 'A definition of the restful capabilities of the solution, if any.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/restful-capability-mode
		mode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.'
		},
		_mode: {
			type: require('./element.schema'),
			description: 'Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.'
		},
		documentation: {
			type: GraphQLString,
			description: 'Information about the system\'s restful capabilities that apply across all applications, such as security.'
		},
		_documentation: {
			type: require('./element.schema'),
			description: 'Information about the system\'s restful capabilities that apply across all applications, such as security.'
		},
		security: {
			type: require('./capabilitystatementrestsecurity.schema'),
			description: 'Information about security implementation from an interface perspective - what a client needs to know.'
		},
		resource: {
			type: new GraphQLList(require('./capabilitystatementrestresource.schema')),
			description: 'A specification of the restful capabilities of the solution for a specific resource type.'
		},
		interaction: {
			type: new GraphQLList(require('./capabilitystatementrestinteraction.schema')),
			description: 'A specification of restful operations supported by the system.'
		},
		operation: {
			type: new GraphQLList(require('./capabilitystatementrestoperation.schema')),
			description: 'Definition of an operation or a named query together with its parameters and their meaning and type.'
		},
		compartment: {
			type: new GraphQLList(UriScalar),
			description: 'An absolute URI which is a reference to the definition of a compartment that the system supports. The reference is to a CompartmentDefinition resource by its canonical URL .'
		},
		_compartment: {
			type: require('./element.schema'),
			description: 'An absolute URI which is a reference to the definition of a compartment that the system supports. The reference is to a CompartmentDefinition resource by its canonical URL .'
		}
	})
});
