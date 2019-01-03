const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary EligibilityResponse.error Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EligibilityResponseError',
	description: 'Mutually exclusive with Services Provided (Item).',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			// ValueSetReference: http://hl7.org/fhir/ValueSet/adjudication-error
			code: {
				type: new GraphQLNonNull(require('./codeableconcept.schema')),
				description:
					'An error code,from a specified code system, which details why the eligibility check could not be performed.',
			},
		}),
});
