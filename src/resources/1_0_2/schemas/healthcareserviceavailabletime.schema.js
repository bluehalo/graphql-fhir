const CodeScalar = require('../scalars/code.scalar');
const TimeScalar = require('../scalars/time.scalar');
const { GraphQLObjectType, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary HealthcareService.availableTime Schema
 */
module.exports = new GraphQLObjectType({
	name: 'HealthcareServiceAvailableTime',
	description: 'A collection of times that the Service Site is available.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/days-of-week
		daysOfWeek: {
			type: new GraphQLList(CodeScalar),
			description: 'Indicates which days of the week are available between the start and end Times.'
		},
		_daysOfWeek: {
			type: require('./element.schema'),
			description: 'Indicates which days of the week are available between the start and end Times.'
		},
		allDay: {
			type: GraphQLBoolean,
			description: 'Is this always available? (hence times are irrelevant) e.g. 24 hour service.'
		},
		_allDay: {
			type: require('./element.schema'),
			description: 'Is this always available? (hence times are irrelevant) e.g. 24 hour service.'
		},
		availableStartTime: {
			type: TimeScalar,
			description: 'The opening time of day. Note: If the AllDay flag is set, then this time is ignored.'
		},
		_availableStartTime: {
			type: require('./element.schema'),
			description: 'The opening time of day. Note: If the AllDay flag is set, then this time is ignored.'
		},
		availableEndTime: {
			type: TimeScalar,
			description: 'The closing time of day. Note: If the AllDay flag is set, then this time is ignored.'
		},
		_availableEndTime: {
			type: require('./element.schema'),
			description: 'The closing time of day. Note: If the AllDay flag is set, then this time is ignored.'
		}
	})
});
