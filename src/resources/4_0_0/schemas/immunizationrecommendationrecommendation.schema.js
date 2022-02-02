const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary ImmunizationRecommendationrecommendation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImmunizationRecommendationrecommendation',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		vaccineCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Vaccine(s) or vaccine group that pertain to the recommendation.',
		},
		targetDisease: {
			type: require('./codeableconcept.schema.js'),
			description: 'The targeted disease for the recommendation.',
		},
		contraindicatedVaccineCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Vaccine(s) which should not be used to fulfill the recommendation.',
		},
		forecastStatus: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'Indicates the patient status with respect to the path to immunity for the target disease.',
		},
		forecastReason: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'The reason for the assigned forecast status.',
		},
		dateCriterion: {
			type: new GraphQLList(
				require('./immunizationrecommendationrecommendationdatecriterion.schema.js'),
			),
			description:
				'Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'Contains the description about the protocol under which the vaccine was administered.',
		},
		description: {
			type: GraphQLString,
			description:
				'Contains the description about the protocol under which the vaccine was administered.',
		},
		_series: {
			type: require('./element.schema.js'),
			description:
				'One possible path to achieve presumed immunity against a disease - within the context of an authority.',
		},
		series: {
			type: GraphQLString,
			description:
				'One possible path to achieve presumed immunity against a disease - within the context of an authority.',
		},
		_doseNumberPositiveInt: {
			type: require('./element.schema.js'),
			description:
				'Nominal position of the recommended dose in a series (e.g. dose 2 is the next recommended dose).',
		},
		doseNumberPositiveInt: {
			type: PositiveIntScalar,
			description:
				'Nominal position of the recommended dose in a series (e.g. dose 2 is the next recommended dose).',
		},
		_doseNumberString: {
			type: require('./element.schema.js'),
			description:
				'Nominal position of the recommended dose in a series (e.g. dose 2 is the next recommended dose).',
		},
		doseNumberString: {
			type: GraphQLString,
			description:
				'Nominal position of the recommended dose in a series (e.g. dose 2 is the next recommended dose).',
		},
		_seriesDosesPositiveInt: {
			type: require('./element.schema.js'),
			description: 'The recommended number of doses to achieve immunity.',
		},
		seriesDosesPositiveInt: {
			type: PositiveIntScalar,
			description: 'The recommended number of doses to achieve immunity.',
		},
		_seriesDosesString: {
			type: require('./element.schema.js'),
			description: 'The recommended number of doses to achieve immunity.',
		},
		seriesDosesString: {
			type: GraphQLString,
			description: 'The recommended number of doses to achieve immunity.',
		},
		supportingImmunization: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ImmunizationRecommendationrecommendationsupportingImmunization_supportingImmunization_Union',
					description:
						'Immunization event history and/or evaluation that supports the status and recommendation.',
					types: () => [
						require('./immunization.schema.js'),
						require('./immunizationevaluation.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Immunization') {
							return require('./immunization.schema.js');
						}
						if (data && data.resourceType === 'ImmunizationEvaluation') {
							return require('./immunizationevaluation.schema.js');
						}
					},
				}),
			),
			description:
				'Immunization event history and/or evaluation that supports the status and recommendation.',
		},
		supportingPatientInformation: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ImmunizationRecommendationrecommendationsupportingPatientInformation_supportingPatientInformation_Union',
					description:
						'Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.',
		},
	}),
});
