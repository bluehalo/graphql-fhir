const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary DetectedIssue Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DetectedIssue',
	description: 'Base StructureDefinition for DetectedIssue Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'DetectedIssue_Enum_schema',
					values: { DetectedIssue: { value: 'DetectedIssue' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: require('./identifier.schema.js'),
			description:
				'Business identifier associated with the detected issue record.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'Indicates the status of the detected issue.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/observation-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the status of the detected issue.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/detectedissue-category
		category: {
			type: require('./codeableconcept.schema.js'),
			description: 'Identifies the general type of issue identified.',
		},
		_severity: {
			type: require('./element.schema.js'),
			description:
				'Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/detectedissue-severity
		severity: {
			type: CodeScalar,
			description:
				'Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.',
		},
		patient: {
			type: new GraphQLUnionType({
				name: 'DetectedIssuepatient_patient_Union',
				description:
					'Indicates the patient whose record the detected issue is associated with.',
				types: () => [require('./patient.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
				},
			}),
			description:
				'Indicates the patient whose record the detected issue is associated with.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'The date or date-time when the detected issue was initially identified.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date or date-time when the detected issue was initially identified.',
		},
		author: {
			type: new GraphQLUnionType({
				name: 'DetectedIssueauthor_author_Union',
				description:
					'Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./device.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
				},
			}),
			description:
				'Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.',
		},
		implicated: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'DetectedIssueimplicated_implicated_Union',
					description:
						'Indicates the resource representing the current activity or proposed activity that is potentially problematic.',
					types: () => [require('./resource.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Resource') {
							return require('./resource.schema.js');
						}
					},
				}),
			),
			description:
				'Indicates the resource representing the current activity or proposed activity that is potentially problematic.',
		},
		_detail: {
			type: require('./element.schema.js'),
			description: 'A textual explanation of the detected issue.',
		},
		detail: {
			type: GraphQLString,
			description: 'A textual explanation of the detected issue.',
		},
		_reference: {
			type: require('./element.schema.js'),
			description:
				'The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.',
		},
		reference: {
			type: UriScalar,
			description:
				'The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.',
		},
		mitigation: {
			type: new GraphQLList(require('./detectedissuemitigation.schema.js')),
			description:
				'Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.',
		},
	}),
});
