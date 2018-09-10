const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let EnrollmentRequestResourceType = new GraphQLEnumType({
	name: 'EnrollmentRequestResourceType',
	values: {
		EnrollmentRequest: { value: 'EnrollmentRequest' }
	}
});

/**
 * @name exports
 * @summary EnrollmentRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EnrollmentRequest',
	description: 'Base StructureDefinition for EnrollmentRequest Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(EnrollmentRequestResourceType),
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
			description: 'The date when this resource was created.'
		},
		_created: {
			type: require('./element.schema'),
			description: 'The date when this resource was created.'
		},
		insurer: {
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
		subject: {
			type: require('./reference.schema'),
			description: 'Patient Resource.'
		},
		coverage: {
			type: require('./reference.schema'),
			description: 'Reference to the program or plan identification, underwriter or payor.'
		}
	})
});
