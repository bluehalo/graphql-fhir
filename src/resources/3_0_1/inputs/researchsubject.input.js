const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

let ResearchSubjectResourceInputType = new GraphQLEnumType({
	name: 'ResearchSubjectResourceInputType',
	values: {
		ResearchSubject: { value: 'ResearchSubject' }
	}
});

/**
 * @name exports
 * @summary ResearchSubject Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ResearchSubject_Input',
	description: 'Base StructureDefinition for ResearchSubject Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ResearchSubjectResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'Identifiers assigned to this research study by the sponsor or other systems.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/research-subject-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The current state of the subject.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The current state of the subject.'
		},
		period: {
			type: require('./period.input'),
			description: 'The dates the subject began and ended their participation in the study.'
		},
		study: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Reference to the study the subject is participating in.'
		},
		individual: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The record of the person or animal who is involved in the study.'
		},
		assignedArm: {
			type: GraphQLString,
			description: 'The name of the arm in the study the subject is expected to follow as part of this study.'
		},
		_assignedArm: {
			type: require('./element.input'),
			description: 'The name of the arm in the study the subject is expected to follow as part of this study.'
		},
		actualArm: {
			type: GraphQLString,
			description: 'The name of the arm in the study the subject actually followed as part of this study.'
		},
		_actualArm: {
			type: require('./element.input'),
			description: 'The name of the arm in the study the subject actually followed as part of this study.'
		},
		consent: {
			type: require('./reference.input'),
			description: 'A record of the patient\'s informed agreement to participate in the study.'
		}
	})
});
