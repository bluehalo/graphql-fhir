const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary TriggerDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TriggerDefinition',
	description: 'Base StructureDefinition for TriggerDefinition Type',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_type: {
			type: require('./element.schema.js'),
			description: 'The type of triggering event.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/trigger-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of triggering event.',
		},
		_eventName: {
			type: require('./element.schema.js'),
			description: 'The name of the event (if this is a named-event trigger).',
		},
		eventName: {
			type: GraphQLString,
			description: 'The name of the event (if this is a named-event trigger).',
		},
		eventTimingTiming: {
			type: require('./timing.schema.js'),
			description: 'The timing of the event (if this is a period trigger).',
		},
		eventTimingReference: {
			type: new GraphQLUnionType({
				name:
					'TriggerDefinitioneventTimingReference_eventTimingReference_Union',
				description: 'The timing of the event (if this is a period trigger).',
				types: () => [require('./schedule.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Schedule') {
						return require('./schedule.schema.js');
					}
				},
			}),
			description: 'The timing of the event (if this is a period trigger).',
		},
		_eventTimingDate: {
			type: require('./element.schema.js'),
			description: 'The timing of the event (if this is a period trigger).',
		},
		eventTimingDate: {
			type: DateScalar,
			description: 'The timing of the event (if this is a period trigger).',
		},
		_eventTimingDateTime: {
			type: require('./element.schema.js'),
			description: 'The timing of the event (if this is a period trigger).',
		},
		eventTimingDateTime: {
			type: DateTimeScalar,
			description: 'The timing of the event (if this is a period trigger).',
		},
		eventData: {
			type: require('./datarequirement.schema.js'),
			description:
				'The triggering data of the event (if this is a data trigger).',
		},
	}),
});
