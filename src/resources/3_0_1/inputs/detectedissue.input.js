const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const UriScalar = require('../scalars/uri.scalar');
const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let DetectedIssueResourceInputType = new GraphQLEnumType({
	name: 'DetectedIssueResourceInputType',
	values: {
		DetectedIssue: { value: 'DetectedIssue' },
	},
});

/**
 * @name exports
 * @summary DetectedIssue Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DetectedIssue_Input',
	description: 'Base StructureDefinition for DetectedIssue Resource.',
	fields: () =>
		extendSchema(require('./domainresource.input'), {
			resourceType: {
				type: new GraphQLNonNull(DetectedIssueResourceInputType),
				description: 'Type of this resource.',
			},
			identifier: {
				type: require('./identifier.input'),
				description:
					'Business identifier associated with the detected issue record.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/observation-status
			status: {
				type: new GraphQLNonNull(CodeScalar),
				description: 'Indicates the status of the detected issue.',
			},
			_status: {
				type: require('./element.input'),
				description: 'Indicates the status of the detected issue.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/detectedissue-category
			category: {
				type: require('./codeableconcept.input'),
				description: 'Identifies the general type of issue identified.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/detectedissue-severity
			severity: {
				type: CodeScalar,
				description:
					'Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.',
			},
			_severity: {
				type: require('./element.input'),
				description:
					'Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.',
			},
			patient: {
				type: require('./reference.input'),
				description:
					'Indicates the patient whose record the detected issue is associated with.',
			},
			date: {
				type: DateTimeScalar,
				description:
					'The date or date-time when the detected issue was initially identified.',
			},
			_date: {
				type: require('./element.input'),
				description:
					'The date or date-time when the detected issue was initially identified.',
			},
			author: {
				type: require('./reference.input'),
				description:
					'Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.',
			},
			implicated: {
				type: new GraphQLList(require('./reference.input')),
				description:
					'Indicates the resource representing the current activity or proposed activity that is potentially problematic.',
			},
			detail: {
				type: GraphQLString,
				description: 'A textual explanation of the detected issue.',
			},
			_detail: {
				type: require('./element.input'),
				description: 'A textual explanation of the detected issue.',
			},
			reference: {
				type: UriScalar,
				description:
					'The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.',
			},
			_reference: {
				type: require('./element.input'),
				description:
					'The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.',
			},
			mitigation: {
				type: new GraphQLList(require('./detectedissuemitigation.input')),
				description:
					'Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.',
			},
		}),
});
