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

/**
 * @name exports
 * @summary Claim Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Claim_Input',
	description: 'Base StructureDefinition for Claim Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Claim_Enum_input',
					values: { Claim: { value: 'Claim' } },
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
				'The business identifier for the instance: claim number, pre-determination or pre-authorization number.',
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
		_use: {
			type: require('./element.input.js'),
			description:
				'Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-use
		use: {
			type: CodeScalar,
			description:
				'Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).',
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
			description:
				'The date when the enclosed suite of services were performed or completed.',
		},
		created: {
			type: DateTimeScalar,
			description:
				'The date when the enclosed suite of services were performed or completed.',
		},
		enterer: {
			type: GraphQLString,
			description:
				'Person who created the invoice/claim/pre-determination or pre-authorization.',
		},
		insurer: {
			type: GraphQLString,
			description: 'The Insurer who is target of the request.',
		},
		provider: {
			type: GraphQLString,
			description:
				'The provider which is responsible for the bill, claim pre-determination, pre-authorization.',
		},
		organization: {
			type: GraphQLString,
			description:
				'The organization which is responsible for the bill, claim pre-determination, pre-authorization.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/process-priority
		priority: {
			type: require('./codeableconcept.input.js'),
			description: 'Immediate (STAT), best effort (NORMAL), deferred (DEFER).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/fundsreserve
		fundsReserve: {
			type: require('./codeableconcept.input.js'),
			description:
				"In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved ('Patient' or 'Provider') to pay for the Benefits determined on the subsequent claim(s). 'None' explicitly indicates no funds reserving is requested.",
		},
		related: {
			type: new GraphQLList(require('./claimrelated.input.js')),
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
			type: require('./claimpayee.input.js'),
			description: 'The party to be reimbursed for the services.',
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
		careTeam: {
			type: new GraphQLList(require('./claimcareteam.input.js')),
			description:
				'The members of the team who provided the overall service as well as their role and whether responsible and qualifications.',
		},
		information: {
			type: new GraphQLList(require('./claiminformation.input.js')),
			description:
				'Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.',
		},
		diagnosis: {
			type: new GraphQLList(require('./claimdiagnosis.input.js')),
			description: 'List of patient diagnosis for which care is sought.',
		},
		procedure: {
			type: new GraphQLList(require('./claimprocedure.input.js')),
			description:
				'Ordered list of patient procedures performed to support the adjudication.',
		},
		insurance: {
			type: new GraphQLList(require('./claiminsurance.input.js')),
			description:
				'Financial instrument by which payment information for health care.',
		},
		accident: {
			type: require('./claimaccident.input.js'),
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
			type: new GraphQLList(require('./claimitem.input.js')),
			description: 'First tier of goods and services.',
		},
		total: {
			type: require('./money.input.js'),
			description: 'The total value of the claim.',
		},
	}),
});
