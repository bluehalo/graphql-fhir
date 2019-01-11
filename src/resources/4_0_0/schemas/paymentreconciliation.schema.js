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
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary PaymentReconciliation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PaymentReconciliation',
	description:
		'This resource provides the details including amount of a payment and allocates the payment items being paid.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'PaymentReconciliation_Enum_schema',
					values: { PaymentReconciliation: { value: 'PaymentReconciliation' } },
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
			description:
				'A unique identifier assigned to this payment reconciliation.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The status of the resource instance.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the resource instance.',
		},
		period: {
			type: require('./period.schema.js'),
			description:
				'The period of time for which payments have been gathered into this bulk payment for settlement.',
		},
		_created: {
			type: require('./element.schema.js'),
			description: 'The date when the resource was created.',
		},
		created: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The date when the resource was created.',
		},
		paymentIssuer: {
			type: new GraphQLUnionType({
				name: 'PaymentReconciliationpaymentIssuer_paymentIssuer_Union',
				description: 'The party who generated the payment.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'The party who generated the payment.',
		},
		request: {
			type: new GraphQLUnionType({
				name: 'PaymentReconciliationrequest_request_Union',
				description: 'Original request resource reference.',
				types: () => [require('./task.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Task') {
						return require('./task.schema.js');
					}
				},
			}),
			description: 'Original request resource reference.',
		},
		requestor: {
			type: new GraphQLUnionType({
				name: 'PaymentReconciliationrequestor_requestor_Union',
				description:
					'The practitioner who is responsible for the services rendered to the patient.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./organization.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'The practitioner who is responsible for the services rendered to the patient.',
		},
		_outcome: {
			type: require('./element.schema.js'),
			description: 'The outcome of a request for a reconciliation.',
		},
		outcome: {
			type: CodeScalar,
			description: 'The outcome of a request for a reconciliation.',
		},
		_disposition: {
			type: require('./element.schema.js'),
			description:
				'A human readable description of the status of the request for the reconciliation.',
		},
		disposition: {
			type: GraphQLString,
			description:
				'A human readable description of the status of the request for the reconciliation.',
		},
		_paymentDate: {
			type: require('./element.schema.js'),
			description:
				'The date of payment as indicated on the financial instrument.',
		},
		paymentDate: {
			type: new GraphQLNonNull(DateScalar),
			description:
				'The date of payment as indicated on the financial instrument.',
		},
		paymentAmount: {
			type: new GraphQLNonNull(require('./money.schema.js')),
			description:
				'Total payment amount as indicated on the financial instrument.',
		},
		paymentIdentifier: {
			type: require('./identifier.schema.js'),
			description: "Issuer's unique identifier for the payment instrument.",
		},
		detail: {
			type: new GraphQLList(require('./paymentreconciliationdetail.schema.js')),
			description:
				'Distribution of the payment amount for a previously acknowledged payable.',
		},
		formCode: {
			type: require('./codeableconcept.schema.js'),
			description: 'A code for the form to be used for printing the content.',
		},
		processNote: {
			type: new GraphQLList(
				require('./paymentreconciliationprocessnote.schema.js'),
			),
			description:
				'A note that describes or explains the processing in a human readable form.',
		},
	}),
});
