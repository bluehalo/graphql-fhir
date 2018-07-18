const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary EnrollmentRequest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EnrollmentRequest_Input',
	description: 'Base StructureDefinition for EnrollmentRequest Resource.',
	fields: () => extendSchema({
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'The Response business identifier.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		ruleset: {
			type: require('./coding.input'),
			description: 'The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		originalRuleset: {
			type: require('./coding.input'),
			description: 'The style (standard) and version of the original material which was converted into this resource.'
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when this resource was created.'
		},
		_created: {
			type: require('./element.input'),
			description: 'The date when this resource was created.'
		},
		target: {
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
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Patient Resource.'
		},
		coverage: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Reference to the program or plan identification, underwriter or payor.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/relationship
		relationship: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'The relationship of the patient to the subscriber.'
		}
	})
});
