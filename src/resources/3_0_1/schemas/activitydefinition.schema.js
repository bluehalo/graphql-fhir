const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ActivityDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ActivityDefinition',
	description: 'Base StructureDefinition for ActivityDefinition Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		url: {
			type: UriScalar,
			description: 'An absolute URI that is used to identify this activity definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this activity definition is (or will be) published. The URL SHOULD include the major version of the activity definition. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		_url: {
			type: require('./element.schema'),
			description: 'An absolute URI that is used to identify this activity definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this activity definition is (or will be) published. The URL SHOULD include the major version of the activity definition. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'A formal identifier that is used to identify this activity definition when it is represented in other formats, or referenced in a specification, model, design or an instance.'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the activity definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the activity definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active assets.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The identifier that is used to identify this version of the activity definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the activity definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active assets.'
		},
		name: {
			type: GraphQLString,
			description: 'A natural language name identifying the activity definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'A natural language name identifying the activity definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		title: {
			type: GraphQLString,
			description: 'A short, descriptive, user-friendly title for the activity definition.'
		},
		_title: {
			type: require('./element.schema'),
			description: 'A short, descriptive, user-friendly title for the activity definition.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this activity definition. Enables tracking the life-cycle of the content.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of this activity definition. Enables tracking the life-cycle of the content.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'A boolean value to indicate that this activity definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.schema'),
			description: 'A boolean value to indicate that this activity definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date  (and optionally time) when the activity definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the activity definition changes.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date  (and optionally time) when the activity definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the activity definition changes.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the activity definition.'
		},
		_publisher: {
			type: require('./element.schema'),
			description: 'The name of the individual or organization that published the activity definition.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the activity definition from a consumer\'s perspective.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A free text natural language description of the activity definition from a consumer\'s perspective.'
		},
		purpose: {
			type: GraphQLString,
			description: 'Explaination of why this activity definition is needed and why it has been designed as it has.'
		},
		_purpose: {
			type: require('./element.schema'),
			description: 'Explaination of why this activity definition is needed and why it has been designed as it has.'
		},
		usage: {
			type: GraphQLString,
			description: 'A detailed description of how the asset is used from a clinical perspective.'
		},
		_usage: {
			type: require('./element.schema'),
			description: 'A detailed description of how the asset is used from a clinical perspective.'
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
			description: 'The period during which the activity definition content was or is planned to be in active use.'
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate activity definition instances.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A legal or geographic region in which the activity definition is intended to be used.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/definition-topic
		topic: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.'
		},
		contributor: {
			type: new GraphQLList(require('./contributor.schema')),
			description: 'A contributor to the content of the asset, including authors, editors, reviewers, and endorsers.'
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema')),
			description: 'Contact details to assist a user in finding and communicating with the publisher.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.'
		},
		_copyright: {
			type: require('./element.schema'),
			description: 'A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.'
		},
		relatedArtifact: {
			type: new GraphQLList(require('./relatedartifact.schema')),
			description: 'Related artifacts such as additional documentation, justification, or bibliographic references.'
		},
		library: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A reference to a Library resource containing any formal logic used by the asset.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		kind: {
			type: CodeScalar,
			description: 'A description of the kind of resource the activity definition is representing. For example, a MedicationRequest, a ProcedureRequest, or a CommunicationRequest. Typically, but not always, this is a Request resource.'
		},
		_kind: {
			type: require('./element.schema'),
			description: 'A description of the kind of resource the activity definition is representing. For example, a MedicationRequest, a ProcedureRequest, or a CommunicationRequest. Typically, but not always, this is a Request resource.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-code
		code: {
			type: require('./codeableconcept.schema'),
			description: 'Detailed description of the type of activity; e.g. What lab test, what procedure, what kind of encounter.'
		},
		timingTiming: {
			type: require('./timing.schema'),
			description: 'The period, timing or frequency upon which the described activity is to occur.'
		},
		timingDateTime: {
			type: DateTimeScalar,
			description: 'The period, timing or frequency upon which the described activity is to occur.'
		},
		_timingDateTime: {
			type: require('./element.schema'),
			description: 'The period, timing or frequency upon which the described activity is to occur.'
		},
		timingPeriod: {
			type: require('./period.schema'),
			description: 'The period, timing or frequency upon which the described activity is to occur.'
		},
		timingRange: {
			type: require('./range.schema'),
			description: 'The period, timing or frequency upon which the described activity is to occur.'
		},
		location: {
			type: require('./reference.schema'),
			description: 'Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.'
		},
		participant: {
			type: new GraphQLList(require('./activitydefinitionparticipant.schema')),
			description: 'Indicates who should participate in performing the action described.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		productReference: {
			type: require('./reference.schema'),
			description: 'Identifies the food, drug or other product being consumed or supplied in the activity.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		productCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'Identifies the food, drug or other product being consumed or supplied in the activity.'
		},
		quantity: {
			type: require('./quantity.schema'),
			description: 'Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).'
		},
		dosage: {
			type: new GraphQLList(require('./dosage.schema')),
			description: 'Provides detailed dosage instructions in the same way that they are described for MedicationRequest resources.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Indicates the sites on the subject\'s body where the procedure should be performed (I.e. the target sites).'
		},
		transform: {
			type: require('./reference.schema'),
			description: 'A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.'
		},
		dynamicValue: {
			type: new GraphQLList(require('./activitydefinitiondynamicvalue.schema')),
			description: 'Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient\'s weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the intent resource that would contain the result.'
		}
	})
});
