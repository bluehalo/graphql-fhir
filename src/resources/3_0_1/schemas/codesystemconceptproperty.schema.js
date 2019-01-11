const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary CodeSystemconceptproperty Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CodeSystemconceptproperty',
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
		_code: {
			type: require('./element.schema.js'),
			description: 'A code that is a reference to CodeSystem.property.code.',
		},
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code that is a reference to CodeSystem.property.code.',
		},
		_valueCode: {
			type: require('./element.schema.js'),
			description: 'The value of this property.',
		},
		valueCode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The value of this property.',
		},
		valueCoding: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description: 'The value of this property.',
		},
		_valueString: {
			type: require('./element.schema.js'),
			description: 'The value of this property.',
		},
		valueString: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The value of this property.',
		},
		_valueInteger: {
			type: require('./element.schema.js'),
			description: 'The value of this property.',
		},
		valueInteger: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'The value of this property.',
		},
		_valueBoolean: {
			type: require('./element.schema.js'),
			description: 'The value of this property.',
		},
		valueBoolean: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'The value of this property.',
		},
		_valueDateTime: {
			type: require('./element.schema.js'),
			description: 'The value of this property.',
		},
		valueDateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The value of this property.',
		},
	}),
});
