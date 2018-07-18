const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ImmunizationRecommendationRecommendationDateCriterion Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImmunizationRecommendationRecommendationDateCriterion',
	description: 'Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/immunization-recommendation-date-criterion
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.'
		},
		value: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The date whose meaning is specified by dateCriterion.code.'
		},
		_value: {
			type: require('./element.schema'),
			description: 'The date whose meaning is specified by dateCriterion.code.'
		}
	})
});
