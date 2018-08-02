const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let PaymentNoticeResourceInputType = new GraphQLEnumType({
	name: 'PaymentNoticeResourceInputType',
	values: {
		PaymentNotice: { value: 'PaymentNotice' }
	}
});

/**
 * @name exports
 * @summary PaymentNotice Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PaymentNotice_Input',
	description: 'Base StructureDefinition for PaymentNotice Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(PaymentNoticeResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'The Response business identifier.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		ruleset: {
			type: require('./coding.input'),
			description: 'The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		originalRuleset: {
			type: require('./coding.input'),
			description: 'The style (standard) and version of the original material which was converted into this resource.'
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when this resource was created.'
		},
		_created: {
			type: require('./element.input'),
			description: 'The date when this resource was created.'
		},
		target: {
			type: require('./reference.input'),
			description: 'The Insurer who is target  of the request.'
		},
		provider: {
			type: require('./reference.input'),
			description: 'The practitioner who is responsible for the services rendered to the patient.'
		},
		organization: {
			type: require('./reference.input'),
			description: 'The organization which is responsible for the services rendered to the patient.'
		},
		request: {
			type: require('./reference.input'),
			description: 'Reference of resource to reverse.'
		},
		response: {
			type: require('./reference.input'),
			description: 'Reference of response to resource to reverse.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/payment-status
		paymentStatus: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'The payment status, typically paid: payment sent, cleared: payment received.'
		}
	})
});
