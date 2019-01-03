const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary DocumentReference.context.related Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DocumentReferenceContextRelated_Input',
	description:
		'Related identifiers or resources associated with the DocumentReference.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			identifier: {
				type: require('./identifier.input'),
				description:
					'Related identifier to this DocumentReference. If both id and ref are present they shall refer to the same thing.',
			},
			ref: {
				type: require('./reference.input'),
				description:
					'Related Resource to this DocumentReference. If both id and ref are present they shall refer to the same thing.',
			},
		}),
});
