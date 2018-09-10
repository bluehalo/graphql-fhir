const DateTimeScalar = require('../scalars/datetime.scalar');
const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImmunizationRecommendation.recommendation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImmunizationRecommendationRecommendation_Input',
	description: 'Vaccine administration recommendations.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		date: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The date the immunization recommendation was created.'
		},
		_date: {
			type: require('./element.input'),
			description: 'The date the immunization recommendation was created.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/vaccine-code
		vaccineCode: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Vaccine that pertains to the recommendation.'
		},
		doseNumber: {
			type: PositiveIntScalar,
			description: 'This indicates the next recommended dose number (e.g. dose 2 is the next recommended dose).'
		},
		_doseNumber: {
			type: require('./element.input'),
			description: 'This indicates the next recommended dose number (e.g. dose 2 is the next recommended dose).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/immunization-recommendation-status
		forecastStatus: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Vaccine administration status.'
		},
		dateCriterion: {
			type: new GraphQLList(require('./immunizationrecommendationrecommendationdatecriterion.input')),
			description: 'Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.'
		},
		protocol: {
			type: require('./immunizationrecommendationrecommendationprotocol.input'),
			description: 'Contains information about the protocol under which the vaccine was administered.'
		},
		supportingImmunization: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Immunization event history that supports the status and recommendation.'
		},
		supportingPatientInformation: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.'
		}
	})
});
