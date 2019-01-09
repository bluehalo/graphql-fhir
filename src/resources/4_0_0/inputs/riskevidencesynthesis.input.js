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
const DateTimeScalar = require('../scalars/dateTime.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary RiskEvidenceSynthesis Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'RiskEvidenceSynthesis_Input',
	description:
		'The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'RiskEvidenceSynthesis_Enum_input',
					values: { RiskEvidenceSynthesis: { value: 'RiskEvidenceSynthesis' } },
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
		_url: {
			type: require('./element.input.js'),
			description:
				'An absolute URI that is used to identify this risk evidence synthesis when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this risk evidence synthesis is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the risk evidence synthesis is stored on different servers.',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute URI that is used to identify this risk evidence synthesis when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this risk evidence synthesis is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the risk evidence synthesis is stored on different servers.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'A formal identifier that is used to identify this risk evidence synthesis when it is represented in other formats, or referenced in a specification, model, design or an instance.',
		},
		_version: {
			type: require('./element.input.js'),
			description:
				'The identifier that is used to identify this version of the risk evidence synthesis when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the risk evidence synthesis author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the risk evidence synthesis when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the risk evidence synthesis author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				'A natural language name identifying the risk evidence synthesis. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		name: {
			type: GraphQLString,
			description:
				'A natural language name identifying the risk evidence synthesis. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		_title: {
			type: require('./element.input.js'),
			description:
				'A short, descriptive, user-friendly title for the risk evidence synthesis.',
		},
		title: {
			type: GraphQLString,
			description:
				'A short, descriptive, user-friendly title for the risk evidence synthesis.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'The status of this risk evidence synthesis. Enables tracking the life-cycle of the content.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of this risk evidence synthesis. Enables tracking the life-cycle of the content.',
		},
		_date: {
			type: require('./element.input.js'),
			description:
				'The date  (and optionally time) when the risk evidence synthesis was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the risk evidence synthesis changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date  (and optionally time) when the risk evidence synthesis was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the risk evidence synthesis changes.',
		},
		_publisher: {
			type: require('./element.input.js'),
			description:
				'The name of the organization or individual that published the risk evidence synthesis.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the organization or individual that published the risk evidence synthesis.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.input.js')),
			description:
				'Contact details to assist a user in finding and communicating with the publisher.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				"A free text natural language description of the risk evidence synthesis from a consumer's perspective.",
		},
		description: {
			type: GraphQLString,
			description:
				"A free text natural language description of the risk evidence synthesis from a consumer's perspective.",
		},
		note: {
			type: new GraphQLList(require('./annotation.input.js')),
			description:
				'A human-readable string to clarify or explain concepts about the resource.',
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.input.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate risk evidence synthesis instances.',
		},
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'A legal or geographic region in which the risk evidence synthesis is intended to be used.',
		},
		_copyright: {
			type: require('./element.input.js'),
			description:
				'A copyright statement relating to the risk evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the risk evidence synthesis.',
		},
		copyright: {
			type: GraphQLString,
			description:
				'A copyright statement relating to the risk evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the risk evidence synthesis.',
		},
		_approvalDate: {
			type: require('./element.input.js'),
			description:
				'The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.',
		},
		approvalDate: {
			type: DateScalar,
			description:
				'The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.',
		},
		_lastReviewDate: {
			type: require('./element.input.js'),
			description:
				'The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.',
		},
		lastReviewDate: {
			type: DateScalar,
			description:
				'The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date.',
		},
		effectivePeriod: {
			type: require('./period.input.js'),
			description:
				'The period during which the risk evidence synthesis content was or is planned to be in active use.',
		},
		topic: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Descriptive topics related to the content of the RiskEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching.',
		},
		author: {
			type: new GraphQLList(require('./contactdetail.input.js')),
			description:
				'An individiual or organization primarily involved in the creation and maintenance of the content.',
		},
		editor: {
			type: new GraphQLList(require('./contactdetail.input.js')),
			description:
				'An individual or organization primarily responsible for internal coherence of the content.',
		},
		reviewer: {
			type: new GraphQLList(require('./contactdetail.input.js')),
			description:
				'An individual or organization primarily responsible for review of some aspect of the content.',
		},
		endorser: {
			type: new GraphQLList(require('./contactdetail.input.js')),
			description:
				'An individual or organization responsible for officially endorsing the content for use in some setting.',
		},
		relatedArtifact: {
			type: new GraphQLList(require('./relatedartifact.input.js')),
			description:
				'Related artifacts such as additional documentation, justification, or bibliographic references.',
		},
		synthesisType: {
			type: require('./codeableconcept.input.js'),
			description: 'Type of synthesis eg meta-analysis.',
		},
		studyType: {
			type: require('./codeableconcept.input.js'),
			description: 'Type of study eg randomized trial.',
		},
		population: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A reference to a EvidenceVariable resource that defines the population for the research.',
		},
		exposure: {
			type: GraphQLString,
			description:
				'A reference to a EvidenceVariable resource that defines the exposure for the research.',
		},
		outcome: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A reference to a EvidenceVariable resomece that defines the outcome for the research.',
		},
		sampleSize: {
			type: require('./riskevidencesynthesissamplesize.input.js'),
			description:
				'A description of the size of the sample involved in the synthesis.',
		},
		riskEstimate: {
			type: require('./riskevidencesynthesisriskestimate.input.js'),
			description: 'The estimated risk of the outcome.',
		},
		certainty: {
			type: new GraphQLList(
				require('./riskevidencesynthesiscertainty.input.js'),
			),
			description: 'A description of the certainty of the risk estimate.',
		},
	}),
});
