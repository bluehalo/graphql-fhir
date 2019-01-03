const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary AuditEvent.agent.network Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AuditEventAgentNetwork',
	description:
		'Logical network location for application activity, if the activity has a network location.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			address: {
				type: GraphQLString,
				description:
					'An identifier for the network access point of the user device for the audit event.',
			},
			_address: {
				type: require('./element.schema'),
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
				type: require('./element.schema'),
				description:
					'An identifier for the type of network access point that originated the audit event.',
			},
		}),
});
