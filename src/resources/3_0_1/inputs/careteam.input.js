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

/**
 * @name exports
 * @summary CareTeam Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CareTeam_Input',
	description: 'Base StructureDefinition for CareTeam Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'CareTeam_Enum_input',
					values: { CareTeam: { value: 'CareTeam' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'This records identifiers associated with this care team that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'Indicates the current state of the care team.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/care-team-status
		status: {
			type: CodeScalar,
			description: 'Indicates the current state of the care team.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/care-team-category
		category: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Identifies what kind of team.  This is to support differentiation between multiple co-existing teams, such as care plan team, episode of care team, longitudinal care team.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				"A label for human use intended to distinguish like teams.  E.g. the 'red' vs. 'green' trauma teams.",
		},
		name: {
			type: GraphQLString,
			description:
				"A label for human use intended to distinguish like teams.  E.g. the 'red' vs. 'green' trauma teams.",
		},
		subject: {
			type: GraphQLString,
			description:
				'Identifies the patient or group whose intended care is handled by the team.',
		},
		context: {
			type: GraphQLString,
			description:
				'The encounter or episode of care that establishes the context for this care team.',
		},
		period: {
			type: require('./period.input.js'),
			description:
				'Indicates when the team did (or is intended to) come into effect and end.',
		},
		participant: {
			type: new GraphQLList(require('./careteamparticipant.input.js')),
			description:
				'Identifies all people and organizations who are expected to be involved in the care team.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Describes why the care team exists.',
		},
		reasonReference: {
			type: new GraphQLList(GraphQLString),
			description: 'Condition(s) that this care team addresses.',
		},
		managingOrganization: {
			type: new GraphQLList(GraphQLString),
			description: 'The organization responsible for the care team.',
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description: 'Comments made about the CareTeam.',
		},
	}),
});
