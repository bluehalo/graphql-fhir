const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLInt,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary ValueSetexpansionparameter Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ValueSetexpansionparameter',
	description: '',
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
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_name: {
			type: require('./element.schema.js'),
			description: 'The name of the parameter.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The name of the parameter.',
		},
		_valueString: {
			type: require('./element.schema.js'),
			description: 'The value of the parameter.',
		},
		valueString: {
			type: GraphQLString,
			description: 'The value of the parameter.',
		},
		_valueBoolean: {
			type: require('./element.schema.js'),
			description: 'The value of the parameter.',
		},
		valueBoolean: {
			type: GraphQLBoolean,
			description: 'The value of the parameter.',
		},
		_valueInteger: {
			type: require('./element.schema.js'),
			description: 'The value of the parameter.',
		},
		valueInteger: {
			type: GraphQLInt,
			description: 'The value of the parameter.',
		},
		_valueDecimal: {
			type: require('./element.schema.js'),
			description: 'The value of the parameter.',
		},
		valueDecimal: {
			type: GraphQLFloat,
			description: 'The value of the parameter.',
		},
		_valueUri: {
			type: require('./element.schema.js'),
			description: 'The value of the parameter.',
		},
		valueUri: {
			type: UriScalar,
			description: 'The value of the parameter.',
		},
		_valueCode: {
			type: require('./element.schema.js'),
			description: 'The value of the parameter.',
		},
		valueCode: {
			type: CodeScalar,
			description: 'The value of the parameter.',
		},
	}),
});
