const DateScalar = require('../scalars/date.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

let GoalResourceInputType = new GraphQLEnumType({
	name: 'GoalResourceInputType',
	values: {
		Goal: { value: 'Goal' }
	}
});

/**
 * @name exports
 * @summary Goal Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Goal_Input',
	description: 'Base StructureDefinition for Goal Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(GoalResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).'
		},
		subject: {
			type: require('./reference.input'),
			description: 'Identifies the patient, group or organization for whom the goal is being established.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/goal-start-event
		startDate: {
			type: DateScalar,
			description: 'The date or event after which the goal should begin being pursued.'
		},
		_startDate: {
			type: require('./element.input'),
			description: 'The date or event after which the goal should begin being pursued.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/goal-start-event
		startCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'The date or event after which the goal should begin being pursued.'
		},
		targetDate: {
			type: DateScalar,
			description: 'Indicates either the date or the duration after start by which the goal should be met.'
		},
		_targetDate: {
			type: require('./element.input'),
			description: 'Indicates either the date or the duration after start by which the goal should be met.'
		},
		targetQuantity: {
			type: require('./quantity.input'),
			description: 'Indicates either the date or the duration after start by which the goal should be met.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/goal-category
		category: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Indicates a category the goal falls within.'
		},
		description: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Human-readable description of a specific desired objective of care.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Human-readable description of a specific desired objective of care.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/goal-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates whether the goal has been reached and is still considered relevant.'
		},
		_status: {
			type: require('./element.input'),
			description: 'Indicates whether the goal has been reached and is still considered relevant.'
		},
		statusDate: {
			type: DateScalar,
			description: 'Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.'
		},
		_statusDate: {
			type: require('./element.input'),
			description: 'Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/goal-status-reason
		statusReason: {
			type: require('./codeableconcept.input'),
			description: 'Captures the reason for the current status.'
		},
		author: {
			type: require('./reference.input'),
			description: 'Indicates whose goal this is - patient goal, practitioner goal, etc.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/goal-priority
		priority: {
			type: require('./codeableconcept.input'),
			description: 'Identifies the mutually agreed level of importance associated with reaching/sustaining the goal.'
		},
		addresses: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The identified conditions and other health record elements that are intended to be addressed by the goal.'
		},
		note: {
			type: new GraphQLList(require('./annotation.input')),
			description: 'Any comments related to the goal.'
		},
		outcome: {
			type: new GraphQLList(require('./goaloutcome.input')),
			description: 'Identifies the change (or lack of change) at the point where the goal was deepmed to be cancelled or achieved.'
		}
	})
});
