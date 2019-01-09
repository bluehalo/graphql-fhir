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
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const CanonicalScalar = require('../scalars/canonical.scalar.js');

/**
 * @name exports
 * @summary Measure Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Measure_Input',
	description:
		'The Measure resource provides the definition of a quality measure.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Measure_Enum_input',
					values: { Measure: { value: 'Measure' } },
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
				'An absolute URI that is used to identify this measure when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this measure is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the measure is stored on different servers.',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute URI that is used to identify this measure when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this measure is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the measure is stored on different servers.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'A formal identifier that is used to identify this measure when it is represented in other formats, or referenced in a specification, model, design or an instance.',
		},
		_version: {
			type: require('./element.input.js'),
			description:
				'The identifier that is used to identify this version of the measure when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the measure author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the measure when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the measure author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				'A natural language name identifying the measure. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		name: {
			type: GraphQLString,
			description:
				'A natural language name identifying the measure. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		_title: {
			type: require('./element.input.js'),
			description: 'A short, descriptive, user-friendly title for the measure.',
		},
		title: {
			type: GraphQLString,
			description: 'A short, descriptive, user-friendly title for the measure.',
		},
		_subtitle: {
			type: require('./element.input.js'),
			description:
				'An explanatory or alternate title for the measure giving additional information about its content.',
		},
		subtitle: {
			type: GraphQLString,
			description:
				'An explanatory or alternate title for the measure giving additional information about its content.',
		},
		_status: {
			type: require('./element.input.js'),
			description:
				'The status of this measure. Enables tracking the life-cycle of the content.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of this measure. Enables tracking the life-cycle of the content.',
		},
		_experimental: {
			type: require('./element.input.js'),
			description:
				'A Boolean value to indicate that this measure is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A Boolean value to indicate that this measure is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.',
		},
		subjectCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description:
				'The intended subjects for the measure. If this element is not provided, a Patient subject is assumed, but the subject of the measure can be anything.',
		},
		subjectReference: {
			type: GraphQLString,
			description:
				'The intended subjects for the measure. If this element is not provided, a Patient subject is assumed, but the subject of the measure can be anything.',
		},
		_date: {
			type: require('./element.input.js'),
			description:
				'The date  (and optionally time) when the measure was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the measure changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date  (and optionally time) when the measure was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the measure changes.',
		},
		_publisher: {
			type: require('./element.input.js'),
			description:
				'The name of the organization or individual that published the measure.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the organization or individual that published the measure.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.input.js')),
			description:
				'Contact details to assist a user in finding and communicating with the publisher.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				"A free text natural language description of the measure from a consumer's perspective.",
		},
		description: {
			type: GraphQLString,
			description:
				"A free text natural language description of the measure from a consumer's perspective.",
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.input.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate measure instances.',
		},
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'A legal or geographic region in which the measure is intended to be used.',
		},
		_purpose: {
			type: require('./element.input.js'),
			description:
				'Explanation of why this measure is needed and why it has been designed as it has.',
		},
		purpose: {
			type: GraphQLString,
			description:
				'Explanation of why this measure is needed and why it has been designed as it has.',
		},
		_usage: {
			type: require('./element.input.js'),
			description:
				'A detailed description, from a clinical perspective, of how the measure is used.',
		},
		usage: {
			type: GraphQLString,
			description:
				'A detailed description, from a clinical perspective, of how the measure is used.',
		},
		_copyright: {
			type: require('./element.input.js'),
			description:
				'A copyright statement relating to the measure and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the measure.',
		},
		copyright: {
			type: GraphQLString,
			description:
				'A copyright statement relating to the measure and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the measure.',
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
				'The period during which the measure content was or is planned to be in active use.',
		},
		topic: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Descriptive topics related to the content of the measure. Topics provide a high-level categorization grouping types of measures that can be useful for filtering and searching.',
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
		_library: {
			type: require('./element.input.js'),
			description:
				'A reference to a Library resource containing the formal logic used by the measure.',
		},
		library: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'A reference to a Library resource containing the formal logic used by the measure.',
		},
		_disclaimer: {
			type: require('./element.input.js'),
			description:
				'Notices and disclaimers regarding the use of the measure or related to intellectual property (such as code systems) referenced by the measure.',
		},
		disclaimer: {
			type: GraphQLString,
			description:
				'Notices and disclaimers regarding the use of the measure or related to intellectual property (such as code systems) referenced by the measure.',
		},
		scoring: {
			type: require('./codeableconcept.input.js'),
			description:
				'Indicates how the calculation is performed for the measure, including proportion, ratio, continuous-variable, and cohort. The value set is extensible, allowing additional measure scoring types to be represented.',
		},
		compositeScoring: {
			type: require('./codeableconcept.input.js'),
			description:
				'If this is a composite measure, the scoring method used to combine the component measures to determine the composite score.',
		},
		type: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Indicates whether the measure is used to examine a process, an outcome over time, a patient-reported outcome, or a structure measure such as utilization.',
		},
		_riskAdjustment: {
			type: require('./element.input.js'),
			description:
				'A description of the risk adjustment factors that may impact the resulting score for the measure and how they may be accounted for when computing and reporting measure results.',
		},
		riskAdjustment: {
			type: GraphQLString,
			description:
				'A description of the risk adjustment factors that may impact the resulting score for the measure and how they may be accounted for when computing and reporting measure results.',
		},
		_rateAggregation: {
			type: require('./element.input.js'),
			description:
				'Describes how to combine the information calculated, based on logic in each of several populations, into one summarized result.',
		},
		rateAggregation: {
			type: GraphQLString,
			description:
				'Describes how to combine the information calculated, based on logic in each of several populations, into one summarized result.',
		},
		_rationale: {
			type: require('./element.input.js'),
			description:
				'Provides a succinct statement of the need for the measure. Usually includes statements pertaining to importance criterion: impact, gap in care, and evidence.',
		},
		rationale: {
			type: GraphQLString,
			description:
				'Provides a succinct statement of the need for the measure. Usually includes statements pertaining to importance criterion: impact, gap in care, and evidence.',
		},
		_clinicalRecommendationStatement: {
			type: require('./element.input.js'),
			description:
				'Provides a summary of relevant clinical guidelines or other clinical recommendations supporting the measure.',
		},
		clinicalRecommendationStatement: {
			type: GraphQLString,
			description:
				'Provides a summary of relevant clinical guidelines or other clinical recommendations supporting the measure.',
		},
		improvementNotation: {
			type: require('./codeableconcept.input.js'),
			description:
				'Information on whether an increase or decrease in score is the preferred result (e.g., a higher score indicates better quality OR a lower score indicates better quality OR quality is within a range).',
		},
		_definition: {
			type: require('./element.input.js'),
			description:
				'Provides a description of an individual term used within the measure.',
		},
		definition: {
			type: new GraphQLList(GraphQLString),
			description:
				'Provides a description of an individual term used within the measure.',
		},
		_guidance: {
			type: require('./element.input.js'),
			description:
				'Additional guidance for the measure including how it can be used in a clinical context, and the intent of the measure.',
		},
		guidance: {
			type: GraphQLString,
			description:
				'Additional guidance for the measure including how it can be used in a clinical context, and the intent of the measure.',
		},
		group: {
			type: new GraphQLList(require('./measuregroup.input.js')),
			description: 'A group of population criteria for the measure.',
		},
		supplementalData: {
			type: new GraphQLList(require('./measuresupplementaldata.input.js')),
			description:
				'The supplemental data criteria for the measure report, specified as either the name of a valid CQL expression within a referenced library, or a valid FHIR Resource Path.',
		},
	}),
});
