const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ConceptMapGroupElementTargetDependsOn Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConceptMapGroupElementTargetDependsOn',
	description: 'A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		property: {
			type: new GraphQLNonNull(UriScalar),
			description: 'A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somwhere that is labeled to correspond with a code system property.'
		},
		_property: {
			type: require('./element.schema'),
			description: 'A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somwhere that is labeled to correspond with a code system property.'
		},
		system: {
			type: UriScalar,
			description: 'An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).'
		},
		_system: {
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
		},
		display: {
			type: GraphQLString,
			description: 'The display for the code. The display is only provided to help editors when editing the concept map.'
		},
		_display: {
			type: require('./element.schema'),
			description: 'The display for the code. The display is only provided to help editors when editing the concept map.'
		}
	})
});
