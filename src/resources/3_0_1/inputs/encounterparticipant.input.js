const { GraphQLInputObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary EncounterParticipant Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EncounterParticipant_Input',
	description: 'The list of people responsible for providing the service.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-participant-type
		type: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Role of participant in encounter.'
		},
		period: {
			type: require('./period.input'),
			description: 'The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the overall encounter\'s period.'
		},
		individual: {
			type: require('./reference.input'),
			description: 'Persons involved in the encounter other than the patient.'
		}
	})
});
