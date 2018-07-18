const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary TriggerDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TriggerDefinition',
	description: 'Base StructureDefinition for TriggerDefinition Type.',
	fields: () => extendSchema(require('./element.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/trigger-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of triggering event.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'The type of triggering event.'
		},
		eventName: {
			type: GraphQLString,
			description: 'The name of the event (if this is a named-event trigger).'
		},
		_eventName: {
			type: require('./element.schema'),
			description: 'The name of the event (if this is a named-event trigger).'
		},
		eventTimingTiming: {
			type: require('./timing.schema'),
			description: 'The timing of the event (if this is a period trigger).'
		},
		eventTimingReference: {
			type: require('./reference.schema'),
			description: 'The timing of the event (if this is a period trigger).'
		},
		eventTimingDate: {
			type: DateScalar,
			description: 'The timing of the event (if this is a period trigger).'
		},
		_eventTimingDate: {
			type: require('./element.schema'),
			description: 'The timing of the event (if this is a period trigger).'
		},
		eventTimingDateTime: {
			type: DateTimeScalar,
			description: 'The timing of the event (if this is a period trigger).'
		},
		_eventTimingDateTime: {
			type: require('./element.schema'),
			description: 'The timing of the event (if this is a period trigger).'
		},
		eventData: {
			type: require('./datarequirement.schema'),
			description: 'The triggering data of the event (if this is a data trigger).'
		}
	})
});
