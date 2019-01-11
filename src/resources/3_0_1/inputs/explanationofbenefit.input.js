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
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary ExplanationOfBenefit Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExplanationOfBenefit_Input',
	description: 'Base StructureDefinition for ExplanationOfBenefit Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ExplanationOfBenefit_Enum_input',
					values: { ExplanationOfBenefit: { value: 'ExplanationOfBenefit' } },
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
			description: 'The EOB Business Identifier.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of the resource instance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/explanationofbenefit-status
		status: {
			type: CodeScalar,
			description: 'The status of the resource instance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-type
		type: {
			type: require('./codeableconcept.input.js'),
			description:
				'The category of claim, eg, oral, pharmacy, vision, insitutional, professional.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-subtype
		subType: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'A finer grained suite of claim subtype codes which may convey Inpatient vs Outpatient and/or a specialty service. In the US the BillType.',
		},
		patient: {
			type: GraphQLString,
			description: 'Patient Resource.',
		},
		billablePeriod: {
			type: require('./period.input.js'),
			description: 'The billable period for which charges are being submitted.',
		},
		_created: {
			type: require('./element.input.js'),
			description: 'The date when the EOB was created.',
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when the EOB was created.',
		},
		enterer: {
			type: GraphQLString,
			description: 'The person who created the explanation of benefit.',
		},
		insurer: {
			type: GraphQLString,
			description:
				'The insurer which is responsible for the explanation of benefit.',
		},
		provider: {
			type: GraphQLString,
			description: 'The provider which is responsible for the claim.',
		},
		organization: {
			type: GraphQLString,
			description: 'The provider which is responsible for the claim.',
		},
		referral: {
			type: GraphQLString,
			description:
				'The referral resource which lists the date, practitioner, reason and other supporting information.',
		},
		facility: {
			type: GraphQLString,
			description: 'Facility where the services were provided.',
		},
		claim: {
			type: GraphQLString,
			description:
				'The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.',
		},
		claimResponse: {
			type: GraphQLString,
			description:
				'The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/remittance-outcome
		outcome: {
			type: require('./codeableconcept.input.js'),
			description: 'Processing outcome errror, partial or complete processing.',
		},
		_disposition: {
			type: require('./element.input.js'),
			description: 'A description of the status of the adjudication.',
		},
		disposition: {
			type: GraphQLString,
			description: 'A description of the status of the adjudication.',
		},
		related: {
			type: new GraphQLList(require('./explanationofbenefitrelated.input.js')),
			description:
				'Other claims which are related to this claim such as prior claim versions or for related services.',
		},
		prescription: {
			type: GraphQLString,
			description:
				'Prescription to support the dispensing of Pharmacy or Vision products.',
		},
		originalPrescription: {
			type: GraphQLString,
			description:
				"Original prescription which has been superceded by this prescription to support the dispensing of pharmacy services, medications or products. For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new precription for an alternate medication which has the same theraputic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.",
		},
		payee: {
			type: require('./explanationofbenefitpayee.input.js'),
			description: 'The party to be reimbursed for the services.',
		},
		information: {
			type: new GraphQLList(
				require('./explanationofbenefitinformation.input.js'),
			),
			description:
				'Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.',
		},
		careTeam: {
			type: new GraphQLList(require('./explanationofbenefitcareteam.input.js')),
			description:
				'The members of the team who provided the overall service as well as their role and whether responsible and qualifications.',
		},
		diagnosis: {
			type: new GraphQLList(
				require('./explanationofbenefitdiagnosis.input.js'),
			),
			description:
				'Ordered list of patient diagnosis for which care is sought.',
		},
		procedure: {
			type: new GraphQLList(
				require('./explanationofbenefitprocedure.input.js'),
			),
			description:
				'Ordered list of patient procedures performed to support the adjudication.',
		},
		_precedence: {
			type: require('./element.input.js'),
			description: 'Precedence (primary, secondary, etc.).',
		},
		precedence: {
			type: PositiveIntScalar,
			description: 'Precedence (primary, secondary, etc.).',
		},
		insurance: {
			type: require('./explanationofbenefitinsurance.input.js'),
			description:
				'Financial instrument by which payment information for health care.',
		},
		accident: {
			type: require('./explanationofbenefitaccident.input.js'),
			description:
				'An accident which resulted in the need for healthcare services.',
		},
		employmentImpacted: {
			type: require('./period.input.js'),
			description:
				'The start and optional end dates of when the patient was precluded from working due to the treatable condition(s).',
		},
		hospitalization: {
			type: require('./period.input.js'),
			description:
				'The start and optional end dates of when the patient was confined to a treatment center.',
		},
		item: {
			type: new GraphQLList(require('./explanationofbenefititem.input.js')),
			description: 'First tier of goods and services.',
		},
		addItem: {
			type: new GraphQLList(require('./explanationofbenefitadditem.input.js')),
			description:
				'The first tier service adjudications for payor added services.',
		},
		totalCost: {
			type: require('./money.input.js'),
			description: 'The total cost of the services reported.',
		},
		unallocDeductable: {
			type: require('./money.input.js'),
			description:
				'The amount of deductable applied which was not allocated to any particular service line.',
		},
		totalBenefit: {
			type: require('./money.input.js'),
			description:
				'Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductable).',
		},
		payment: {
			type: require('./explanationofbenefitpayment.input.js'),
			description: 'Payment details for the claim if the claim has been paid.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/forms
		form: {
			type: require('./codeableconcept.input.js'),
			description: 'The form to be used for printing the content.',
		},
		processNote: {
			type: new GraphQLList(
				require('./explanationofbenefitprocessnote.input.js'),
			),
			description: 'Note text.',
		},
		benefitBalance: {
			type: new GraphQLList(
				require('./explanationofbenefitbenefitbalance.input.js'),
			),
			description: 'Balance by Benefit Category.',
		},
	}),
});
