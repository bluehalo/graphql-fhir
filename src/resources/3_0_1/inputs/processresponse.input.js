const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let ProcessResponseResourceInputType = new GraphQLEnumType({
	name: 'ProcessResponseResourceInputType',
	values: {
		ProcessResponse: { value: 'ProcessResponse' }
	}
});

/**
 * @name exports
 * @summary ProcessResponse Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ProcessResponse_Input',
	description: 'Base StructureDefinition for ProcessResponse Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ProcessResponseResourceInputType),
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
			description: 'The organization who produced this adjudicated response.'
		},
		request: {
			type: require('./reference.input'),
			description: 'Original request resource reference.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/process-outcome
		outcome: {
			type: require('./codeableconcept.input'),
			description: 'Transaction status: error, complete, held.'
		},
		disposition: {
			type: GraphQLString,
			description: 'A description of the status of the adjudication or processing.'
		},
		_disposition: {
			type: require('./element.input'),
			description: 'A description of the status of the adjudication or processing.'
		},
		requestProvider: {
			type: require('./reference.input'),
			description: 'The practitioner who is responsible for the services rendered to the patient.'
		},
		requestOrganization: {
			type: require('./reference.input'),
			description: 'The organization which is responsible for the services rendered to the patient.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/forms
		form: {
			type: require('./codeableconcept.input'),
			description: 'The form to be used for printing the content.'
		},
		processNote: {
			type: new GraphQLList(require('./processresponseprocessnote.input')),
			description: 'Suite of processing notes or additional requirements if the processing has been held.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/adjudication-error
		error: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Processing errors.'
		},
		communicationRequest: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Request for additional supporting or authorizing information, such as: documents, images or resources.'
		}
	})
});
