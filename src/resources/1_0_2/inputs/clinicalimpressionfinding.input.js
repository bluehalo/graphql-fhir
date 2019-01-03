const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ClinicalImpression.finding Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClinicalImpressionFinding_Input',
	description: 'Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		item: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Specific text of code for finding or diagnosis.'
		},
		cause: {
			type: GraphQLString,
			description: 'Which investigations support finding or diagnosis.'
		},
		_cause: {
			type: require('./element.input'),
			description: 'Which investigations support finding or diagnosis.'
		}
	})
});
