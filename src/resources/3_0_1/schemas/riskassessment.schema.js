const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let RiskAssessmentResourceType = new GraphQLEnumType({
	name: 'RiskAssessmentResourceType',
	values: {
		RiskAssessment: { value: 'RiskAssessment' },
	},
});

/**
 * @name exports
 * @summary RiskAssessment Schema
 */
module.exports = new GraphQLObjectType({
	name: 'RiskAssessment',
	description: 'Base StructureDefinition for RiskAssessment Resource.',
	fields: () =>
		extendSchema(require('./domainresource.schema'), {
			resourceType: {
				type: new GraphQLNonNull(RiskAssessmentResourceType),
				description: 'Type of this resource.',
			},
			identifier: {
				type: require('./identifier.schema'),
				description: 'Business identifier assigned to the risk assessment.',
			},
			basedOn: {
				type: require('./reference.schema'),
				description:
					'A reference to the request that is fulfilled by this risk assessment.',
			},
			parent: {
				type: require('./reference.schema'),
				description:
					'A reference to a resource that this risk assessment is part of, such as a Procedure.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-status
			status: {
				type: new GraphQLNonNull(CodeScalar),
				description:
					'The status of the RiskAssessment, using the same statuses as an Observation.',
			},
			_status: {
				type: require('./element.schema'),
				description:
					'The status of the RiskAssessment, using the same statuses as an Observation.',
			},
			method: {
				type: require('./codeableconcept.schema'),
				description:
					'The algorithm, process or mechanism used to evaluate the risk.',
			},
			code: {
				type: require('./codeableconcept.schema'),
				description: 'The type of the risk assessment performed.',
			},
			subject: {
				type: require('./reference.schema'),
				description: 'The patient or group the risk assessment applies to.',
			},
			context: {
				type: require('./reference.schema'),
				description: 'The encounter where the assessment was performed.',
			},
			occurrenceDateTime: {
				type: DateTimeScalar,
				description:
					'The date (and possibly time) the risk assessment was performed.',
			},
			_occurrenceDateTime: {
				type: require('./element.schema'),
				description:
					'The date (and possibly time) the risk assessment was performed.',
			},
			occurrencePeriod: {
				type: require('./period.schema'),
				description:
					'The date (and possibly time) the risk assessment was performed.',
			},
			condition: {
				type: require('./reference.schema'),
				description:
					'For assessments or prognosis specific to a particular condition, indicates the condition being assessed.',
			},
			performer: {
				type: require('./reference.schema'),
				description:
					'The provider or software application that performed the assessment.',
			},
			reasonCodeableConcept: {
				type: require('./codeableconcept.schema'),
				description: 'The reason the risk assessment was performed.',
			},
			reasonReference: {
				type: require('./reference.schema'),
				description: 'The reason the risk assessment was performed.',
			},
			basis: {
				type: new GraphQLList(require('./reference.schema')),
				description:
					'Indicates the source data considered as part of the assessment (FamilyHistory, Observations, Procedures, Conditions, etc.).',
			},
			prediction: {
				type: new GraphQLList(require('./riskassessmentprediction.schema')),
				description: 'Describes the expected outcome for the subject.',
			},
			mitigation: {
				type: GraphQLString,
				description:
					'A description of the steps that might be taken to reduce the identified risk(s).',
			},
			_mitigation: {
				type: require('./element.schema'),
				description:
					'A description of the steps that might be taken to reduce the identified risk(s).',
			},
			comment: {
				type: GraphQLString,
				description: 'Additional comments about the risk assessment.',
			},
			_comment: {
				type: require('./element.schema'),
				description: 'Additional comments about the risk assessment.',
			},
		}),
});
