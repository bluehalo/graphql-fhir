const CodeScalar = require('../scalars/code.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Provenance.entity Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ProvenanceEntity_Input',
	description: 'An entity used in this activity.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/provenance-entity-role
			role: {
				type: new GraphQLNonNull(CodeScalar),
				description: 'How the entity was used during the activity.',
			},
			_role: {
				type: require('./element.input'),
				description: 'How the entity was used during the activity.',
			},
			whatUri: {
				type: new GraphQLNonNull(UriScalar),
				description:
					'Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.',
			},
			_whatUri: {
				type: require('./element.input'),
				description:
					'Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.',
			},
			whatReference: {
				type: new GraphQLNonNull(require('./reference.input')),
				description:
					'Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.',
			},
			whatIdentifier: {
				type: new GraphQLNonNull(require('./identifier.input')),
				description:
					'Identity of the  Entity used. May be a logical or physical uri and maybe absolute or relative.',
			},
		}),
});
