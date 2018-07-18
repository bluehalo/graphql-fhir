const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ConceptMapElementTarget Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConceptMapElementTarget',
	description: 'A concept from the target value set that this concept maps to.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		codeSystem: {
			type: UriScalar,
			description: 'An absolute URI that identifies the code system of the target code (if the target is a value set that cross code systems).'
		},
		_codeSystem: {
			type: require('./element.schema'),
			description: 'An absolute URI that identifies the code system of the target code (if the target is a value set that cross code systems).'
		},
		code: {
			type: CodeScalar,
			description: 'Identity (code or path) or the element/item that the map refers to.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'Identity (code or path) or the element/item that the map refers to.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/concept-map-equivalence
		equivalence: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is \'wider\' than the source).'
		},
		_equivalence: {
			type: require('./element.schema'),
			description: 'The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is \'wider\' than the source).'
		},
		comments: {
			type: GraphQLString,
			description: 'A description of status/issues in mapping that conveys additional information not represented in  the structured data.'
		},
		_comments: {
			type: require('./element.schema'),
			description: 'A description of status/issues in mapping that conveys additional information not represented in  the structured data.'
		},
		dependsOn: {
			type: new GraphQLList(require('./conceptmapelementtargetdependson.schema')),
			description: 'A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.'
		}
	})
});
