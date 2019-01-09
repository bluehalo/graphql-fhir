const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary RiskAssessment Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'RiskAssessment_Input',
	description: 'Base StructureDefinition for RiskAssessment Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'RiskAssessment_Enum_input',
					values: { RiskAssessment: { value: 'RiskAssessment' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: require('./identifier.input.js'),
			description: 'Business identifier assigned to the risk assessment.',
		},
		basedOn: {
			type: GraphQLString,
			description:
				'A reference to the request that is fulfilled by this risk assessment.',
		},
		parent: {
			type: GraphQLString,
			description:
				'A reference to a resource that this risk assessment is part of, such as a Procedure.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'The status of the RiskAssessment, using the same statuses as an Observation.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/observation-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of the RiskAssessment, using the same statuses as an Observation.',
		},
		method: {
			type: require('./codeableconcept.input.js'),
			description:
				'The algorithm, process or mechanism used to evaluate the risk.',
		},
		code: {
			type: require('./codeableconcept.input.js'),
			description: 'The type of the risk assessment performed.',
		},
		subject: {
			type: GraphQLString,
			description: 'The patient or group the risk assessment applies to.',
		},
		context: {
			type: GraphQLString,
			description: 'The encounter where the assessment was performed.',
		},
		_occurrenceDateTime: {
			type: require('./element.input.js'),
			description:
				'The date (and possibly time) the risk assessment was performed.',
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description:
				'The date (and possibly time) the risk assessment was performed.',
		},
		occurrencePeriod: {
			type: require('./period.input.js'),
			description:
				'The date (and possibly time) the risk assessment was performed.',
		},
		condition: {
			type: GraphQLString,
			description:
				'For assessments or prognosis specific to a particular condition, indicates the condition being assessed.',
		},
		performer: {
			type: GraphQLString,
			description:
				'The provider or software application that performed the assessment.',
		},
		reasonCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description: 'The reason the risk assessment was performed.',
		},
		reasonReference: {
			type: GraphQLString,
			description: 'The reason the risk assessment was performed.',
		},
		basis: {
			type: new GraphQLList(GraphQLString),
			description:
				'Indicates the source data considered as part of the assessment (FamilyHistory, Observations, Procedures, Conditions, etc.).',
		},
		prediction: {
			type: new GraphQLList(require('./riskassessmentprediction.input.js')),
			description: 'Describes the expected outcome for the subject.',
		},
		_mitigation: {
			type: require('./element.input.js'),
			description:
				'A description of the steps that might be taken to reduce the identified risk(s).',
		},
		mitigation: {
			type: GraphQLString,
			description:
				'A description of the steps that might be taken to reduce the identified risk(s).',
		},
		_comment: {
			type: require('./element.input.js'),
			description: 'Additional comments about the risk assessment.',
		},
		comment: {
			type: GraphQLString,
			description: 'Additional comments about the risk assessment.',
		},
	}),
});
