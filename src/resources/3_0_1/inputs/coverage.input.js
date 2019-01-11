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
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary Coverage Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Coverage_Input',
	description: 'Base StructureDefinition for Coverage Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Coverage_Enum_input',
					values: { Coverage: { value: 'Coverage' } },
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
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatination of the Coverage.SubscriberID and the Coverage.dependant.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of the resource instance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/fm-status
		status: {
			type: CodeScalar,
			description: 'The status of the resource instance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/coverage-type
		type: {
			type: require('./codeableconcept.input.js'),
			description:
				'The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.',
		},
		policyHolder: {
			type: GraphQLString,
			description:
				"The party who 'owns' the insurance policy,  may be an individual, corporation or the subscriber's employer.",
		},
		subscriber: {
			type: GraphQLString,
			description:
				"The party who has signed-up for or 'owns' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due.",
		},
		_subscriberId: {
			type: require('./element.input.js'),
			description: 'The insurer assigned ID for the Subscriber.',
		},
		subscriberId: {
			type: GraphQLString,
			description: 'The insurer assigned ID for the Subscriber.',
		},
		beneficiary: {
			type: GraphQLString,
			description:
				'The party who benefits from the insurance coverage., the patient when services are provided.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/policyholder-relationship
		relationship: {
			type: require('./codeableconcept.input.js'),
			description:
				'The relationship of beneficiary (patient) to the subscriber.',
		},
		period: {
			type: require('./period.input.js'),
			description:
				"Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.",
		},
		payor: {
			type: new GraphQLList(GraphQLString),
			description:
				'The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements. May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).',
		},
		grouping: {
			type: require('./coveragegrouping.input.js'),
			description:
				'A suite of underwrite specific classifiers, for example may be used to identify a class of coverage or employer group, Policy, Plan.',
		},
		_dependent: {
			type: require('./element.input.js'),
			description: 'A unique identifier for a dependent under the coverage.',
		},
		dependent: {
			type: GraphQLString,
			description: 'A unique identifier for a dependent under the coverage.',
		},
		_sequence: {
			type: require('./element.input.js'),
			description:
				'An optional counter for a particular instance of the identified coverage which increments upon each renewal.',
		},
		sequence: {
			type: GraphQLString,
			description:
				'An optional counter for a particular instance of the identified coverage which increments upon each renewal.',
		},
		_order: {
			type: require('./element.input.js'),
			description:
				'The order of applicability of this coverage relative to other coverages which are currently inforce. Note, there may be gaps in the numbering and this does not imply primary, secondard etc. as the specific positioning of coverages depends upon the episode of care.',
		},
		order: {
			type: PositiveIntScalar,
			description:
				'The order of applicability of this coverage relative to other coverages which are currently inforce. Note, there may be gaps in the numbering and this does not imply primary, secondard etc. as the specific positioning of coverages depends upon the episode of care.',
		},
		_network: {
			type: require('./element.input.js'),
			description:
				"The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.",
		},
		network: {
			type: GraphQLString,
			description:
				"The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.",
		},
		contract: {
			type: new GraphQLList(GraphQLString),
			description: 'The policy(s) which constitute this insurance coverage.',
		},
	}),
});
