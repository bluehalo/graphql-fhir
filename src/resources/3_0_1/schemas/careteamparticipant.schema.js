const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CareTeamParticipant Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CareTeamParticipant',
	description: 'Identifies all people and organizations who are expected to be involved in the care team.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/participant-role
		role: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates specific responsibility of an individual within the care team, such as \'Primary care physician\', \'Trained social worker counselor\', \'Caregiver\', etc.'
		},
		member: {
			type: require('./reference.schema'),
			description: 'The specific person or organization who is participating/expected to participate in the care team.'
		},
		onBehalfOf: {
			type: require('./reference.schema'),
			description: 'The organization of the practitioner.'
		},
		period: {
			type: require('./period.schema'),
			description: 'Indicates when the specific member or organization did (or is intended to) come into effect and end.'
		}
	})
});
