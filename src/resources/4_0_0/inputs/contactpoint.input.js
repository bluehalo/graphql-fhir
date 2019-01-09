const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary ContactPoint Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ContactPoint_Input',
	description:
		'Base StructureDefinition for ContactPoint Type: Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_system: {
			type: require('./element.input.js'),
			description:
				'Telecommunications form for contact point - what communications system is required to make use of the contact.',
		},
		system: {
			type: CodeScalar,
			description:
				'Telecommunications form for contact point - what communications system is required to make use of the contact.',
		},
		_value: {
			type: require('./element.input.js'),
			description:
				'The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address).',
		},
		value: {
			type: GraphQLString,
			description:
				'The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address).',
		},
		_use: {
			type: require('./element.input.js'),
			description: 'Identifies the purpose for the contact point.',
		},
		use: {
			type: CodeScalar,
			description: 'Identifies the purpose for the contact point.',
		},
		_rank: {
			type: require('./element.input.js'),
			description:
				'Specifies a preferred order in which to use a set of contacts. ContactPoints with lower rank values are more preferred than those with higher rank values.',
		},
		rank: {
			type: PositiveIntScalar,
			description:
				'Specifies a preferred order in which to use a set of contacts. ContactPoints with lower rank values are more preferred than those with higher rank values.',
		},
		period: {
			type: require('./period.input.js'),
			description: 'Time period when the contact point was/is in use.',
		},
	}),
});
