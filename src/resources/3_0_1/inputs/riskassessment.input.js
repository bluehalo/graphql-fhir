const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let RiskAssessmentResourceInputType = new GraphQLEnumType({
	name: 'RiskAssessmentResourceInputType',
	values: {
		RiskAssessment: { value: 'RiskAssessment' }
	}
});

/**
 * @name exports
 * @summary RiskAssessment Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'RiskAssessment_Input',
	description: 'Base StructureDefinition for RiskAssessment Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(RiskAssessmentResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'Business identifier assigned to the risk assessment.'
		},
		basedOn: {
			type: require('./reference.input'),
			description: 'A reference to the request that is fulfilled by this risk assessment.'
		},
		parent: {
			type: require('./reference.input'),
			description: 'A reference to a resource that this risk assessment is part of, such as a Procedure.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the RiskAssessment, using the same statuses as an Observation.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of the RiskAssessment, using the same statuses as an Observation.'
		},
		method: {
			type: require('./codeableconcept.input'),
			description: 'The algorithm, process or mechanism used to evaluate the risk.'
		},
		code: {
			type: require('./codeableconcept.input'),
			description: 'The type of the risk assessment performed.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'The patient or group the risk assessment applies to.'
		},
		context: {
			type: require('./reference.input'),
			description: 'The encounter where the assessment was performed.'
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'The date (and possibly time) the risk assessment was performed.'
		},
		_occurrenceDateTime: {
			type: require('./element.input'),
			description: 'The date (and possibly time) the risk assessment was performed.'
		},
		occurrencePeriod: {
			type: require('./period.input'),
			description: 'The date (and possibly time) the risk assessment was performed.'
		},
		condition: {
			type: require('./reference.input'),
			description: 'For assessments or prognosis specific to a particular condition, indicates the condition being assessed.'
		},
		performer: {
			type: require('./reference.input'),
			description: 'The provider or software application that performed the assessment.'
		},
		reasonCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'The reason the risk assessment was performed.'
		},
		reasonReference: {
			type: require('./reference.input'),
			description: 'The reason the risk assessment was performed.'
		},
		basis: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Indicates the source data considered as part of the assessment (FamilyHistory, Observations, Procedures, Conditions, etc.).'
		},
		prediction: {
			type: new GraphQLList(require('./riskassessmentprediction.input')),
			description: 'Describes the expected outcome for the subject.'
		},
		mitigation: {
			type: GraphQLString,
			description: 'A description of the steps that might be taken to reduce the identified risk(s).'
		},
		_mitigation: {
			type: require('./element.input'),
			description: 'A description of the steps that might be taken to reduce the identified risk(s).'
		},
		comment: {
			type: GraphQLString,
			description: 'Additional comments about the risk assessment.'
		},
		_comment: {
			type: require('./element.input'),
			description: 'Additional comments about the risk assessment.'
		}
	})
});
