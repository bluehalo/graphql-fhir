const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLList,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let EligibilityRequestResourceInputType = new GraphQLEnumType({
	name: 'EligibilityRequestResourceInputType',
	values: {
		EligibilityRequest: { value: 'EligibilityRequest' },
	},
});

/**
 * @name exports
 * @summary EligibilityRequest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EligibilityRequest_Input',
	description: 'Base StructureDefinition for EligibilityRequest Resource.',
	fields: () =>
		extendSchema(require('./domainresource.input'), {
			resourceType: {
				type: new GraphQLNonNull(EligibilityRequestResourceInputType),
				description: 'Type of this resource.',
			},
			identifier: {
				type: new GraphQLList(require('./identifier.input')),
				description: 'The Response business identifier.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
			ruleset: {
				type: require('./coding.input'),
				description:
					'The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
			originalRuleset: {
				type: require('./coding.input'),
				description:
					'The style (standard) and version of the original material which was converted into this resource.',
			},
			created: {
				type: DateTimeScalar,
				description: 'The date when this resource was created.',
			},
			_created: {
				type: require('./element.input'),
				description: 'The date when this resource was created.',
			},
			target: {
				type: require('./reference.input'),
				description: 'The Insurer who is target  of the request.',
			},
			provider: {
				type: require('./reference.input'),
				description:
					'The practitioner who is responsible for the services rendered to the patient.',
			},
			organization: {
				type: require('./reference.input'),
				description:
					'The organization which is responsible for the services rendered to the patient.',
			},
		}),
});
