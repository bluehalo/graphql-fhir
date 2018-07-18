const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ResearchSubject Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ResearchSubject',
	description: 'Base StructureDefinition for ResearchSubject Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: require('./identifier.schema'),
			description: 'Identifiers assigned to this research study by the sponsor or other systems.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/research-subject-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The current state of the subject.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The current state of the subject.'
		},
		period: {
			type: require('./period.schema'),
			description: 'The dates the subject began and ended their participation in the study.'
		},
		study: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Reference to the study the subject is participating in.'
		},
		individual: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The record of the person or animal who is involved in the study.'
		},
		assignedArm: {
			type: GraphQLString,
			description: 'The name of the arm in the study the subject is expected to follow as part of this study.'
		},
		_assignedArm: {
			type: require('./element.schema'),
			description: 'The name of the arm in the study the subject is expected to follow as part of this study.'
		},
		actualArm: {
			type: GraphQLString,
			description: 'The name of the arm in the study the subject actually followed as part of this study.'
		},
		_actualArm: {
			type: require('./element.schema'),
			description: 'The name of the arm in the study the subject actually followed as part of this study.'
		},
		consent: {
			type: require('./reference.schema'),
			description: 'A record of the patient\'s informed agreement to participate in the study.'
		}
	})
});
