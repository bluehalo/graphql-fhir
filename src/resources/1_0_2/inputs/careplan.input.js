const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary CarePlan Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CarePlan_Input',
	description: 'Base StructureDefinition for CarePlan Resource.',
	fields: () => extendSchema({
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).'
		},
		subject: {
			type: require('./reference.input'),
			description: 'Identifies the patient or group whose intended care is described by the plan.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/care-plan-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.'
		},
		_status: {
			type: require('./element.input'),
			description: 'Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.'
		},
		context: {
			type: require('./reference.input'),
			description: 'Identifies the context in which this particular CarePlan is defined.'
		},
		period: {
			type: require('./period.input'),
			description: 'Indicates when the plan did (or is intended to) come into effect and end.'
		},
		author: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Identifies the individual(s) or ogranization who is responsible for the content of the care plan.'
		},
		modified: {
			type: DateTimeScalar,
			description: 'Identifies the most recent date on which the plan has been revised.'
		},
		_modified: {
			type: require('./element.input'),
			description: 'Identifies the most recent date on which the plan has been revised.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/care-plan-category
		category: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Identifies what \'kind\' of plan this is to support differentiation between multiple co-existing plans; e.g. \'Home health\', \'psychiatric\', \'asthma\', \'disease management\', \'wellness plan\', etc.'
		},
		description: {
			type: GraphQLString,
			description: 'A description of the scope and nature of the plan.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A description of the scope and nature of the plan.'
		},
		addresses: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.'
		},
		support: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Identifies portions of the patient\'s record that specifically influenced the formation of the plan.  These might include co-morbidities, recent procedures, limitations, recent assessments, etc.'
		},
		relatedPlan: {
			type: new GraphQLList(require('./careplanrelatedplan.input')),
			description: 'Identifies CarePlans with some sort of formal relationship to the current plan.'
		},
		participant: {
			type: new GraphQLList(require('./careplanparticipant.input')),
			description: 'Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.'
		},
		goal: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Describes the intended objective(s) of carrying out the care plan.'
		},
		activity: {
			type: new GraphQLList(require('./careplanactivity.input')),
			description: 'Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.'
		},
		note: {
			type: require('./annotation.input'),
			description: 'General notes about the care plan not covered elsewhere.'
		}
	})
});
