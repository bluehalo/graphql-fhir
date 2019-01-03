const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary EligibilityResponse.error Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EligibilityResponseError_Input',
	description: 'Mutually exclusive with Services Provided (Item).',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/adjudication-error
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'An error code,from a specified code system, which details why the eligibility check could not be performed.'
		}
	})
});
