const CodeScalar = require('../scalars/code.scalar');
const {
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Contributor Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Contributor_Input',
	description: 'Base StructureDefinition for Contributor Type.',
	fields: () =>
		extendSchema(require('./element.input'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/contributor-type
			type: {
				type: new GraphQLNonNull(CodeScalar),
				description: 'The type of contributor.',
			},
			_type: {
				type: require('./element.input'),
				description: 'The type of contributor.',
			},
			name: {
				type: new GraphQLNonNull(GraphQLString),
				description:
					'The name of the individual or organization responsible for the contribution.',
			},
			_name: {
				type: require('./element.input'),
				description:
					'The name of the individual or organization responsible for the contribution.',
			},
			contact: {
				type: new GraphQLList(require('./contactdetail.input')),
				description:
					'Contact details to assist a user in finding and communicating with the contributor.',
			},
		}),
});
