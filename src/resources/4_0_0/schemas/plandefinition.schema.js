const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');

/**
 * @name exports
 * @summary PlanDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PlanDefinition',
	description:
		'This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'PlanDefinition_Enum_schema',
					values: { PlanDefinition: { value: 'PlanDefinition' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_url: {
			type: require('./element.schema.js'),
			description:
				'An absolute URI that is used to identify this plan definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this plan definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the plan definition is stored on different servers.',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute URI that is used to identify this plan definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this plan definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the plan definition is stored on different servers.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'A formal identifier that is used to identify this plan definition when it is represented in other formats, or referenced in a specification, model, design or an instance.',
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'The identifier that is used to identify this version of the plan definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the plan definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the plan definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the plan definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'A natural language name identifying the plan definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		name: {
			type: GraphQLString,
			description:
				'A natural language name identifying the plan definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		_title: {
			type: require('./element.schema.js'),
			description:
				'A short, descriptive, user-friendly title for the plan definition.',
		},
		title: {
			type: GraphQLString,
			description:
				'A short, descriptive, user-friendly title for the plan definition.',
		},
		_subtitle: {
			type: require('./element.schema.js'),
			description:
				'An explanatory or alternate title for the plan definition giving additional information about its content.',
		},
		subtitle: {
			type: GraphQLString,
			description:
				'An explanatory or alternate title for the plan definition giving additional information about its content.',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A high-level category for the plan definition that distinguishes the kinds of systems that would be interested in the plan definition.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'The status of this plan definition. Enables tracking the life-cycle of the content.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of this plan definition. Enables tracking the life-cycle of the content.',
		},
		_experimental: {
			type: require('./element.schema.js'),
			description:
				'A Boolean value to indicate that this plan definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A Boolean value to indicate that this plan definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.',
		},
		subjectCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A code or group definition that describes the intended subject of the plan definition.',
		},
		subjectReference: {
			type: new GraphQLUnionType({
				name: 'PlanDefinitionsubjectReference_subjectReference_Union',
				description:
					'A code or group definition that describes the intended subject of the plan definition.',
				types: () => [require('./group.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Group') {
						return require('./group.schema.js');
					}
				},
			}),
			description:
				'A code or group definition that describes the intended subject of the plan definition.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'The date  (and optionally time) when the plan definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the plan definition changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date  (and optionally time) when the plan definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the plan definition changes.',
		},
		_publisher: {
			type: require('./element.schema.js'),
			description:
				'The name of the organization or individual that published the plan definition.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the organization or individual that published the plan definition.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema.js')),
			description:
				'Contact details to assist a user in finding and communicating with the publisher.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				"A free text natural language description of the plan definition from a consumer's perspective.",
		},
		description: {
			type: GraphQLString,
			description:
				"A free text natural language description of the plan definition from a consumer's perspective.",
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate plan definition instances.',
		},
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A legal or geographic region in which the plan definition is intended to be used.',
		},
		_purpose: {
			type: require('./element.schema.js'),
			description:
				'Explanation of why this plan definition is needed and why it has been designed as it has.',
		},
		purpose: {
			type: GraphQLString,
			description:
				'Explanation of why this plan definition is needed and why it has been designed as it has.',
		},
		_usage: {
			type: require('./element.schema.js'),
			description:
				'A detailed description of how the plan definition is used from a clinical perspective.',
		},
		usage: {
			type: GraphQLString,
			description:
				'A detailed description of how the plan definition is used from a clinical perspective.',
		},
		_copyright: {
			type: require('./element.schema.js'),
			description:
				'A copyright statement relating to the plan definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the plan definition.',
		},
		copyright: {
			type: GraphQLString,
			description:
				'A copyright statement relating to the plan definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the plan definition.',
		},
		_approvalDate: {
			type: require('./element.schema.js'),
			description:
				'The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.',
		},
		approvalDate: {
			type: DateScalar,
			description:
				'The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.',
		},
		_lastReviewDate: {
			type: require('./element.schema.js'),
			description:
				'The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.',
		},
		lastReviewDate: {
			type: DateScalar,
			description:
				'The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.',
		},
		effectivePeriod: {
			type: require('./period.schema.js'),
			description:
				'The period during which the plan definition content was or is planned to be in active use.',
		},
		topic: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Descriptive topics related to the content of the plan definition. Topics provide a high-level categorization of the definition that can be useful for filtering and searching.',
		},
		author: {
			type: new GraphQLList(require('./contactdetail.schema.js')),
			description:
				'An individiual or organization primarily involved in the creation and maintenance of the content.',
		},
		editor: {
			type: new GraphQLList(require('./contactdetail.schema.js')),
			description:
				'An individual or organization primarily responsible for internal coherence of the content.',
		},
		reviewer: {
			type: new GraphQLList(require('./contactdetail.schema.js')),
			description:
				'An individual or organization primarily responsible for review of some aspect of the content.',
		},
		endorser: {
			type: new GraphQLList(require('./contactdetail.schema.js')),
			description:
				'An individual or organization responsible for officially endorsing the content for use in some setting.',
		},
		relatedArtifact: {
			type: new GraphQLList(require('./relatedartifact.schema.js')),
			description:
				'Related artifacts such as additional documentation, justification, or bibliographic references.',
		},
		_library: {
			type: require('./element.schema.js'),
			description:
				'A reference to a Library resource containing any formal logic used by the plan definition.',
		},
		library: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'A reference to a Library resource containing any formal logic used by the plan definition.',
		},
		goal: {
			type: new GraphQLList(require('./plandefinitiongoal.schema.js')),
			description:
				'Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.',
		},
		action: {
			type: new GraphQLList(require('./plandefinitionaction.schema.js')),
			description:
				'An action or group of actions to be taken as part of the plan.',
		},
	}),
});
