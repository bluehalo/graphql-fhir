const { GraphQLInputObjectType } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary DocumentManifest.related Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DocumentManifestRelated_Input',
	description: 'Related identifiers or resources associated with the DocumentManifest.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		identifier: {
			type: require('./identifier.input'),
			description: 'Related identifier to this DocumentManifest.  For example, Order numbers, accession numbers, XDW workflow numbers.'
		},
		ref: {
			type: require('./reference.input'),
			description: 'Related Resource to this DocumentManifest. For example, Order, ProcedureRequest,  Procedure, EligibilityRequest, etc.'
		}
	})
});
