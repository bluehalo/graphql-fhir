const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary CodeSystem.concept.property Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CodeSystemConceptProperty',
	description: 'A property value for this concept.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code that is a reference to CodeSystem.property.code.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'A code that is a reference to CodeSystem.property.code.'
		},
		valueCode: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The value of this property.'
		},
		_valueCode: {
			type: require('./element.schema'),
			description: 'The value of this property.'
		},
		valueCoding: {
			type: new GraphQLNonNull(require('./coding.schema')),
			description: 'The value of this property.'
		},
		valueString: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The value of this property.'
		},
		_valueString: {
			type: require('./element.schema'),
			description: 'The value of this property.'
		},
		valueInteger: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'The value of this property.'
		},
		_valueInteger: {
			type: require('./element.schema'),
			description: 'The value of this property.'
		},
		valueBoolean: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'The value of this property.'
		},
		_valueBoolean: {
			type: require('./element.schema'),
			description: 'The value of this property.'
		},
		valueDateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The value of this property.'
		},
		_valueDateTime: {
			type: require('./element.schema'),
			description: 'The value of this property.'
		}
	})
});
