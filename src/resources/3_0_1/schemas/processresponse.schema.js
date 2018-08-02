const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let ProcessResponseResourceType = new GraphQLEnumType({
	name: 'ProcessResponseResourceType',
	values: {
		ProcessResponse: { value: 'ProcessResponse' }
	}
});

/**
 * @name exports
 * @summary ProcessResponse Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ProcessResponse',
	description: 'Base StructureDefinition for ProcessResponse Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ProcessResponseResourceType),
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
		created: {
			type: DateTimeScalar,
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		_created: {
			type: require('./element.schema'),
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		organization: {
			type: require('./reference.schema'),
			description: 'The organization who produced this adjudicated response.'
		},
		request: {
			type: require('./reference.schema'),
			description: 'Original request resource reference.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/process-outcome
		outcome: {
			type: require('./codeableconcept.schema'),
			description: 'Transaction status: error, complete, held.'
		},
		disposition: {
			type: GraphQLString,
			description: 'A description of the status of the adjudication or processing.'
		},
		_disposition: {
			type: require('./element.schema'),
			description: 'A description of the status of the adjudication or processing.'
		},
		requestProvider: {
			type: require('./reference.schema'),
			description: 'The practitioner who is responsible for the services rendered to the patient.'
		},
		requestOrganization: {
			type: require('./reference.schema'),
			description: 'The organization which is responsible for the services rendered to the patient.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/forms
		form: {
			type: require('./codeableconcept.schema'),
			description: 'The form to be used for printing the content.'
		},
		processNote: {
			type: new GraphQLList(require('./processresponseprocessnote.schema')),
			description: 'Suite of processing notes or additional requirements if the processing has been held.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/adjudication-error
		error: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Processing errors.'
		},
		communicationRequest: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Request for additional supporting or authorizing information, such as: documents, images or resources.'
		}
	})
});
