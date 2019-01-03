const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary ClinicalImpression.finding Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClinicalImpressionFinding',
	description: 'Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		itemCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Specific text, code or reference for finding or diagnosis, which may include ruled-out or resolved conditions.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		itemReference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Specific text, code or reference for finding or diagnosis, which may include ruled-out or resolved conditions.'
		},
		basis: {
			type: GraphQLString,
			description: 'Which investigations support finding or diagnosis.'
		},
		_basis: {
			type: require('./element.schema'),
			description: 'Which investigations support finding or diagnosis.'
		}
	})
});
