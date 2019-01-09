const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLBoolean,
	GraphQLFloat,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary CodeSystemconceptproperty Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CodeSystemconceptproperty_Input',
	description: '',
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
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_code: {
			type: require('./element.input.js'),
			description: 'A code that is a reference to CodeSystem.property.code.',
		},
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code that is a reference to CodeSystem.property.code.',
		},
		_valueCode: {
			type: require('./element.input.js'),
			description: 'The value of this property.',
		},
		valueCode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The value of this property.',
		},
		valueCoding: {
			type: new GraphQLNonNull(require('./coding.input.js')),
			description: 'The value of this property.',
		},
		_valueString: {
			type: require('./element.input.js'),
			description: 'The value of this property.',
		},
		valueString: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The value of this property.',
		},
		_valueInteger: {
			type: require('./element.input.js'),
			description: 'The value of this property.',
		},
		valueInteger: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'The value of this property.',
		},
		_valueBoolean: {
			type: require('./element.input.js'),
			description: 'The value of this property.',
		},
		valueBoolean: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'The value of this property.',
		},
		_valueDateTime: {
			type: require('./element.input.js'),
			description: 'The value of this property.',
		},
		valueDateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The value of this property.',
		},
		_valueDecimal: {
			type: require('./element.input.js'),
			description: 'The value of this property.',
		},
		valueDecimal: {
			type: new GraphQLNonNull(GraphQLFloat),
			description: 'The value of this property.',
		},
	}),
});
