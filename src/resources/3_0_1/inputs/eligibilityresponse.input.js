const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let EligibilityResponseResourceInputType = new GraphQLEnumType({
	name: 'EligibilityResponseResourceInputType',
	values: {
		EligibilityResponse: { value: 'EligibilityResponse' }
	}
});

/**
 * @name exports
 * @summary EligibilityResponse Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EligibilityResponse_Input',
	description: 'Base StructureDefinition for EligibilityResponse Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(EligibilityResponseResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'The Response business identifier.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/fm-status
		status: {
			type: CodeScalar,
			description: 'The status of the resource instance.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of the resource instance.'
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		_created: {
			type: require('./element.input'),
			description: 'The date when the enclosed suite of services were performed or completed.'
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
			description: 'Original request resource reference.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/remittance-outcome
		outcome: {
			type: require('./codeableconcept.input'),
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
		insurer: {
			type: require('./reference.input'),
			description: 'The Insurer who produced this adjudicated response.'
		},
		inforce: {
			type: GraphQLBoolean,
			description: 'Flag indicating if the coverage provided is inforce currently  if no service date(s) specified or for the whole duration of the service dates.'
		},
		_inforce: {
			type: require('./element.input'),
			description: 'Flag indicating if the coverage provided is inforce currently  if no service date(s) specified or for the whole duration of the service dates.'
		},
		insurance: {
			type: new GraphQLList(require('./eligibilityresponseinsurance.input')),
			description: 'The insurer may provide both the details for the requested coverage as well as details for additional coverages known to the insurer.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/forms
		form: {
			type: require('./codeableconcept.input'),
			description: 'The form to be used for printing the content.'
		},
		error: {
			type: new GraphQLList(require('./eligibilityresponseerror.input')),
			description: 'Mutually exclusive with Services Provided (Item).'
		}
	})
});
