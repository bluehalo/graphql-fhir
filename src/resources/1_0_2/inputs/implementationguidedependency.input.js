const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary ImplementationGuide.dependency Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImplementationGuideDependency_Input',
	description:
		'Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/guide-dependency-type
			type: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'How the dependency is represented when the guide is published.',
			},
			_type: {
				type: require('./element.input'),
				description:
					'How the dependency is represented when the guide is published.',
			},
			uri: {
				type: new GraphQLNonNull(UriScalar),
				description: 'Where the dependency is located.',
			},
			_uri: {
				type: require('./element.input'),
				description: 'Where the dependency is located.',
			},
		}),
});
