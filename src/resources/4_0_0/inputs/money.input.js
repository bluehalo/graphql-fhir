const {
	GraphQLString,
	GraphQLList,
	GraphQLFloat,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Money Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Money_Input',
	description:
		'Base StructureDefinition for Money Type: An amount of economic utility in some recognized currency.',
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
		_value: {
			type: require('./element.input.js'),
			description: 'Numerical value (with implicit precision).',
		},
		value: {
			type: GraphQLFloat,
			description: 'Numerical value (with implicit precision).',
		},
		_currency: {
			type: require('./element.input.js'),
			description: 'ISO 4217 Currency Code.',
		},
		currency: {
			type: CodeScalar,
			description: 'ISO 4217 Currency Code.',
		},
	}),
});
