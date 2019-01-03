const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let EnrollmentResponseResourceType = new GraphQLEnumType({
	name: 'EnrollmentResponseResourceType',
	values: {
		EnrollmentResponse: { value: 'EnrollmentResponse' }
	}
});

/**
 * @name exports
 * @summary EnrollmentResponse Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EnrollmentResponse',
	description: 'Base StructureDefinition for EnrollmentResponse Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(EnrollmentResponseResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'The Response business identifier.'
		},
		request: {
			type: require('./reference.schema'),
			description: 'Original request resource reference.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/remittance-outcome
		outcome: {
			type: CodeScalar,
			description: 'Transaction status: error, complete.'
		},
		_outcome: {
			type: require('./element.schema'),
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
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		ruleset: {
			type: require('./coding.schema'),
			description: 'The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		originalRuleset: {
			type: require('./coding.schema'),
			description: 'The style (standard) and version of the original material which was converted into this resource.'
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
			description: 'The Insurer who produced this adjudicated response.'
		},
		requestProvider: {
			type: require('./reference.schema'),
			description: 'The practitioner who is responsible for the services rendered to the patient.'
		},
		requestOrganization: {
			type: require('./reference.schema'),
			description: 'The organization which is responsible for the services rendered to the patient.'
		}
	})
});
