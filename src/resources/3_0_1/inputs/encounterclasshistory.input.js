const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary EncounterClassHistory Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EncounterClassHistory_Input',
	description: 'The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transisions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kindof discharge from emergency to inpatient.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActEncounterCode
		class: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'inpatient | outpatient | ambulatory | emergency +.'
		},
		period: {
			type: new GraphQLNonNull(require('./period.input')),
			description: 'The time that the episode was in the specified class.'
		}
	})
});
