const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
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
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/goal-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates whether the goal has been reached and is still considered relevant.'
		},
		_status: {
			type: require('./element.input'),
			description: 'Indicates whether the goal has been reached and is still considered relevant.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/goal-category
		category: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Indicates a category the goal falls within.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/goal-priority
		priority: {
			type: require('./codeableconcept.input'),
			description: 'Identifies the mutually agreed level of importance associated with reaching/sustaining the goal.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		description: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Human-readable and/or coded description of a specific desired objective of care, such as \'control blood pressure\' or \'negotiate an obstacle course\' or \'dance with child at wedding\'.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'Identifies the patient, group or organization for whom the goal is being established.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/goal-start-event
		startDate: {
			type: DateScalar,
			description: 'The date or event after which the goal should begin being pursued.'
		},
		_startDate: {
			type: require('./element.input'),
			description: 'The date or event after which the goal should begin being pursued.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/goal-start-event
		startCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'The date or event after which the goal should begin being pursued.'
		},
		target: {
			type: require('./goaltarget.input'),
			description: 'Indicates what should be done by when.'
		},
		statusDate: {
			type: DateScalar,
			description: 'Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.'
		},
		_statusDate: {
			type: require('./element.input'),
			description: 'Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.'
		},
		statusReason: {
			type: GraphQLString,
			description: 'Captures the reason for the current status.'
		},
		_statusReason: {
			type: require('./element.input'),
			description: 'Captures the reason for the current status.'
		},
		expressedBy: {
			type: require('./reference.input'),
			description: 'Indicates whose goal this is - patient goal, practitioner goal, etc.'
		},
		addresses: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The identified conditions and other health record elements that are intended to be addressed by the goal.'
		},
		note: {
			type: new GraphQLList(require('./annotation.input')),
			description: 'Any comments related to the goal.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		outcomeCode: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Identifies the change (or lack of change) at the point when the status of the goal is assessed.'
		},
		outcomeReference: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Details of what\'s changed (or not changed).'
		}
	})
});
