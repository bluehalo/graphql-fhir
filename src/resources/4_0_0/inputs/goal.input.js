const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary Goal Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Goal_Input',
	description:
		'Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Goal_Enum_input',
					values: { Goal: { value: 'Goal' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'Business identifiers assigned to this goal by the performer or other systems which remain constant as the resource is updated and propagates from server to server.',
		},
		_lifecycleStatus: {
			type: require('./element.input.js'),
			description: 'The state of the goal throughout its lifecycle.',
		},
		lifecycleStatus: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The state of the goal throughout its lifecycle.',
		},
		achievementStatus: {
			type: require('./codeableconcept.input.js'),
			description:
				'Describes the progression, or lack thereof, towards the goal against the target.',
		},
		category: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Indicates a category the goal falls within.',
		},
		priority: {
			type: require('./codeableconcept.input.js'),
			description:
				'Identifies the mutually agreed level of importance associated with reaching/sustaining the goal.',
		},
		description: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				"Human-readable and/or coded description of a specific desired objective of care, such as 'control blood pressure' or 'negotiate an obstacle course' or 'dance with child at wedding'.",
		},
		subject: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'Identifies the patient, group or organization for whom the goal is being established.',
		},
		_startDate: {
			type: require('./element.input.js'),
			description:
				'The date or event after which the goal should begin being pursued.',
		},
		startDate: {
			type: DateScalar,
			description:
				'The date or event after which the goal should begin being pursued.',
		},
		startCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description:
				'The date or event after which the goal should begin being pursued.',
		},
		target: {
			type: new GraphQLList(require('./goaltarget.input.js')),
			description: 'Indicates what should be done by when.',
		},
		_statusDate: {
			type: require('./element.input.js'),
			description:
				'Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.',
		},
		statusDate: {
			type: DateScalar,
			description:
				'Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.',
		},
		_statusReason: {
			type: require('./element.input.js'),
			description: 'Captures the reason for the current status.',
		},
		statusReason: {
			type: GraphQLString,
			description: 'Captures the reason for the current status.',
		},
		expressedBy: {
			type: GraphQLString,
			description:
				'Indicates whose goal this is - patient goal, practitioner goal, etc.',
		},
		addresses: {
			type: new GraphQLList(GraphQLString),
			description:
				'The identified conditions and other health record elements that are intended to be addressed by the goal.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description: 'Any comments related to the goal.',
		},
		outcomeCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Identifies the change (or lack of change) at the point when the status of the goal is assessed.',
		},
		outcomeReference: {
			type: new GraphQLList(GraphQLString),
			description: "Details of what's changed (or not changed).",
		},
	}),
});
