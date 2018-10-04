const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClinicalImpression.ruledOut Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClinicalImpressionRuledOut_Input',
	description: 'Diagnosis considered not possible.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		item: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Specific text of code for diagnosis.'
		},
		reason: {
			type: GraphQLString,
			description: 'Grounds for elimination.'
		},
		_reason: {
			type: require('./element.input'),
			description: 'Grounds for elimination.'
		}
	})
});
