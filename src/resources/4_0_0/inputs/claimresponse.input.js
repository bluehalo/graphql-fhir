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
 * @summary ClaimResponse Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimResponse_Input',
	description:
		'This resource provides the adjudication details from the processing of a Claim resource.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ClaimResponse_Enum_input',
					values: { ClaimResponse: { value: 'ClaimResponse' } },
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
			description: 'A unique identifier assigned to this claim response.',
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
				'A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service.',
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
				'The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought.',
		},
		_created: {
			type: require('./element.input.js'),
			description: 'The date this resource was created.',
		},
		created: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The date this resource was created.',
		},
		insurer: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The party responsible for authorization, adjudication and reimbursement.',
		},
		requestor: {
			type: GraphQLString,
			description:
				'The provider which is responsible for the claim, predetermination or preauthorization.',
		},
		request: {
			type: GraphQLString,
			description: 'Original request resource reference.',
		},
		_outcome: {
			type: require('./element.input.js'),
			description:
				'The outcome of the claim, predetermination, or preauthorization processing.',
		},
		outcome: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The outcome of the claim, predetermination, or preauthorization processing.',
		},
		_disposition: {
			type: require('./element.input.js'),
			description:
				'A human readable description of the status of the adjudication.',
		},
		disposition: {
			type: GraphQLString,
			description:
				'A human readable description of the status of the adjudication.',
		},
		_preAuthRef: {
			type: require('./element.input.js'),
			description:
				'Reference from the Insurer which is used in later communications which refers to this adjudication.',
		},
		preAuthRef: {
			type: GraphQLString,
			description:
				'Reference from the Insurer which is used in later communications which refers to this adjudication.',
		},
		preAuthPeriod: {
			type: require('./period.input.js'),
			description:
				'The time frame during which this authorization is effective.',
		},
		payeeType: {
			type: require('./codeableconcept.input.js'),
			description:
				'Type of Party to be reimbursed: subscriber, provider, other.',
		},
		item: {
			type: new GraphQLList(require('./claimresponseitem.input.js')),
			description:
				"A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.",
		},
		addItem: {
			type: new GraphQLList(require('./claimresponseadditem.input.js')),
			description:
				'The first-tier service adjudications for payor added product or service lines.',
		},
		total: {
			type: new GraphQLList(require('./claimresponsetotal.input.js')),
			description: 'Categorized monetary totals for the adjudication.',
		},
		payment: {
			type: require('./claimresponsepayment.input.js'),
			description: 'Payment details for the adjudication of the claim.',
		},
		fundsReserve: {
			type: require('./codeableconcept.input.js'),
			description:
				'A code, used only on a response to a preauthorization, to indicate whether the benefits payable have been reserved and for whom.',
		},
		formCode: {
			type: require('./codeableconcept.input.js'),
			description: 'A code for the form to be used for printing the content.',
		},
		form: {
			type: require('./attachment.input.js'),
			description:
				'The actual form, by reference or inclusion, for printing the content or an EOB.',
		},
		processNote: {
			type: new GraphQLList(require('./claimresponseprocessnote.input.js')),
			description:
				'A note that describes or explains adjudication results in a human readable form.',
		},
		communicationRequest: {
			type: new GraphQLList(GraphQLString),
			description:
				'Request for additional supporting or authorizing information.',
		},
		insurance: {
			type: new GraphQLList(require('./claimresponseinsurance.input.js')),
			description:
				'Financial instruments for reimbursement for the health care products and services specified on the claim.',
		},
		error: {
			type: new GraphQLList(require('./claimresponseerror.input.js')),
			description:
				'Errors encountered during the processing of the adjudication.',
		},
	}),
});
