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

/**
 * @name exports
 * @summary Invoice Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Invoice',
	description:
		'Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Invoice_Enum_schema',
					values: { Invoice: { value: 'Invoice' } },
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
				'Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The current state of the Invoice.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The current state of the Invoice.',
		},
		_cancelledReason: {
			type: require('./element.schema.js'),
			description:
				'In case of Invoice cancellation a reason must be given (entered in error, superseded by corrected invoice etc.).',
		},
		cancelledReason: {
			type: GraphQLString,
			description:
				'In case of Invoice cancellation a reason must be given (entered in error, superseded by corrected invoice etc.).',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary).',
		},
		subject: {
			type: new GraphQLUnionType({
				name: 'Invoicesubject_subject_Union',
				description:
					'The individual or set of individuals receiving the goods and services billed in this invoice.',
				types: () => [
					require('./patient.schema.js'),
					require('./group.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Group') {
						return require('./group.schema.js');
					}
				},
			}),
			description:
				'The individual or set of individuals receiving the goods and services billed in this invoice.',
		},
		recipient: {
			type: new GraphQLUnionType({
				name: 'Invoicerecipient_recipient_Union',
				description:
					'The individual or Organization responsible for balancing of this invoice.',
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
			description:
				'The individual or Organization responsible for balancing of this invoice.',
		},
		_date: {
			type: require('./element.schema.js'),
			description: 'Date/time(s) of when this Invoice was posted.',
		},
		date: {
			type: DateTimeScalar,
			description: 'Date/time(s) of when this Invoice was posted.',
		},
		participant: {
			type: new GraphQLList(require('./invoiceparticipant.schema.js')),
			description:
				'Indicates who or what performed or participated in the charged service.',
		},
		issuer: {
			type: new GraphQLUnionType({
				name: 'Invoiceissuer_issuer_Union',
				description: 'The organizationissuing the Invoice.',
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'The organizationissuing the Invoice.',
		},
		account: {
			type: new GraphQLUnionType({
				name: 'Invoiceaccount_account_Union',
				description:
					'Account which is supposed to be balanced with this Invoice.',
				types: () => [require('./account.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Account') {
						return require('./account.schema.js');
					}
				},
			}),
			description:
				'Account which is supposed to be balanced with this Invoice.',
		},
		lineItem: {
			type: new GraphQLList(require('./invoicelineitem.schema.js')),
			description:
				'Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.',
		},
		totalNet: {
			type: require('./money.schema.js'),
			description: 'Invoice total , taxes excluded.',
		},
		totalGross: {
			type: require('./money.schema.js'),
			description: 'Invoice total, tax included.',
		},
		_paymentTerms: {
			type: require('./element.schema.js'),
			description:
				'Payment details such as banking details, period of payment, deductibles, methods of payment.',
		},
		paymentTerms: {
			type: GraphQLString,
			description:
				'Payment details such as banking details, period of payment, deductibles, methods of payment.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Comments made about the invoice by the issuer, subject, or other participants.',
		},
	}),
});
