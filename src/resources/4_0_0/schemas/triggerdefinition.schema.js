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
	description:
		'Base StructureDefinition for TriggerDefinition Type: A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_type: {
			type: require('./element.schema.js'),
			description: 'The type of triggering event.',
		},
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of triggering event.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'A formal name for the event. This may be an absolute URI that identifies the event formally (e.g. from a trigger registry), or a simple relative URI that identifies the event in a local context.',
		},
		name: {
			type: GraphQLString,
			description:
				'A formal name for the event. This may be an absolute URI that identifies the event formally (e.g. from a trigger registry), or a simple relative URI that identifies the event in a local context.',
		},
		timingTiming: {
			type: require('./timing.schema.js'),
			description: 'The timing of the event (if this is a periodic trigger).',
		},
		timingReference: {
			type: new GraphQLUnionType({
				name: 'TriggerDefinitiontimingReference_timingReference_Union',
				description: 'The timing of the event (if this is a periodic trigger).',
				types: () => [require('./schedule.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Schedule') {
						return require('./schedule.schema.js');
					}
				},
			}),
			description: 'The timing of the event (if this is a periodic trigger).',
		},
		_timingDate: {
			type: require('./element.schema.js'),
			description: 'The timing of the event (if this is a periodic trigger).',
		},
		timingDate: {
			type: DateScalar,
			description: 'The timing of the event (if this is a periodic trigger).',
		},
		_timingDateTime: {
			type: require('./element.schema.js'),
			description: 'The timing of the event (if this is a periodic trigger).',
		},
		timingDateTime: {
			type: DateTimeScalar,
			description: 'The timing of the event (if this is a periodic trigger).',
		},
		data: {
			type: new GraphQLList(require('./datarequirement.schema.js')),
			description:
				'The triggering data of the event (if this is a data trigger). If more than one data is requirement is specified, then all the data requirements must be true.',
		},
		condition: {
			type: require('./expression.schema.js'),
			description:
				'A boolean-valued expression that is evaluated in the context of the container of the trigger definition and returns whether or not the trigger fires.',
		},
	}),
});
