const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ClaimResponse Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClaimResponse',
	description: 'Base StructureDefinition for ClaimResponse Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'The Response business identifier.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/fm-status
		status: {
			type: CodeScalar,
			description: 'The status of the resource instance.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the resource instance.'
		},
		patient: {
			type: require('./reference.schema'),
			description: 'Patient Resource.'
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		_created: {
			type: require('./element.schema'),
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		insurer: {
			type: require('./reference.schema'),
			description: 'The Insurer who produced this adjudicated response.'
		},
		requestProvider: {
			type: require('./reference.schema'),
			description: 'The practitioner who is responsible for the services rendered to the patient.'
		},
		requestOrganization: {
			type: require('./reference.schema'),
			description: 'The organization which is responsible for the services rendered to the patient.'
		},
		request: {
			type: require('./reference.schema'),
			description: 'Original request resource referrence.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/remittance-outcome
		outcome: {
			type: require('./codeableconcept.schema'),
			description: 'Processing outcome errror, partial or complete processing.'
		},
		disposition: {
			type: GraphQLString,
			description: 'A description of the status of the adjudication.'
		},
		_disposition: {
			type: require('./element.schema'),
			description: 'A description of the status of the adjudication.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/payeetype
		payeeType: {
			type: require('./codeableconcept.schema'),
			description: 'Party to be reimbursed: Subscriber, provider, other.'
		},
		item: {
			type: new GraphQLList(require('./claimresponseitem.schema')),
			description: 'The first tier service adjudications for submitted services.'
		},
		addItem: {
			type: new GraphQLList(require('./claimresponseadditem.schema')),
			description: 'The first tier service adjudications for payor added services.'
		},
		error: {
			type: new GraphQLList(require('./claimresponseerror.schema')),
			description: 'Mutually exclusive with Services Provided (Item).'
		},
		totalCost: {
			type: require('./money.schema'),
			description: 'The total cost of the services reported.'
		},
		unallocDeductable: {
			type: require('./money.schema'),
			description: 'The amount of deductible applied which was not allocated to any particular service line.'
		},
		totalBenefit: {
			type: require('./money.schema'),
			description: 'Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductible).'
		},
		payment: {
			type: require('./claimresponsepayment.schema'),
			description: 'Payment details for the claim if the claim has been paid.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/fundsreserve
		reserved: {
			type: require('./coding.schema'),
			description: 'Status of funds reservation (For provider, for Patient, None).'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/forms
		form: {
			type: require('./codeableconcept.schema'),
			description: 'The form to be used for printing the content.'
		},
		processNote: {
			type: new GraphQLList(require('./claimresponseprocessnote.schema')),
			description: 'Note text.'
		},
		communicationRequest: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Request for additional supporting or authorizing information, such as: documents, images or resources.'
		},
		insurance: {
			type: new GraphQLList(require('./claimresponseinsurance.schema')),
			description: 'Financial instrument by which payment information for health care.'
		}
	})
});
