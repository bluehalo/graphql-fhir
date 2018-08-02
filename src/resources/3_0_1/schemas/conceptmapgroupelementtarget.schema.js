const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ConceptMapGroupElementTarget Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConceptMapGroupElementTarget',
	description: 'A concept from the target value set that this concept maps to.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		code: {
			type: CodeScalar,
			description: 'Identity (code or path) or the element/item that the map refers to.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'Identity (code or path) or the element/item that the map refers to.'
		},
		display: {
			type: GraphQLString,
			description: 'The display for the code. The display is only provided to help editors when editing the concept map.'
		},
		_display: {
			type: require('./element.schema'),
			description: 'The display for the code. The display is only provided to help editors when editing the concept map.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/concept-map-equivalence
		equivalence: {
			type: CodeScalar,
			description: 'The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is \'wider\' than the source).'
		},
		_equivalence: {
			type: require('./element.schema'),
			description: 'The equivalence between the source and target concepts (counting for the dependencies and products). The equivalence is read from target to source (e.g. the target is \'wider\' than the source).'
		},
		comment: {
			type: GraphQLString,
			description: 'A description of status/issues in mapping that conveys additional information not represented in  the structured data.'
		},
		_comment: {
			type: require('./element.schema'),
			description: 'A description of status/issues in mapping that conveys additional information not represented in  the structured data.'
		},
		dependsOn: {
			type: new GraphQLList(require('./conceptmapgroupelementtargetdependson.schema')),
			description: 'A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.'
		}
	})
});
