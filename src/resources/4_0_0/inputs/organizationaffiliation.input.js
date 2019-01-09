const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary OrganizationAffiliation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'OrganizationAffiliation_Input',
	description:
		'Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'OrganizationAffiliation_Enum_input',
					values: {
						OrganizationAffiliation: { value: 'OrganizationAffiliation' },
					},
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
			description: 'Business identifiers that are specific to this role.',
		},
		_active: {
			type: require('./element.input.js'),
			description:
				'Whether this organization affiliation record is in active use.',
		},
		active: {
			type: GraphQLBoolean,
			description:
				'Whether this organization affiliation record is in active use.',
		},
		period: {
			type: require('./period.input.js'),
			description:
				'The period during which the participatingOrganization is affiliated with the primary organization.',
		},
		organization: {
			type: GraphQLString,
			description:
				'Organization where the role is available (primary organization/has members).',
		},
		participatingOrganization: {
			type: GraphQLString,
			description:
				'The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of).',
		},
		network: {
			type: new GraphQLList(GraphQLString),
			description:
				"Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined).",
		},
		code: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Definition of the role the participatingOrganization plays in the association.',
		},
		specialty: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Specific specialty of the participatingOrganization in the context of the role.',
		},
		location: {
			type: new GraphQLList(GraphQLString),
			description: 'The location(s) at which the role occurs.',
		},
		healthcareService: {
			type: new GraphQLList(GraphQLString),
			description: 'Healthcare services provided through the role.',
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input.js')),
			description:
				'Contact details at the participatingOrganization relevant to this Affiliation.',
		},
		endpoint: {
			type: new GraphQLList(GraphQLString),
			description:
				'Technical endpoints providing access to services operated for this role.',
		},
	}),
});
