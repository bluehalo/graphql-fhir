const UriScalar = require('../scalars/uri.scalar');
const {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ValueSet.compose.include Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ValueSetComposeInclude_Input',
	description:
		'Include one or more codes from a code system or other value set(s).',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			system: {
				type: UriScalar,
				description:
					'An absolute URI which is the code system from which the selected codes come from.',
			},
			_system: {
				type: require('./element.input'),
				description:
					'An absolute URI which is the code system from which the selected codes come from.',
			},
			version: {
				type: GraphQLString,
				description:
					'The version of the code system that the codes are selected from.',
			},
			_version: {
				type: require('./element.input'),
				description:
					'The version of the code system that the codes are selected from.',
			},
			concept: {
				type: new GraphQLList(require('./valuesetcomposeincludeconcept.input')),
				description: 'Specifies a concept to be included or excluded.',
			},
			filter: {
				type: new GraphQLList(require('./valuesetcomposeincludefilter.input')),
				description:
					'Select concepts by specify a matching criteria based on the properties (including relationships) defined by the system. If multiple filters are specified, they SHALL all be true.',
			},
			valueSet: {
				type: new GraphQLList(UriScalar),
				description:
					'Selects concepts found in this value set. This is an absolute URI that is a reference to ValueSet.url.',
			},
			_valueSet: {
				type: require('./element.input'),
				description:
					'Selects concepts found in this value set. This is an absolute URI that is a reference to ValueSet.url.',
			},
		}),
});
