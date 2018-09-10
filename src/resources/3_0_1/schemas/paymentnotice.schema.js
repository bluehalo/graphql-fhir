const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let PaymentNoticeResourceType = new GraphQLEnumType({
	name: 'PaymentNoticeResourceType',
	values: {
		PaymentNotice: { value: 'PaymentNotice' }
	}
});

/**
 * @name exports
 * @summary PaymentNotice Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PaymentNotice',
	description: 'Base StructureDefinition for PaymentNotice Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(PaymentNoticeResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'The notice business identifier.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/fm-status
		status: {
			type: CodeScalar,
			description: 'The status of the resource instance.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the resource instance.'
		},
		request: {
			type: require('./reference.schema'),
			description: 'Reference of resource for which payment is being made.'
		},
		response: {
			type: require('./reference.schema'),
			description: 'Reference of response to resource for which payment is being made.'
		},
		statusDate: {
			type: DateScalar,
			description: 'The date when the above payment action occurrred.'
		},
		_statusDate: {
			type: require('./element.schema'),
			description: 'The date when the above payment action occurrred.'
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when this resource was created.'
		},
		_created: {
			type: require('./element.schema'),
			description: 'The date when this resource was created.'
		},
		target: {
			type: require('./reference.schema'),
			description: 'The Insurer who is target  of the request.'
		},
		provider: {
			type: require('./reference.schema'),
			description: 'The practitioner who is responsible for the services rendered to the patient.'
		},
		organization: {
			type: require('./reference.schema'),
			description: 'The organization which is responsible for the services rendered to the patient.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/payment-status
		paymentStatus: {
			type: require('./codeableconcept.schema'),
			description: 'The payment status, typically paid: payment sent, cleared: payment received.'
		}
	})
});
