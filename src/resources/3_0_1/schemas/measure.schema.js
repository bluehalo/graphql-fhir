const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let MeasureResourceType = new GraphQLEnumType({
	name: 'MeasureResourceType',
	values: {
		Measure: { value: 'Measure' }
	}
});

/**
 * @name exports
 * @summary Measure Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Measure',
	description: 'Base StructureDefinition for Measure Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(MeasureResourceType),
			description: 'Type of this resource.'
		},
		url: {
			type: UriScalar,
			description: 'An absolute URI that is used to identify this measure when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this measure is (or will be) published. The URL SHOULD include the major version of the measure. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		_url: {
			type: require('./element.schema'),
			description: 'An absolute URI that is used to identify this measure when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this measure is (or will be) published. The URL SHOULD include the major version of the measure. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'A formal identifier that is used to identify this measure when it is represented in other formats, or referenced in a specification, model, design or an instance.'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the measure when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the measure author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The identifier that is used to identify this version of the measure when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the measure author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.'
		},
		name: {
			type: GraphQLString,
			description: 'A natural language name identifying the measure. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'A natural language name identifying the measure. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		title: {
			type: GraphQLString,
			description: 'A short, descriptive, user-friendly title for the measure.'
		},
		_title: {
			type: require('./element.schema'),
			description: 'A short, descriptive, user-friendly title for the measure.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this measure. Enables tracking the life-cycle of the content.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of this measure. Enables tracking the life-cycle of the content.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'A boolean value to indicate that this measure is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.schema'),
			description: 'A boolean value to indicate that this measure is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date  (and optionally time) when the measure was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the measure changes.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date  (and optionally time) when the measure was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the measure changes.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the measure.'
		},
		_publisher: {
			type: require('./element.schema'),
			description: 'The name of the individual or organization that published the measure.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the measure from a consumer\'s perspective.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A free text natural language description of the measure from a consumer\'s perspective.'
		},
		purpose: {
			type: GraphQLString,
			description: 'Explaination of why this measure is needed and why it has been designed as it has.'
		},
		_purpose: {
			type: require('./element.schema'),
			description: 'Explaination of why this measure is needed and why it has been designed as it has.'
		},
		usage: {
			type: GraphQLString,
			description: 'A detailed description of how the measure is used from a clinical perspective.'
		},
		_usage: {
			type: require('./element.schema'),
			description: 'A detailed description of how the measure is used from a clinical perspective.'
		},
		approvalDate: {
			type: DateScalar,
			description: 'The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.'
		},
		_approvalDate: {
			type: require('./element.schema'),
			description: 'The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.'
		},
		lastReviewDate: {
			type: DateScalar,
			description: 'The date on which the resource content was last reviewed. Review happens periodically after approval, but doesn\'t change the original approval date.'
		},
		_lastReviewDate: {
			type: require('./element.schema'),
			description: 'The date on which the resource content was last reviewed. Review happens periodically after approval, but doesn\'t change the original approval date.'
		},
		effectivePeriod: {
			type: require('./period.schema'),
			description: 'The period during which the measure content was or is planned to be in active use.'
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate measure instances.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A legal or geographic region in which the measure is intended to be used.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/definition-topic
		topic: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Descriptive topics related to the content of the measure. Topics provide a high-level categorization of the type of the measure that can be useful for filtering and searching.'
		},
		contributor: {
			type: new GraphQLList(require('./contributor.schema')),
			description: 'A contributor to the content of the measure, including authors, editors, reviewers, and endorsers.'
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema')),
			description: 'Contact details to assist a user in finding and communicating with the publisher.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the measure and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the measure.'
		},
		_copyright: {
			type: require('./element.schema'),
			description: 'A copyright statement relating to the measure and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the measure.'
		},
		relatedArtifact: {
			type: new GraphQLList(require('./relatedartifact.schema')),
			description: 'Related artifacts such as additional documentation, justification, or bibliographic references.'
		},
		library: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A reference to a Library resource containing the formal logic used by the measure.'
		},
		disclaimer: {
			type: GraphQLString,
			description: 'Notices and disclaimers regarding the use of the measure, or related to intellectual property (such as code systems) referenced by the measure.'
		},
		_disclaimer: {
			type: require('./element.schema'),
			description: 'Notices and disclaimers regarding the use of the measure, or related to intellectual property (such as code systems) referenced by the measure.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/measure-scoring
		scoring: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates how the calculation is performed for the measure, including proportion, ratio, continuous variable, and cohort. The value set is extensible, allowing additional measure scoring types to be represented.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/composite-measure-scoring
		compositeScoring: {
			type: require('./codeableconcept.schema'),
			description: 'If this is a composite measure, the scoring method used to combine the component measures to determine the composite score.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/measure-type
		type: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Indicates whether the measure is used to examine a process, an outcome over time, a patient-reported outcome, or a structure measure such as utilization.'
		},
		riskAdjustment: {
			type: GraphQLString,
			description: 'A description of the risk adjustment factors that may impact the resulting score for the measure and how they may be accounted for when computing and reporting measure results.'
		},
		_riskAdjustment: {
			type: require('./element.schema'),
			description: 'A description of the risk adjustment factors that may impact the resulting score for the measure and how they may be accounted for when computing and reporting measure results.'
		},
		rateAggregation: {
			type: GraphQLString,
			description: 'Describes how to combine the information calculated, based on logic in each of several populations, into one summarized result.'
		},
		_rateAggregation: {
			type: require('./element.schema'),
			description: 'Describes how to combine the information calculated, based on logic in each of several populations, into one summarized result.'
		},
		rationale: {
			type: GraphQLString,
			description: 'Provides a succint statement of the need for the measure. Usually includes statements pertaining to importance criterion: impact, gap in care, and evidence.'
		},
		_rationale: {
			type: require('./element.schema'),
			description: 'Provides a succint statement of the need for the measure. Usually includes statements pertaining to importance criterion: impact, gap in care, and evidence.'
		},
		clinicalRecommendationStatement: {
			type: GraphQLString,
			description: 'Provides a summary of relevant clinical guidelines or other clinical recommendations supporting the measure.'
		},
		_clinicalRecommendationStatement: {
			type: require('./element.schema'),
			description: 'Provides a summary of relevant clinical guidelines or other clinical recommendations supporting the measure.'
		},
		improvementNotation: {
			type: GraphQLString,
			description: 'Information on whether an increase or decrease in score is the preferred result (e.g., a higher score indicates better quality OR a lower score indicates better quality OR quality is whthin a range).'
		},
		_improvementNotation: {
			type: require('./element.schema'),
			description: 'Information on whether an increase or decrease in score is the preferred result (e.g., a higher score indicates better quality OR a lower score indicates better quality OR quality is whthin a range).'
		},
		definition: {
			type: new GraphQLList(GraphQLString),
			description: 'Provides a description of an individual term used within the measure.'
		},
		_definition: {
			type: require('./element.schema'),
			description: 'Provides a description of an individual term used within the measure.'
		},
		guidance: {
			type: GraphQLString,
			description: 'Additional guidance for the measure including how it can be used in a clinical context, and the intent of the measure.'
		},
		_guidance: {
			type: require('./element.schema'),
			description: 'Additional guidance for the measure including how it can be used in a clinical context, and the intent of the measure.'
		},
		set: {
			type: GraphQLString,
			description: 'The measure set, e.g. Preventive Care and Screening.'
		},
		_set: {
			type: require('./element.schema'),
			description: 'The measure set, e.g. Preventive Care and Screening.'
		},
		group: {
			type: new GraphQLList(require('./measuregroup.schema')),
			description: 'A group of population criteria for the measure.'
		},
		supplementalData: {
			type: new GraphQLList(require('./measuresupplementaldata.schema')),
			description: 'The supplemental data criteria for the measure report, specified as either the name of a valid CQL expression within a referenced library, or a valid FHIR Resource Path.'
		}
	})
});
