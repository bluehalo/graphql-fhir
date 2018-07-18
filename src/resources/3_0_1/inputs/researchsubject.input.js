const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ResearchSubject Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ResearchSubject_Input',
	description: 'Base StructureDefinition for ResearchSubject Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'Identifiers assigned to this research study by the sponsor or other systems.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/research-subject-status
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
