const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CareTeam.participant Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CareTeamParticipant_Input',
	description: 'Identifies all people and organizations who are expected to be involved in the care team.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/participant-role
		role: {
			type: require('./codeableconcept.input'),
			description: 'Indicates specific responsibility of an individual within the care team, such as \'Primary care physician\', \'Trained social worker counselor\', \'Caregiver\', etc.'
		},
		member: {
			type: require('./reference.input'),
			description: 'The specific person or organization who is participating/expected to participate in the care team.'
		},
		onBehalfOf: {
			type: require('./reference.input'),
			description: 'The organization of the practitioner.'
		},
		period: {
			type: require('./period.input'),
			description: 'Indicates when the specific member or organization did (or is intended to) come into effect and end.'
		}
	})
});
