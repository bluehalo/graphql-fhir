const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Encounter.statusHistory Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EncounterStatusHistory_Input',
	description:
		'The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-status
			status: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'planned | arrived | triaged | in-progress | onleave | finished | cancelled +.',
			},
			_status: {
				type: require('./element.input'),
				description:
					'planned | arrived | triaged | in-progress | onleave | finished | cancelled +.',
			},
			period: {
				type: new GraphQLNonNull(require('./period.input')),
				description: 'The time that the episode was in the specified status.',
			},
		}),
});
