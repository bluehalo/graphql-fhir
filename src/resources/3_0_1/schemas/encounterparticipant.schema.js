const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Encounter.participant Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EncounterParticipant',
	description: 'The list of people responsible for providing the service.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-participant-type
			type: {
				type: new GraphQLList(require('./codeableconcept.schema')),
				description: 'Role of participant in encounter.',
			},
			period: {
				type: require('./period.schema'),
				description:
					"The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter's period.",
			},
			individual: {
				type: require('./reference.schema'),
				description:
					'Persons involved in the encounter other than the patient.',
			},
		}),
});
