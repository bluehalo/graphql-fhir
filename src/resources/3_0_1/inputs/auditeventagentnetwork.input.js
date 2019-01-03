const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary AuditEvent.agent.network Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AuditEventAgentNetwork_Input',
	description:
		'Logical network location for application activity, if the activity has a network location.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			address: {
				type: GraphQLString,
				description:
					'An identifier for the network access point of the user device for the audit event.',
			},
			_address: {
				type: require('./element.input'),
				description:
					'An identifier for the network access point of the user device for the audit event.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/network-type
			type: {
				type: CodeScalar,
				description:
					'An identifier for the type of network access point that originated the audit event.',
			},
			_type: {
				type: require('./element.input'),
				description:
					'An identifier for the type of network access point that originated the audit event.',
			},
		}),
});
