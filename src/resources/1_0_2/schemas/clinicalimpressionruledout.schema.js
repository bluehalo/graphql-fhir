const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClinicalImpressionRuledOut Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClinicalImpressionRuledOut',
	description: 'Diagnosis considered not possible.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		item: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Specific text of code for diagnosis.'
		},
		reason: {
			type: GraphQLString,
			description: 'Grounds for elimination.'
		},
		_reason: {
			type: require('./element.schema'),
			description: 'Grounds for elimination.'
		}
	})
});
