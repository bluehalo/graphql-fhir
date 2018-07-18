const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ClinicalImpressionFinding Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClinicalImpressionFinding',
	description: 'Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		item: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Specific text of code for finding or diagnosis.'
		},
		cause: {
			type: GraphQLString,
			description: 'Which investigations support finding or diagnosis.'
		},
		_cause: {
			type: require('./element.schema'),
			description: 'Which investigations support finding or diagnosis.'
		}
	})
});
