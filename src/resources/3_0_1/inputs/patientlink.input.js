const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Patient.link Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PatientLink_Input',
	description:
		'Link to another patient resource that concerns the same actual patient.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			other: {
				type: new GraphQLNonNull(require('./reference.input')),
				description: 'The other patient resource that the link refers to.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/link-type
			type: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'The type of link between this patient resource and another patient resource.',
			},
			_type: {
				type: require('./element.input'),
				description:
					'The type of link between this patient resource and another patient resource.',
			},
		}),
});
