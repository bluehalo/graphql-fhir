const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLBoolean,
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
	description:
		'Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.',
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
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
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description: 'A unique identifier assigned to this coverage.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The status of the resource instance.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the resource instance.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.',
		},
		policyHolder: {
			type: new GraphQLUnionType({
				name: 'CoveragepolicyHolder_policyHolder_Union',
				description: "The party who 'owns' the insurance policy.",
				types: () => [
					require('./patient.schema.js'),
					require('./relatedperson.schema.js'),
					require('./organization.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: "The party who 'owns' the insurance policy.",
		},
		subscriber: {
			type: new GraphQLUnionType({
				name: 'Coveragesubscriber_subscriber_Union',
				description:
					"The party who has signed-up for or 'owns' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due.",
				types: () => [
					require('./patient.schema.js'),
					require('./relatedperson.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
				},
			}),
			description:
				"The party who has signed-up for or 'owns' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due.",
		},
		_subscriberId: {
			type: require('./element.schema.js'),
			description: 'The insurer assigned ID for the Subscriber.',
		},
		subscriberId: {
			type: GraphQLString,
			description: 'The insurer assigned ID for the Subscriber.',
		},
		beneficiary: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'Coveragebeneficiary_beneficiary_Union',
					description:
						'The party who benefits from the insurance coverage; the patient when products and/or services are provided.',
					types: () => [require('./patient.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
					},
				}),
			),
			description:
				'The party who benefits from the insurance coverage; the patient when products and/or services are provided.',
		},
		_dependent: {
			type: require('./element.schema.js'),
			description: 'A unique identifier for a dependent under the coverage.',
		},
		dependent: {
			type: GraphQLString,
			description: 'A unique identifier for a dependent under the coverage.',
		},
		relationship: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The relationship of beneficiary (patient) to the subscriber.',
		},
		period: {
			type: require('./period.schema.js'),
			description:
				"Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.",
		},
		payor: {
			type: new GraphQLList(
				new GraphQLNonNull(
					new GraphQLUnionType({
						name: 'Coveragepayor_payor_Union',
						description:
							'The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements.',
						types: () => [
							require('./organization.schema.js'),
							require('./patient.schema.js'),
							require('./relatedperson.schema.js'),
						],
						resolveType(data) {
							if (data && data.resourceType === 'Organization') {
								return require('./organization.schema.js');
							}
							if (data && data.resourceType === 'Patient') {
								return require('./patient.schema.js');
							}
							if (data && data.resourceType === 'RelatedPerson') {
								return require('./relatedperson.schema.js');
							}
						},
					}),
				),
			),
			description:
				'The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements.',
		},
		class: {
			type: new GraphQLList(require('./coverageclass.schema.js')),
			description: 'A suite of underwriter specific classifiers.',
		},
		_order: {
			type: require('./element.schema.js'),
			description:
				'The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.',
		},
		order: {
			type: PositiveIntScalar,
			description:
				'The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.',
		},
		_network: {
			type: require('./element.schema.js'),
			description:
				"The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.",
		},
		network: {
			type: GraphQLString,
			description:
				"The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.",
		},
		costToBeneficiary: {
			type: new GraphQLList(require('./coveragecosttobeneficiary.schema.js')),
			description:
				'A suite of codes indicating the cost category and associated amount which have been detailed in the policy and may have been  included on the health card.',
		},
		_subrogation: {
			type: require('./element.schema.js'),
			description:
				"When 'subrogation=true' this insurance instance has been included not for adjudication but to provide insurers with the details to recover costs.",
		},
		subrogation: {
			type: GraphQLBoolean,
			description:
				"When 'subrogation=true' this insurance instance has been included not for adjudication but to provide insurers with the details to recover costs.",
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
