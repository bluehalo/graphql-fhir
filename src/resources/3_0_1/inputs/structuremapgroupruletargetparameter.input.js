const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInt,
	GraphQLFloat,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary StructureMapgroupruletargetparameter Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'StructureMapgroupruletargetparameter_Input',
	description: '',
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
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_valueId: {
			type: require('./element.input.js'),
			description: 'Parameter value - variable or literal.',
		},
		valueId: {
			type: new GraphQLNonNull(IdScalar),
			description: 'Parameter value - variable or literal.',
		},
		_valueString: {
			type: require('./element.input.js'),
			description: 'Parameter value - variable or literal.',
		},
		valueString: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Parameter value - variable or literal.',
		},
		_valueBoolean: {
			type: require('./element.input.js'),
			description: 'Parameter value - variable or literal.',
		},
		valueBoolean: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'Parameter value - variable or literal.',
		},
		_valueInteger: {
			type: require('./element.input.js'),
			description: 'Parameter value - variable or literal.',
		},
		valueInteger: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'Parameter value - variable or literal.',
		},
		_valueDecimal: {
			type: require('./element.input.js'),
			description: 'Parameter value - variable or literal.',
		},
		valueDecimal: {
			type: new GraphQLNonNull(GraphQLFloat),
			description: 'Parameter value - variable or literal.',
		},
	}),
});
