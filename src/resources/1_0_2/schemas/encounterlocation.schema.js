const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary EncounterLocation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EncounterLocation',
	description: 'List of locations where  the patient has been during this encounter.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		location: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The location where the encounter takes place.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/encounter-location-status
		status: {
			type: CodeScalar,
			description: 'The status of the participants\' presence at the specified location during the period specified. If the participant is is no longer at the location, then the period will have an end date/time.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the participants\' presence at the specified location during the period specified. If the participant is is no longer at the location, then the period will have an end date/time.'
		},
		period: {
			type: require('./period.schema'),
			description: 'Time period during which the patient was present at the location.'
		}
	})
});
