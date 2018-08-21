const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let ExplanationOfBenefitResourceType = new GraphQLEnumType({
	name: 'ExplanationOfBenefitResourceType',
	values: {
		ExplanationOfBenefit: { value: 'ExplanationOfBenefit' }
	}
});

/**
 * @name exports
 * @summary ExplanationOfBenefit Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefit',
	description: 'Base StructureDefinition for ExplanationOfBenefit Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ExplanationOfBenefitResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'The EOB Business Identifier.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/explanationofbenefit-status
		status: {
			type: CodeScalar,
			description: 'The status of the resource instance.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the resource instance.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/claim-type
		type: {
			type: require('./codeableconcept.schema'),
			description: 'The category of claim, eg, oral, pharmacy, vision, insitutional, professional.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/claim-subtype
		subType: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A finer grained suite of claim subtype codes which may convey Inpatient vs Outpatient and/or a specialty service. In the US the BillType.'
		},
		patient: {
			type: require('./reference.schema'),
			description: 'Patient Resource.'
		},
		billablePeriod: {
			type: require('./period.schema'),
			description: 'The billable period for which charges are being submitted.'
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when the EOB was created.'
		},
		_created: {
			type: require('./element.schema'),
			description: 'The date when the EOB was created.'
		},
		enterer: {
			type: require('./reference.schema'),
			description: 'The person who created the explanation of benefit.'
		},
		insurer: {
			type: require('./reference.schema'),
			description: 'The insurer which is responsible for the explanation of benefit.'
		},
		provider: {
			type: require('./reference.schema'),
			description: 'The provider which is responsible for the claim.'
		},
		organization: {
			type: require('./reference.schema'),
			description: 'The provider which is responsible for the claim.'
		},
		referral: {
			type: require('./reference.schema'),
			description: 'The referral resource which lists the date, practitioner, reason and other supporting information.'
		},
		facility: {
			type: require('./reference.schema'),
			description: 'Facility where the services were provided.'
		},
		claim: {
			type: require('./reference.schema'),
			description: 'The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.'
		},
		claimResponse: {
			type: require('./reference.schema'),
			description: 'The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/remittance-outcome
		outcome: {
			type: require('./codeableconcept.schema'),
			description: 'Processing outcome errror, partial or complete processing.'
		},
		disposition: {
			type: GraphQLString,
			description: 'A description of the status of the adjudication.'
		},
		_disposition: {
			type: require('./element.schema'),
			description: 'A description of the status of the adjudication.'
		},
		related: {
			type: new GraphQLList(require('./explanationofbenefitrelated.schema')),
			description: 'Other claims which are related to this claim such as prior claim versions or for related services.'
		},
		prescription: {
			type: require('./reference.schema'),
			description: 'Prescription to support the dispensing of Pharmacy or Vision products.'
		},
		originalPrescription: {
			type: require('./reference.schema'),
			description: 'Original prescription which has been superceded by this prescription to support the dispensing of pharmacy services, medications or products. For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new precription for an alternate medication which has the same theraputic intent. The prescription from the pharmacy becomes the \'prescription\' and that from the physician becomes the \'original prescription\'.'
		},
		payee: {
			type: require('./explanationofbenefitpayee.schema'),
			description: 'The party to be reimbursed for the services.'
		},
		information: {
			type: new GraphQLList(require('./explanationofbenefitinformation.schema')),
			description: 'Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.'
		},
		careTeam: {
			type: new GraphQLList(require('./explanationofbenefitcareteam.schema')),
			description: 'The members of the team who provided the overall service as well as their role and whether responsible and qualifications.'
		},
		diagnosis: {
			type: new GraphQLList(require('./explanationofbenefitdiagnosis.schema')),
			description: 'Ordered list of patient diagnosis for which care is sought.'
		},
		procedure: {
			type: new GraphQLList(require('./explanationofbenefitprocedure.schema')),
			description: 'Ordered list of patient procedures performed to support the adjudication.'
		},
		precedence: {
			type: PositiveIntScalar,
			description: 'Precedence (primary, secondary, etc.).'
		},
		_precedence: {
			type: require('./element.schema'),
			description: 'Precedence (primary, secondary, etc.).'
		},
		insurance: {
			type: require('./explanationofbenefitinsurance.schema'),
			description: 'Financial instrument by which payment information for health care.'
		},
		accident: {
			type: require('./explanationofbenefitaccident.schema'),
			description: 'An accident which resulted in the need for healthcare services.'
		},
		employmentImpacted: {
			type: require('./period.schema'),
			description: 'The start and optional end dates of when the patient was precluded from working due to the treatable condition(s).'
		},
		hospitalization: {
			type: require('./period.schema'),
			description: 'The start and optional end dates of when the patient was confined to a treatment center.'
		},
		item: {
			type: new GraphQLList(require('./explanationofbenefititem.schema')),
			description: 'First tier of goods and services.'
		},
		addItem: {
			type: new GraphQLList(require('./explanationofbenefitadditem.schema')),
			description: 'The first tier service adjudications for payor added services.'
		},
		totalCost: {
			type: require('./money.schema'),
			description: 'The total cost of the services reported.'
		},
		unallocDeductable: {
			type: require('./money.schema'),
			description: 'The amount of deductable applied which was not allocated to any particular service line.'
		},
		totalBenefit: {
			type: require('./money.schema'),
			description: 'Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductable).'
		},
		payment: {
			type: require('./explanationofbenefitpayment.schema'),
			description: 'Payment details for the claim if the claim has been paid.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/forms
		form: {
			type: require('./codeableconcept.schema'),
			description: 'The form to be used for printing the content.'
		},
		processNote: {
			type: new GraphQLList(require('./explanationofbenefitprocessnote.schema')),
			description: 'Note text.'
		},
		benefitBalance: {
			type: new GraphQLList(require('./explanationofbenefitbenefitbalance.schema')),
			description: 'Balance by Benefit Category.'
		}
	})
});
