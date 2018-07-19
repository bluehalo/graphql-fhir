const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let EnrollmentRequestResourceInputType = new GraphQLEnumType({
	name: 'EnrollmentRequestResourceInputType',
	values: {
		EnrollmentRequest: { value: 'EnrollmentRequest' }
	}
});

/**
 * @name exports
 * @summary EnrollmentRequest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EnrollmentRequest_Input',
	description: 'Base StructureDefinition for EnrollmentRequest Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(EnrollmentRequestResourceInputType),
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
			description: 'The date when this resource was created.'
		},
		_created: {
			type: require('./element.input'),
			description: 'The date when this resource was created.'
		},
		insurer: {
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
		subject: {
			type: require('./reference.input'),
			description: 'Patient Resource.'
		},
		coverage: {
			type: require('./reference.input'),
			description: 'Reference to the program or plan identification, underwriter or payor.'
		}
	})
});
