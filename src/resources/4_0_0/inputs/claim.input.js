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
	description:
		'A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.',
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description: 'A unique identifier assigned to this claim.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of the resource instance.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the resource instance.',
		},
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'The category of claim, e.g. oral, pharmacy, vision, institutional, professional.',
		},
		subType: {
			type: require('./codeableconcept.input.js'),
			description:
				'A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service.',
		},
		_use: {
			type: require('./element.input.js'),
			description:
				'A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.',
		},
		use: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.',
		},
		patient: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought.',
		},
		billablePeriod: {
			type: require('./period.input.js'),
			description: 'The period for which charges are being submitted.',
		},
		_created: {
			type: require('./element.input.js'),
			description: 'The date this resource was created.',
		},
		created: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The date this resource was created.',
		},
		enterer: {
			type: GraphQLString,
			description:
				'Individual who created the claim, predetermination or preauthorization.',
		},
		insurer: {
			type: GraphQLString,
			description: 'The Insurer who is target of the request.',
		},
		provider: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The provider which is responsible for the claim, predetermination or preauthorization.',
		},
		priority: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'The provider-required urgency of processing the request. Typical values include: stat, routine deferred.',
		},
		fundsReserve: {
			type: require('./codeableconcept.input.js'),
			description:
				'A code to indicate whether and for whom funds are to be reserved for future claims.',
		},
		related: {
			type: new GraphQLList(require('./claimrelated.input.js')),
			description:
				'Other claims which are related to this claim such as prior submissions or claims for related services or for the same event.',
		},
		prescription: {
			type: GraphQLString,
			description:
				'Prescription to support the dispensing of pharmacy, device or vision products.',
		},
		originalPrescription: {
			type: GraphQLString,
			description:
				'Original prescription which has been superseded by this prescription to support the dispensing of pharmacy services, medications or products.',
		},
		payee: {
			type: require('./claimpayee.input.js'),
			description:
				'The party to be reimbursed for cost of the products and services according to the terms of the policy.',
		},
		referral: {
			type: GraphQLString,
			description: 'A reference to a referral resource.',
		},
		facility: {
			type: GraphQLString,
			description: 'Facility where the services were provided.',
		},
		careTeam: {
			type: new GraphQLList(require('./claimcareteam.input.js')),
			description:
				'The members of the team who provided the products and services.',
		},
		supportingInfo: {
			type: new GraphQLList(require('./claimsupportinginfo.input.js')),
			description:
				'Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues.',
		},
		diagnosis: {
			type: new GraphQLList(require('./claimdiagnosis.input.js')),
			description: 'Information about diagnoses relevant to the claim items.',
		},
		procedure: {
			type: new GraphQLList(require('./claimprocedure.input.js')),
			description:
				'Procedures performed on the patient relevant to the billing items with the claim.',
		},
		insurance: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./claiminsurance.input.js')),
			),
			description:
				'Financial instruments for reimbursement for the health care products and services specified on the claim.',
		},
		accident: {
			type: require('./claimaccident.input.js'),
			description:
				'Details of an accident which resulted in injuries which required the products and services listed in the claim.',
		},
		item: {
			type: new GraphQLList(require('./claimitem.input.js')),
			description:
				"A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details.",
		},
		total: {
			type: require('./money.input.js'),
			description: 'The total value of the all the items in the claim.',
		},
	}),
});
