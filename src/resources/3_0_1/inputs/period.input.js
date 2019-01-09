const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Period Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Period_Input',
	description: 'Base StructureDefinition for Period Type',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_start: {
			type: require('./element.input.js'),
			description: 'The start of the period. The boundary is inclusive.',
		},
		start: {
			type: DateTimeScalar,
			description: 'The start of the period. The boundary is inclusive.',
		},
		_end: {
			type: require('./element.input.js'),
			description:
				'The end of the period. If the end of the period is missing, it means that the period is ongoing. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.',
		},
		end: {
			type: DateTimeScalar,
			description:
				'The end of the period. If the end of the period is missing, it means that the period is ongoing. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.',
		},
	}),
});
