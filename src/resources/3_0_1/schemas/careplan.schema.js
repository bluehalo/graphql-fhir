const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let CarePlanResourceType = new GraphQLEnumType({
	name: 'CarePlanResourceType',
	values: {
		CarePlan: { value: 'CarePlan' }
	}
});

/**
 * @name exports
 * @summary CarePlan Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CarePlan',
	description: 'Base StructureDefinition for CarePlan Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(CarePlanResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).'
		},
		definition: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Identifies the protocol, questionnaire, guideline or other specification the care plan should be conducted in accordance with.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A care plan that is fulfilled in whole or in part by this care plan.'
		},
		replaces: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Completed or terminated care plan whose function is taken by this new care plan.'
		},
		partOf: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A larger care plan of which this particular care plan is a component or step.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/care-plan-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/care-plan-intent
		intent: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.'
		},
		_intent: {
			type: require('./element.schema'),
			description: 'Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/care-plan-category
		category: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Identifies what \'kind\' of plan this is to support differentiation between multiple co-existing plans; e.g. \'Home health\', \'psychiatric\', \'asthma\', \'disease management\', \'wellness plan\', etc.'
		},
		title: {
			type: GraphQLString,
			description: 'Human-friendly name for the CarePlan.'
		},
		_title: {
			type: require('./element.schema'),
			description: 'Human-friendly name for the CarePlan.'
		},
		description: {
			type: GraphQLString,
			description: 'A description of the scope and nature of the plan.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A description of the scope and nature of the plan.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Identifies the patient or group whose intended care is described by the plan.'
		},
		context: {
			type: require('./reference.schema'),
			description: 'Identifies the original context in which this particular CarePlan was created.'
		},
		period: {
			type: require('./period.schema'),
			description: 'Indicates when the plan did (or is intended to) come into effect and end.'
		},
		author: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Identifies the individual(s) or ogranization who is responsible for the content of the care plan.'
		},
		careTeam: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.'
		},
		addresses: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan.'
		},
		supportingInfo: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Identifies portions of the patient\'s record that specifically influenced the formation of the plan.  These might include co-morbidities, recent procedures, limitations, recent assessments, etc.'
		},
		goal: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Describes the intended objective(s) of carrying out the care plan.'
		},
		activity: {
			type: new GraphQLList(require('./careplanactivity.schema')),
			description: 'Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'General notes about the care plan not covered elsewhere.'
		}
	})
});
