const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ConceptMap.group.element.target.dependsOn Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConceptMapGroupElementTargetDependsOn_Input',
	description: 'A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		property: {
			type: new GraphQLNonNull(UriScalar),
			description: 'A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somwhere that is labeled to correspond with a code system property.'
		},
		_property: {
			type: require('./element.input'),
			description: 'A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somwhere that is labeled to correspond with a code system property.'
		},
		system: {
			type: UriScalar,
			description: 'An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).'
		},
		_system: {
			type: require('./element.input'),
			description: 'An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems).'
		},
		code: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Identity (code or path) or the element/item/ValueSet that the map depends on / refers to.'
		},
		_code: {
			type: require('./element.input'),
			description: 'Identity (code or path) or the element/item/ValueSet that the map depends on / refers to.'
		},
		display: {
			type: GraphQLString,
			description: 'The display for the code. The display is only provided to help editors when editing the concept map.'
		},
		_display: {
			type: require('./element.input'),
			description: 'The display for the code. The display is only provided to help editors when editing the concept map.'
		}
	})
});
