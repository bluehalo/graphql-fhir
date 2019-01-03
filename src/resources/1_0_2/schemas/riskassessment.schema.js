const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let RiskAssessmentResourceType = new GraphQLEnumType({
	name: 'RiskAssessmentResourceType',
	values: {
		RiskAssessment: { value: 'RiskAssessment' }
	}
});

/**
 * @name exports
 * @summary RiskAssessment Schema
 */
module.exports = new GraphQLObjectType({
	name: 'RiskAssessment',
	description: 'Base StructureDefinition for RiskAssessment Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(RiskAssessmentResourceType),
			description: 'Type of this resource.'
		},
		subject: {
			type: require('./reference.schema'),
			description: 'The patient or group the risk assessment applies to.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date (and possibly time) the risk assessment was performed.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date (and possibly time) the risk assessment was performed.'
		},
		condition: {
			type: require('./reference.schema'),
			description: 'For assessments or prognosis specific to a particular condition, indicates the condition being assessed.'
		},
		encounter: {
			type: require('./reference.schema'),
			description: 'The encounter where the assessment was performed.'
		},
		performer: {
			type: require('./reference.schema'),
			description: 'The provider or software application that performed the assessment.'
		},
		identifier: {
			type: require('./identifier.schema'),
			description: 'Business identifier assigned to the risk assessment.'
		},
		method: {
			type: require('./codeableconcept.schema'),
			description: 'The algorithm, process or mechanism used to evaluate the risk.'
		},
		basis: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Indicates the source data considered as part of the assessment (FamilyHistory, Observations, Procedures, Conditions, etc.).'
		},
		prediction: {
			type: new GraphQLList(require('./riskassessmentprediction.schema')),
			description: 'Describes the expected outcome for the subject.'
		},
		mitigation: {
			type: GraphQLString,
			description: 'A description of the steps that might be taken to reduce the identified risk(s).'
		},
		_mitigation: {
			type: require('./element.schema'),
			description: 'A description of the steps that might be taken to reduce the identified risk(s).'
		}
	})
});
