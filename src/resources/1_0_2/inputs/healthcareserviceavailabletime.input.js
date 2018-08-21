const CodeScalar = require('../scalars/code.scalar');
const TimeScalar = require('../scalars/time.scalar');
const { GraphQLInputObjectType, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary HealthcareServiceAvailableTime Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'HealthcareServiceAvailableTime_Input',
	description: 'A collection of times that the Service Site is available.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/days-of-week
		daysOfWeek: {
			type: new GraphQLList(CodeScalar),
			description: 'Indicates which days of the week are available between the start and end Times.'
		},
		_daysOfWeek: {
			type: require('./element.input'),
			description: 'Indicates which days of the week are available between the start and end Times.'
		},
		allDay: {
			type: GraphQLBoolean,
			description: 'Is this always available? (hence times are irrelevant) e.g. 24 hour service.'
		},
		_allDay: {
			type: require('./element.input'),
			description: 'Is this always available? (hence times are irrelevant) e.g. 24 hour service.'
		},
		availableStartTime: {
			type: TimeScalar,
			description: 'The opening time of day. Note: If the AllDay flag is set, then this time is ignored.'
		},
		_availableStartTime: {
			type: require('./element.input'),
			description: 'The opening time of day. Note: If the AllDay flag is set, then this time is ignored.'
		},
		availableEndTime: {
			type: TimeScalar,
			description: 'The closing time of day. Note: If the AllDay flag is set, then this time is ignored.'
		},
		_availableEndTime: {
			type: require('./element.input'),
			description: 'The closing time of day. Note: If the AllDay flag is set, then this time is ignored.'
		}
	})
});
