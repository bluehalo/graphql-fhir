const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let EligibilityResponseResourceType = new GraphQLEnumType({
	name: 'EligibilityResponseResourceType',
	values: {
		EligibilityResponse: { value: 'EligibilityResponse' }
	}
});

/**
 * @name exports
 * @summary EligibilityResponse Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EligibilityResponse',
	description: 'Base StructureDefinition for EligibilityResponse Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(EligibilityResponseResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'The Response business identifier.'
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
		created: {
			type: DateTimeScalar,
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		_created: {
			type: require('./element.schema'),
			description: 'The date when the enclosed suite of services were performed or completed.'
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
			description: 'Original request resource reference.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/remittance-outcome
		outcome: {
			type: require('./codeableconcept.schema'),
			description: 'Transaction status: error, complete.'
		},
		disposition: {
			type: GraphQLString,
			description: 'A description of the status of the adjudication.'
		},
		_disposition: {
			type: require('./element.schema'),
			description: 'A description of the status of the adjudication.'
		},
		insurer: {
			type: require('./reference.schema'),
			description: 'The Insurer who produced this adjudicated response.'
		},
		inforce: {
			type: GraphQLBoolean,
			description: 'Flag indicating if the coverage provided is inforce currently  if no service date(s) specified or for the whole duration of the service dates.'
		},
		_inforce: {
			type: require('./element.schema'),
			description: 'Flag indicating if the coverage provided is inforce currently  if no service date(s) specified or for the whole duration of the service dates.'
		},
		insurance: {
			type: new GraphQLList(require('./eligibilityresponseinsurance.schema')),
			description: 'The insurer may provide both the details for the requested coverage as well as details for additional coverages known to the insurer.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/forms
		form: {
			type: require('./codeableconcept.schema'),
			description: 'The form to be used for printing the content.'
		},
		error: {
			type: new GraphQLList(require('./eligibilityresponseerror.schema')),
			description: 'Mutually exclusive with Services Provided (Item).'
		}
	})
});
