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
 * @summary EpisodeOfCare Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EpisodeOfCare_Input',
	description:
		'An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'EpisodeOfCare_Enum_input',
					values: { EpisodeOfCare: { value: 'EpisodeOfCare' } },
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
				'The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'planned | waitlist | active | onhold | finished | cancelled.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'planned | waitlist | active | onhold | finished | cancelled.',
		},
		statusHistory: {
			type: new GraphQLList(require('./episodeofcarestatushistory.input.js')),
			description:
				'The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).',
		},
		type: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'A classification of the type of episode of care; e.g. specialist referral, disease management, type of funded care.',
		},
		diagnosis: {
			type: new GraphQLList(require('./episodeofcarediagnosis.input.js')),
			description: 'The list of diagnosis relevant to this episode of care.',
		},
		patient: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The patient who is the focus of this episode of care.',
		},
		managingOrganization: {
			type: GraphQLString,
			description:
				'The organization that has assumed the specific responsibilities for the specified duration.',
		},
		period: {
			type: require('./period.input.js'),
			description:
				'The interval during which the managing organization assumes the defined responsibility.',
		},
		referralRequest: {
			type: new GraphQLList(GraphQLString),
			description:
				'Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals.',
		},
		careManager: {
			type: GraphQLString,
			description:
				'The practitioner that is the care manager/care coordinator for this patient.',
		},
		team: {
			type: new GraphQLList(GraphQLString),
			description:
				'The list of practitioners that may be facilitating this episode of care for specific purposes.',
		},
		account: {
			type: new GraphQLList(GraphQLString),
			description:
				'The set of accounts that may be used for billing for this EpisodeOfCare.',
		},
	}),
});
