const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

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
		// ValueSetReference: http://hl7.org/fhir/ValueSet/fm-status
		status: {
			type: CodeScalar,
			description: 'The status of the resource instance.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of the resource instance.'
		},
		patient: {
			type: require('./reference.input'),
			description: 'Patient Resource.'
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		_created: {
			type: require('./element.input'),
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		insurer: {
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
		request: {
			type: require('./reference.input'),
			description: 'Original request resource referrence.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/remittance-outcome
		outcome: {
			type: require('./codeableconcept.input'),
			description: 'Processing outcome errror, partial or complete processing.'
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
			type: require('./codeableconcept.input'),
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
			type: require('./money.input'),
			description: 'The total cost of the services reported.'
		},
		unallocDeductable: {
			type: require('./money.input'),
			description: 'The amount of deductible applied which was not allocated to any particular service line.'
		},
		totalBenefit: {
			type: require('./money.input'),
			description: 'Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductible).'
		},
		payment: {
			type: require('./claimresponsepayment.input'),
			description: 'Payment details for the claim if the claim has been paid.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/fundsreserve
		reserved: {
			type: require('./coding.input'),
			description: 'Status of funds reservation (For provider, for Patient, None).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/forms
		form: {
			type: require('./codeableconcept.input'),
			description: 'The form to be used for printing the content.'
		},
		processNote: {
			type: new GraphQLList(require('./claimresponseprocessnote.input')),
			description: 'Note text.'
		},
		communicationRequest: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Request for additional supporting or authorizing information, such as: documents, images or resources.'
		},
		insurance: {
			type: new GraphQLList(require('./claimresponseinsurance.input')),
			description: 'Financial instrument by which payment information for health care.'
		}
	})
});
