const { GraphQLObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary CarePlanParticipant Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CarePlanParticipant',
	description: 'Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/participant-role
		role: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates specific responsibility of an individual within the care plan; e.g. \'Primary physician\', \'Team coordinator\', \'Caregiver\', etc.'
		},
		member: {
			type: require('./reference.schema'),
			description: 'The specific person or organization who is participating/expected to participate in the care plan.'
		}
	})
});
