const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImmunizationRecommendationRecommendationDateCriterion Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImmunizationRecommendationRecommendationDateCriterion_Input',
	description: 'Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/immunization-recommendation-date-criterion
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.'
		},
		value: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The date whose meaning is specified by dateCriterion.code.'
		},
		_value: {
			type: require('./element.input'),
			description: 'The date whose meaning is specified by dateCriterion.code.'
		}
	})
});
