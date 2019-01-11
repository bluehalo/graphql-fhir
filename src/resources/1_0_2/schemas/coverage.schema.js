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
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary Coverage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Coverage',
	description: 'Base StructureDefinition for Coverage Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Coverage_Enum_schema',
					values: { Coverage: { value: 'Coverage' } },
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
		issuer: {
			type: new GraphQLUnionType({
				name: 'Coverageissuer_issuer_Union',
				description: 'The program or plan underwriter or payor.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'The program or plan underwriter or payor.',
		},
		bin: {
			type: require('./identifier.schema.js'),
			description:
				"Business Identification Number (BIN number) used to identify the routing  of eclaims if the insurer themselves don't have a BIN number for all of their business.",
		},
		period: {
			type: require('./period.schema.js'),
			description:
				"Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ActCoverageTypeCode
		type: {
			type: require('./coding.schema.js'),
			description:
				'The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health.',
		},
		subscriberId: {
			type: require('./identifier.schema.js'),
			description: 'The id issued to the subscriber.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Subscriber Id, Certificate number or Personal Health Number or Case ID.',
		},
		_group: {
			type: require('./element.schema.js'),
			description:
				'Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.',
		},
		group: {
			type: GraphQLString,
			description:
				'Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.',
		},
		_plan: {
			type: require('./element.schema.js'),
			description:
				'Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.',
		},
		plan: {
			type: GraphQLString,
			description:
				'Identifies a style or collective of coverage issues by the underwriter, for example may be used to identify a class of coverage or employer group. May also be referred to as a Policy or Group ID.',
		},
		_subPlan: {
			type: require('./element.schema.js'),
			description:
				'Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a specific employer group within a class of employers. May be referred to as a Section or Division ID.',
		},
		subPlan: {
			type: GraphQLString,
			description:
				'Identifies a sub-style or sub-collective of coverage issues by the underwriter, for example may be used to identify a specific employer group within a class of employers. May be referred to as a Section or Division ID.',
		},
		_dependent: {
			type: require('./element.schema.js'),
			description: 'A unique identifier for a dependent under the coverage.',
		},
		dependent: {
			type: PositiveIntScalar,
			description: 'A unique identifier for a dependent under the coverage.',
		},
		_sequence: {
			type: require('./element.schema.js'),
			description:
				'An optional counter for a particular instance of the identified coverage which increments upon each renewal.',
		},
		sequence: {
			type: PositiveIntScalar,
			description:
				'An optional counter for a particular instance of the identified coverage which increments upon each renewal.',
		},
		subscriber: {
			type: new GraphQLUnionType({
				name: 'Coveragesubscriber_subscriber_Union',
				description:
					"The party who 'owns' the insurance contractual relationship to the policy or to whom the benefit of the policy is due.",
				types: () => [require('./patient.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
				},
			}),
			description:
				"The party who 'owns' the insurance contractual relationship to the policy or to whom the benefit of the policy is due.",
		},
		network: {
			type: require('./identifier.schema.js'),
			description: 'The identifier for a community of providers.',
		},
		contract: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Coveragecontract_contract_Union',
					description:
						'The policy(s) which constitute this insurance coverage.',
					types: () => [require('./contract.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Contract') {
							return require('./contract.schema.js');
						}
					},
				}),
			),
			description: 'The policy(s) which constitute this insurance coverage.',
		},
	}),
});
