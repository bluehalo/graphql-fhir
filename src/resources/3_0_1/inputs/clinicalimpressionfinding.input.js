const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClinicalImpression.finding Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClinicalImpressionFinding_Input',
	description: 'Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		itemCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Specific text, code or reference for finding or diagnosis, which may include ruled-out or resolved conditions.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		itemReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Specific text, code or reference for finding or diagnosis, which may include ruled-out or resolved conditions.'
		},
		basis: {
			type: GraphQLString,
			description: 'Which investigations support finding or diagnosis.'
		},
		_basis: {
			type: require('./element.input'),
			description: 'Which investigations support finding or diagnosis.'
		}
	})
});
