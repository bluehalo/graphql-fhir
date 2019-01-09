const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary PaymentReconciliationdetail Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PaymentReconciliationdetail',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: require('./identifier.schema.js'),
			description:
				'Unique identifier for the current payment item for the referenced payable.',
		},
		predecessor: {
			type: require('./identifier.schema.js'),
			description:
				'Unique identifier for the prior payment item for the referenced payable.',
		},
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description: 'Code to indicate the nature of the payment.',
		},
		request: {
			type: new GraphQLUnionType({
				name: 'PaymentReconciliationdetailrequest_request_Union',
				description:
					'A resource, such as a Claim, the evaluation of which could lead to payment.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'A resource, such as a Claim, the evaluation of which could lead to payment.',
		},
		submitter: {
			type: new GraphQLUnionType({
				name: 'PaymentReconciliationdetailsubmitter_submitter_Union',
				description:
					'The party which submitted the claim or financial transaction.',
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
				'The party which submitted the claim or financial transaction.',
		},
		response: {
			type: new GraphQLUnionType({
				name: 'PaymentReconciliationdetailresponse_response_Union',
				description:
					'A resource, such as a ClaimResponse, which contains a commitment to payment.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'A resource, such as a ClaimResponse, which contains a commitment to payment.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'The date from the response resource containing a commitment to pay.',
		},
		date: {
			type: DateScalar,
			description:
				'The date from the response resource containing a commitment to pay.',
		},
		responsible: {
			type: new GraphQLUnionType({
				name: 'PaymentReconciliationdetailresponsible_responsible_Union',
				description:
					'A reference to the individual who is responsible for inquiries regarding the response and its payment.',
				types: () => [require('./practitionerrole.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
				},
			}),
			description:
				'A reference to the individual who is responsible for inquiries regarding the response and its payment.',
		},
		payee: {
			type: new GraphQLUnionType({
				name: 'PaymentReconciliationdetailpayee_payee_Union',
				description: 'The party which is receiving the payment.',
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
			description: 'The party which is receiving the payment.',
		},
		amount: {
			type: require('./money.schema.js'),
			description:
				'The monetary amount allocated from the total payment to the payable.',
		},
	}),
});
