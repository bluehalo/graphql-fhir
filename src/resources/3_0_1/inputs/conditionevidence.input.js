const { GraphQLInputObjectType, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Condition.evidence Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ConditionEvidence_Input',
	description: 'Supporting Evidence / manifestations that are the basis on which this condition is suspected or confirmed.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/manifestation-or-symptom
		code: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A manifestation or symptom that led to the recording of this condition.'
		},
		detail: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Links to other relevant information, including pathology reports.'
		}
	})
});
