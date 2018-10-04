const DateTimeScalar = require('../scalars/datetime.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

let ClaimResponseResourceInputType = new GraphQLEnumType({
	name: 'ClaimResponseResourceInputType',
	values: {
		ClaimResponse: { value: 'ClaimResponse' }
	}
});

/**
 * @name exports
 * @summary ClaimResponse Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimResponse_Input',
	description: 'Base StructureDefinition for ClaimResponse Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ClaimResponseResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'The Response business identifier.'
		},
		request: {
			type: require('./reference.input'),
			description: 'Original request resource referrence.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		ruleset: {
			type: require('./coding.input'),
			description: 'The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		originalRuleset: {
			type: require('./coding.input'),
			description: 'The style (standard) and version of the original material which was converted into this resource.'
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		_created: {
			type: require('./element.input'),
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		organization: {
			type: require('./reference.input'),
			description: 'The Insurer who produced this adjudicated response.'
		},
		requestProvider: {
			type: require('./reference.input'),
			description: 'The practitioner who is responsible for the services rendered to the patient.'
		},
		requestOrganization: {
			type: require('./reference.input'),
			description: 'The organization which is responsible for the services rendered to the patient.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/remittance-outcome
		outcome: {
			type: CodeScalar,
			description: 'Transaction status: error, complete.'
		},
		_outcome: {
			type: require('./element.input'),
			description: 'Transaction status: error, complete.'
		},
		disposition: {
			type: GraphQLString,
			description: 'A description of the status of the adjudication.'
		},
		_disposition: {
			type: require('./element.input'),
			description: 'A description of the status of the adjudication.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/payeetype
		payeeType: {
			type: require('./coding.input'),
			description: 'Party to be reimbursed: Subscriber, provider, other.'
		},
		item: {
			type: new GraphQLList(require('./claimresponseitem.input')),
			description: 'The first tier service adjudications for submitted services.'
		},
		addItem: {
			type: new GraphQLList(require('./claimresponseadditem.input')),
			description: 'The first tier service adjudications for payor added services.'
		},
		error: {
			type: new GraphQLList(require('./claimresponseerror.input')),
			description: 'Mutually exclusive with Services Provided (Item).'
		},
		totalCost: {
			type: require('./quantity.input'),
			description: 'The total cost of the services reported.'
		},
		unallocDeductable: {
			type: require('./quantity.input'),
			description: 'The amount of deductible applied which was not allocated to any particular service line.'
		},
		totalBenefit: {
			type: require('./quantity.input'),
			description: 'Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductible).'
		},
		paymentAdjustment: {
			type: require('./quantity.input'),
			description: 'Adjustment to the payment of this transaction which is not related to adjudication of this transaction.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/adjustment-reason
		paymentAdjustmentReason: {
			type: require('./coding.input'),
			description: 'Reason for the payment adjustment.'
		},
		paymentDate: {
			type: DateScalar,
			description: 'Estimated payment data.'
		},
		_paymentDate: {
			type: require('./element.input'),
			description: 'Estimated payment data.'
		},
		paymentAmount: {
			type: require('./quantity.input'),
			description: 'Payable less any payment adjustment.'
		},
		paymentRef: {
			type: require('./identifier.input'),
			description: 'Payment identifier.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/fundsreserve
		reserved: {
			type: require('./coding.input'),
			description: 'Status of funds reservation (For provider, for Patient, None).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/forms
		form: {
			type: require('./coding.input'),
			description: 'The form to be used for printing the content.'
		},
		note: {
			type: new GraphQLList(require('./claimresponsenote.input')),
			description: 'Note text.'
		},
		coverage: {
			type: new GraphQLList(require('./claimresponsecoverage.input')),
			description: 'Financial instrument by which payment information for health care.'
		}
	})
});
