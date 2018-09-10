const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary CodeSystem.concept.property Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CodeSystemConceptProperty_Input',
	description: 'A property value for this concept.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code that is a reference to CodeSystem.property.code.'
		},
		_code: {
			type: require('./element.input'),
			description: 'A code that is a reference to CodeSystem.property.code.'
		},
		valueCode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The value of this property.'
		},
		_valueCode: {
			type: require('./element.input'),
			description: 'The value of this property.'
		},
		valueCoding: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'The value of this property.'
		},
		valueString: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The value of this property.'
		},
		_valueString: {
			type: require('./element.input'),
			description: 'The value of this property.'
		},
		valueInteger: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'The value of this property.'
		},
		_valueInteger: {
			type: require('./element.input'),
			description: 'The value of this property.'
		},
		valueBoolean: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'The value of this property.'
		},
		_valueBoolean: {
			type: require('./element.input'),
			description: 'The value of this property.'
		},
		valueDateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The value of this property.'
		},
		_valueDateTime: {
			type: require('./element.input'),
			description: 'The value of this property.'
		}
	})
});
