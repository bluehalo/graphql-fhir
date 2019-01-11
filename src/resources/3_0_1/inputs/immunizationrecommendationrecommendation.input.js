const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary ImmunizationRecommendationrecommendation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImmunizationRecommendationrecommendation_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_date: {
			type: require('./element.input.js'),
			description: 'The date the immunization recommendation was created.',
		},
		date: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The date the immunization recommendation was created.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/vaccine-code
		vaccineCode: {
			type: require('./codeableconcept.input.js'),
			description: 'Vaccine that pertains to the recommendation.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/immunization-recommendation-target-disease
		targetDisease: {
			type: require('./codeableconcept.input.js'),
			description: 'The targeted disease for the recommendation.',
		},
		_doseNumber: {
			type: require('./element.input.js'),
			description:
				'The next recommended dose number (e.g. dose 2 is the next recommended dose).',
		},
		doseNumber: {
			type: PositiveIntScalar,
			description:
				'The next recommended dose number (e.g. dose 2 is the next recommended dose).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/immunization-recommendation-status
		forecastStatus: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description: 'Vaccine administration status.',
		},
		dateCriterion: {
			type: new GraphQLList(
				require('./immunizationrecommendationrecommendationdatecriterion.input.js'),
			),
			description:
				'Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.',
		},
		protocol: {
			type: require('./immunizationrecommendationrecommendationprotocol.input.js'),
			description:
				'Contains information about the protocol under which the vaccine was administered.',
		},
		supportingImmunization: {
			type: new GraphQLList(GraphQLString),
			description:
				'Immunization event history that supports the status and recommendation.',
		},
		supportingPatientInformation: {
			type: new GraphQLList(GraphQLString),
			description:
				'Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.',
		},
	}),
});
