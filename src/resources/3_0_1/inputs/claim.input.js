const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let ClaimResourceInputType = new GraphQLEnumType({
	name: 'ClaimResourceInputType',
	values: {
		Claim: { value: 'Claim' },
	},
});

/**
 * @name exports
 * @summary Claim Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Claim_Input',
	description: 'Base StructureDefinition for Claim Resource.',
	fields: () =>
		extendSchema(require('./domainresource.input'), {
			resourceType: {
				type: new GraphQLNonNull(ClaimResourceInputType),
				description: 'Type of this resource.',
			},
			identifier: {
				type: new GraphQLList(require('./identifier.input')),
				description:
					'The business identifier for the instance: claim number, pre-determination or pre-authorization number.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/fm-status
			status: {
				type: CodeScalar,
				description: 'The status of the resource instance.',
			},
			_status: {
				type: require('./element.input'),
				description: 'The status of the resource instance.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/claim-type
			type: {
				type: require('./codeableconcept.input'),
				description:
					'The category of claim, eg, oral, pharmacy, vision, insitutional, professional.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/claim-subtype
			subType: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description:
					'A finer grained suite of claim subtype codes which may convey Inpatient vs Outpatient and/or a specialty service. In the US the BillType.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/claim-use
			use: {
				type: CodeScalar,
				description:
					'Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).',
			},
			_use: {
				type: require('./element.input'),
				description:
					'Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).',
			},
			patient: {
				type: require('./reference.input'),
				description: 'Patient Resource.',
			},
			billablePeriod: {
				type: require('./period.input'),
				description:
					'The billable period for which charges are being submitted.',
			},
			created: {
				type: DateTimeScalar,
				description:
					'The date when the enclosed suite of services were performed or completed.',
			},
			_created: {
				type: require('./element.input'),
				description:
					'The date when the enclosed suite of services were performed or completed.',
			},
			enterer: {
				type: require('./reference.input'),
				description:
					'Person who created the invoice/claim/pre-determination or pre-authorization.',
			},
			insurer: {
				type: require('./reference.input'),
				description: 'The Insurer who is target of the request.',
			},
			provider: {
				type: require('./reference.input'),
				description:
					'The provider which is responsible for the bill, claim pre-determination, pre-authorization.',
			},
			organization: {
				type: require('./reference.input'),
				description:
					'The organization which is responsible for the bill, claim pre-determination, pre-authorization.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/process-priority
			priority: {
				type: require('./codeableconcept.input'),
				description:
					'Immediate (STAT), best effort (NORMAL), deferred (DEFER).',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/fundsreserve
			fundsReserve: {
				type: require('./codeableconcept.input'),
				description:
					"In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved ('Patient' or 'Provider') to pay for the Benefits determined on the subsequent claim(s). 'None' explicitly indicates no funds reserving is requested.",
			},
			related: {
				type: new GraphQLList(require('./claimrelated.input')),
				description:
					'Other claims which are related to this claim such as prior claim versions or for related services.',
			},
			prescription: {
				type: require('./reference.input'),
				description:
					'Prescription to support the dispensing of Pharmacy or Vision products.',
			},
			originalPrescription: {
				type: require('./reference.input'),
				description:
					"Original prescription which has been superceded by this prescription to support the dispensing of pharmacy services, medications or products. For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new precription for an alternate medication which has the same theraputic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.",
			},
			payee: {
				type: require('./claimpayee.input'),
				description: 'The party to be reimbursed for the services.',
			},
			referral: {
				type: require('./reference.input'),
				description:
					'The referral resource which lists the date, practitioner, reason and other supporting information.',
			},
			facility: {
				type: require('./reference.input'),
				description: 'Facility where the services were provided.',
			},
			careTeam: {
				type: new GraphQLList(require('./claimcareteam.input')),
				description:
					'The members of the team who provided the overall service as well as their role and whether responsible and qualifications.',
			},
			information: {
				type: new GraphQLList(require('./claiminformation.input')),
				description:
					'Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.',
			},
			diagnosis: {
				type: new GraphQLList(require('./claimdiagnosis.input')),
				description: 'List of patient diagnosis for which care is sought.',
			},
			procedure: {
				type: new GraphQLList(require('./claimprocedure.input')),
				description:
					'Ordered list of patient procedures performed to support the adjudication.',
			},
			insurance: {
				type: new GraphQLList(require('./claiminsurance.input')),
				description:
					'Financial instrument by which payment information for health care.',
			},
			accident: {
				type: require('./claimaccident.input'),
				description:
					'An accident which resulted in the need for healthcare services.',
			},
			employmentImpacted: {
				type: require('./period.input'),
				description:
					'The start and optional end dates of when the patient was precluded from working due to the treatable condition(s).',
			},
			hospitalization: {
				type: require('./period.input'),
				description:
					'The start and optional end dates of when the patient was confined to a treatment center.',
			},
			item: {
				type: new GraphQLList(require('./claimitem.input')),
				description: 'First tier of goods and services.',
			},
			total: {
				type: require('./money.input'),
				description: 'The total value of the claim.',
			},
		}),
});
