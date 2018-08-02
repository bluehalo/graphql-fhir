const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary TriggerDefinition Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TriggerDefinition_Input',
	description: 'Base StructureDefinition for TriggerDefinition Type.',
	fields: () => extendSchema(require('./element.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/trigger-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of triggering event.'
		},
		_type: {
			type: require('./element.input'),
			description: 'The type of triggering event.'
		},
		eventName: {
			type: GraphQLString,
			description: 'The name of the event (if this is a named-event trigger).'
		},
		_eventName: {
			type: require('./element.input'),
			description: 'The name of the event (if this is a named-event trigger).'
		},
		eventTimingTiming: {
			type: require('./timing.input'),
			description: 'The timing of the event (if this is a period trigger).'
		},
		eventTimingReference: {
			type: require('./reference.input'),
			description: 'The timing of the event (if this is a period trigger).'
		},
		eventTimingDate: {
			type: DateScalar,
			description: 'The timing of the event (if this is a period trigger).'
		},
		_eventTimingDate: {
			type: require('./element.input'),
			description: 'The timing of the event (if this is a period trigger).'
		},
		eventTimingDateTime: {
			type: DateTimeScalar,
			description: 'The timing of the event (if this is a period trigger).'
		},
		_eventTimingDateTime: {
			type: require('./element.input'),
			description: 'The timing of the event (if this is a period trigger).'
		},
		eventData: {
			type: require('./datarequirement.input'),
			description: 'The triggering data of the event (if this is a data trigger).'
		}
	})
});
