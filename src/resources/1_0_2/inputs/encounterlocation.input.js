const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary EncounterLocation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EncounterLocation_Input',
	description: 'List of locations where  the patient has been during this encounter.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		location: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The location where the encounter takes place.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-location-status
		status: {
			type: CodeScalar,
			description: 'The status of the participants\' presence at the specified location during the period specified. If the participant is is no longer at the location, then the period will have an end date/time.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of the participants\' presence at the specified location during the period specified. If the participant is is no longer at the location, then the period will have an end date/time.'
		},
		period: {
			type: require('./period.input'),
			description: 'Time period during which the patient was present at the location.'
		}
	})
});
