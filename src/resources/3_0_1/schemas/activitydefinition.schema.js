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

/**
 * @name exports
 * @summary ActivityDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ActivityDefinition',
	description: 'Base StructureDefinition for ActivityDefinition Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'ActivityDefinition_Enum_schema',
					values: { ActivityDefinition: { value: 'ActivityDefinition' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_url: {
			type: require('./element.schema.js'),
			description:
				'An absolute URI that is used to identify this activity definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this activity definition is (or will be) published. The URL SHOULD include the major version of the activity definition. For more information see [Technical and Business Versions](resource.html#versions).',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute URI that is used to identify this activity definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this activity definition is (or will be) published. The URL SHOULD include the major version of the activity definition. For more information see [Technical and Business Versions](resource.html#versions).',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'A formal identifier that is used to identify this activity definition when it is represented in other formats, or referenced in a specification, model, design or an instance.',
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'The identifier that is used to identify this version of the activity definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the activity definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active assets.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the activity definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the activity definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active assets.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'A natural language name identifying the activity definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		name: {
			type: GraphQLString,
			description:
				'A natural language name identifying the activity definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		_title: {
			type: require('./element.schema.js'),
			description:
				'A short, descriptive, user-friendly title for the activity definition.',
		},
		title: {
			type: GraphQLString,
			description:
				'A short, descriptive, user-friendly title for the activity definition.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'The status of this activity definition. Enables tracking the life-cycle of the content.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of this activity definition. Enables tracking the life-cycle of the content.',
		},
		_experimental: {
			type: require('./element.schema.js'),
			description:
				'A boolean value to indicate that this activity definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A boolean value to indicate that this activity definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'The date  (and optionally time) when the activity definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the activity definition changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date  (and optionally time) when the activity definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the activity definition changes.',
		},
		_publisher: {
			type: require('./element.schema.js'),
			description:
				'The name of the individual or organization that published the activity definition.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the individual or organization that published the activity definition.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				"A free text natural language description of the activity definition from a consumer's perspective.",
		},
		description: {
			type: GraphQLString,
			description:
				"A free text natural language description of the activity definition from a consumer's perspective.",
		},
		_purpose: {
			type: require('./element.schema.js'),
			description:
				'Explaination of why this activity definition is needed and why it has been designed as it has.',
		},
		purpose: {
			type: GraphQLString,
			description:
				'Explaination of why this activity definition is needed and why it has been designed as it has.',
		},
		_usage: {
			type: require('./element.schema.js'),
			description:
				'A detailed description of how the asset is used from a clinical perspective.',
		},
		usage: {
			type: GraphQLString,
			description:
				'A detailed description of how the asset is used from a clinical perspective.',
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
				"The date on which the resource content was last reviewed. Review happens periodically after approval, but doesn't change the original approval date.",
		},
		lastReviewDate: {
			type: DateScalar,
			description:
				"The date on which the resource content was last reviewed. Review happens periodically after approval, but doesn't change the original approval date.",
		},
		effectivePeriod: {
			type: require('./period.schema.js'),
			description:
				'The period during which the activity definition content was or is planned to be in active use.',
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate activity definition instances.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A legal or geographic region in which the activity definition is intended to be used.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/definition-topic
		topic: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.',
		},
		contributor: {
			type: new GraphQLList(require('./contributor.schema.js')),
			description:
				'A contributor to the content of the asset, including authors, editors, reviewers, and endorsers.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema.js')),
			description:
				'Contact details to assist a user in finding and communicating with the publisher.',
		},
		_copyright: {
			type: require('./element.schema.js'),
			description:
				'A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.',
		},
		copyright: {
			type: GraphQLString,
			description:
				'A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.',
		},
		relatedArtifact: {
			type: new GraphQLList(require('./relatedartifact.schema.js')),
			description:
				'Related artifacts such as additional documentation, justification, or bibliographic references.',
		},
		library: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ActivityDefinitionlibrary_library_Union',
					description:
						'A reference to a Library resource containing any formal logic used by the asset.',
					types: () => [require('./library.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Library') {
							return require('./library.schema.js');
						}
					},
				}),
			),
			description:
				'A reference to a Library resource containing any formal logic used by the asset.',
		},
		_kind: {
			type: require('./element.schema.js'),
			description:
				'A description of the kind of resource the activity definition is representing. For example, a MedicationRequest, a ProcedureRequest, or a CommunicationRequest. Typically, but not always, this is a Request resource.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		kind: {
			type: CodeScalar,
			description:
				'A description of the kind of resource the activity definition is representing. For example, a MedicationRequest, a ProcedureRequest, or a CommunicationRequest. Typically, but not always, this is a Request resource.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/procedure-code
		code: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Detailed description of the type of activity; e.g. What lab test, what procedure, what kind of encounter.',
		},
		timingTiming: {
			type: require('./timing.schema.js'),
			description:
				'The period, timing or frequency upon which the described activity is to occur.',
		},
		_timingDateTime: {
			type: require('./element.schema.js'),
			description:
				'The period, timing or frequency upon which the described activity is to occur.',
		},
		timingDateTime: {
			type: DateTimeScalar,
			description:
				'The period, timing or frequency upon which the described activity is to occur.',
		},
		timingPeriod: {
			type: require('./period.schema.js'),
			description:
				'The period, timing or frequency upon which the described activity is to occur.',
		},
		timingRange: {
			type: require('./range.schema.js'),
			description:
				'The period, timing or frequency upon which the described activity is to occur.',
		},
		location: {
			type: new GraphQLUnionType({
				name: 'ActivityDefinitionlocation_location_Union',
				description:
					'Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.',
				types: () => [require('./location.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description:
				'Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.',
		},
		participant: {
			type: new GraphQLList(
				require('./activitydefinitionparticipant.schema.js'),
			),
			description:
				'Indicates who should participate in performing the action described.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		productReference: {
			type: new GraphQLUnionType({
				name: 'ActivityDefinitionproductReference_productReference_Union',
				description:
					'Identifies the food, drug or other product being consumed or supplied in the activity.',
				types: () => [
					require('./medication.schema.js'),
					require('./substance.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Medication') {
						return require('./medication.schema.js');
					}
					if (data && data.resourceType === 'Substance') {
						return require('./substance.schema.js');
					}
				},
			}),
			description:
				'Identifies the food, drug or other product being consumed or supplied in the activity.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/medication-codes
		productCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Identifies the food, drug or other product being consumed or supplied in the activity.',
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description:
				'Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).',
		},
		dosage: {
			type: new GraphQLList(require('./dosage.schema.js')),
			description:
				'Provides detailed dosage instructions in the same way that they are described for MedicationRequest resources.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				"Indicates the sites on the subject's body where the procedure should be performed (I.e. the target sites).",
		},
		transform: {
			type: new GraphQLUnionType({
				name: 'ActivityDefinitiontransform_transform_Union',
				description:
					'A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.',
				types: () => [require('./structuremap.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'StructureMap') {
						return require('./structuremap.schema.js');
					}
				},
			}),
			description:
				'A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.',
		},
		dynamicValue: {
			type: new GraphQLList(
				require('./activitydefinitiondynamicvalue.schema.js'),
			),
			description:
				"Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient's weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the intent resource that would contain the result.",
		},
	}),
});
