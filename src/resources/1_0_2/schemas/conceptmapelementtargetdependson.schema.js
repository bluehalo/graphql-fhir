const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ConceptMapElementTargetDependsOn Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConceptMapElementTargetDependsOn',
	description: 'A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		element: {
			type: new GraphQLNonNull(UriScalar),
			description: 'A reference to a specific concept that holds a coded value. This can be an element in a FHIR resource, or a specific reference to a data element in a different specification (e.g. HL7 v2) or a general reference to a kind of data field, or a reference to a value set with an appropriately narrow definition.'
		},
		_element: {
			type: require('./element.schema'),
			description: 'A reference to a specific concept that holds a coded value. This can be an element in a FHIR resource, or a specific reference to a data element in a different specification (e.g. HL7 v2) or a general reference to a kind of data field, or a reference to a value set with an appropriately narrow definition.'
		},
		codeSystem: {
			type: new GraphQLNonNull(UriScalar),
			description: 'An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).'
		},
		_codeSystem: {
			type: require('./element.schema'),
			description: 'An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).'
		},
		code: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Identity (code or path) or the element/item/ValueSet that the map depends on / refers to.'
		},
		_code: {
			type: require('./element.schema'),
			description: 'Identity (code or path) or the element/item/ValueSet that the map depends on / refers to.'
		}
	})
});
