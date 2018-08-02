const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ValueSetComposeIncludeConceptDesignation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ValueSetComposeIncludeConceptDesignation',
	description: 'Additional representations for this concept when used in this value set - other languages, aliases, specialized purposes, used for particular purposes, etc.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The language this designation is defined for.'
		},
		_language: {
			type: require('./element.schema'),
			description: 'The language this designation is defined for.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/designation-use
		use: {
			type: require('./coding.schema'),
			description: 'A code that details how this designation would be used.'
		},
		value: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The text value for this designation.'
		},
		_value: {
			type: require('./element.schema'),
			description: 'The text value for this designation.'
		}
	})
});
