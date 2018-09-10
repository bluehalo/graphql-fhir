const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

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
		subject: {
			type: require('./reference.input'),
			description: 'The patient or group the risk assessment applies to.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date (and possibly time) the risk assessment was performed.'
		},
		_date: {
			type: require('./element.input'),
			description: 'The date (and possibly time) the risk assessment was performed.'
		},
		condition: {
			type: require('./reference.input'),
			description: 'For assessments or prognosis specific to a particular condition, indicates the condition being assessed.'
		},
		encounter: {
			type: require('./reference.input'),
			description: 'The encounter where the assessment was performed.'
		},
		performer: {
			type: require('./reference.input'),
			description: 'The provider or software application that performed the assessment.'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'Business identifier assigned to the risk assessment.'
		},
		method: {
			type: require('./codeableconcept.input'),
			description: 'The algorithm, process or mechanism used to evaluate the risk.'
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
		}
	})
});
