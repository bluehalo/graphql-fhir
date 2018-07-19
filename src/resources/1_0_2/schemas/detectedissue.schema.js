const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let DetectedIssueResourceType = new GraphQLEnumType({
	name: 'DetectedIssueResourceType',
	values: {
		DetectedIssue: { value: 'DetectedIssue' }
	}
});

/**
 * @name exports
 * @summary DetectedIssue Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DetectedIssue',
	description: 'Base StructureDefinition for DetectedIssue Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(DetectedIssueResourceType),
			description: 'Type of this resource'
		},
		patient: {
			type: require('./reference.schema'),
			description: 'Indicates the patient whose record the detected issue is associated with.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/detectedissue-category
		category: {
			type: require('./codeableconcept.schema'),
			description: 'Identifies the general type of issue identified.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/detectedissue-severity
		severity: {
			type: CodeScalar,
			description: 'Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.'
		},
		_severity: {
			type: require('./element.schema'),
			description: 'Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.'
		},
		implicated: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Indicates the resource representing the current activity or proposed activity that is potentially problematic.'
		},
		detail: {
			type: GraphQLString,
			description: 'A textual explanation of the detected issue.'
		},
		_detail: {
			type: require('./element.schema'),
			description: 'A textual explanation of the detected issue.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date or date-time when the detected issue was initially identified.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date or date-time when the detected issue was initially identified.'
		},
		author: {
			type: require('./reference.schema'),
			description: 'Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.'
		},
		identifier: {
			type: require('./identifier.schema'),
			description: 'Business identifier associated with the detected issue record.'
		},
		reference: {
			type: UriScalar,
			description: 'The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.'
		},
		_reference: {
			type: require('./element.schema'),
			description: 'The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.'
		},
		mitigation: {
			type: new GraphQLList(require('./detectedissuemitigation.schema')),
			description: 'Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.'
		}
	})
});
