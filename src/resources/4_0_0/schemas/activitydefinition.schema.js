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
 * @summary ActivityDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ActivityDefinition',
	description:
		'This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.',
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
				'An absolute URI that is used to identify this activity definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this activity definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the activity definition is stored on different servers.',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute URI that is used to identify this activity definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this activity definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the activity definition is stored on different servers.',
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
		_subtitle: {
			type: require('./element.schema.js'),
			description:
				'An explanatory or alternate title for the activity definition giving additional information about its content.',
		},
		subtitle: {
			type: GraphQLString,
			description:
				'An explanatory or alternate title for the activity definition giving additional information about its content.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'The status of this activity definition. Enables tracking the life-cycle of the content.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of this activity definition. Enables tracking the life-cycle of the content.',
		},
		_experimental: {
			type: require('./element.schema.js'),
			description:
				'A Boolean value to indicate that this activity definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A Boolean value to indicate that this activity definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.',
		},
		subjectCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A code or group definition that describes the intended subject of the activity being defined.',
		},
		subjectReference: {
			type: new GraphQLUnionType({
				name: 'ActivityDefinitionsubjectReference_subjectReference_Union',
				description:
					'A code or group definition that describes the intended subject of the activity being defined.',
				types: () => [require('./group.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Group') {
						return require('./group.schema.js');
					}
				},
			}),
			description:
				'A code or group definition that describes the intended subject of the activity being defined.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'The date  (and optionally time) when the activity definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the activity definition changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date  (and optionally time) when the activity definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the activity definition changes.',
		},
		_publisher: {
			type: require('./element.schema.js'),
			description:
				'The name of the organization or individual that published the activity definition.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the organization or individual that published the activity definition.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema.js')),
			description:
				'Contact details to assist a user in finding and communicating with the publisher.',
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
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate activity definition instances.',
		},
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A legal or geographic region in which the activity definition is intended to be used.',
		},
		_purpose: {
			type: require('./element.schema.js'),
			description:
				'Explanation of why this activity definition is needed and why it has been designed as it has.',
		},
		purpose: {
			type: GraphQLString,
			description:
				'Explanation of why this activity definition is needed and why it has been designed as it has.',
		},
		_usage: {
			type: require('./element.schema.js'),
			description:
				'A detailed description of how the activity definition is used from a clinical perspective.',
		},
		usage: {
			type: GraphQLString,
			description:
				'A detailed description of how the activity definition is used from a clinical perspective.',
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
				'The period during which the activity definition content was or is planned to be in active use.',
		},
		topic: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.',
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
				'A reference to a Library resource containing any formal logic used by the activity definition.',
		},
		library: {
			type: new GraphQLList(CanonicalScalar),
			description:
				'A reference to a Library resource containing any formal logic used by the activity definition.',
		},
		_kind: {
			type: require('./element.schema.js'),
			description:
				'A description of the kind of resource the activity definition is representing. For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest. Typically, but not always, this is a Request resource.',
		},
		kind: {
			type: CodeScalar,
			description:
				'A description of the kind of resource the activity definition is representing. For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest. Typically, but not always, this is a Request resource.',
		},
		_profile: {
			type: require('./element.schema.js'),
			description:
				'A profile to which the target of the activity definition is expected to conform.',
		},
		profile: {
			type: CanonicalScalar,
			description:
				'A profile to which the target of the activity definition is expected to conform.',
		},
		code: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Detailed description of the type of activity; e.g. What lab test, what procedure, what kind of encounter.',
		},
		_intent: {
			type: require('./element.schema.js'),
			description:
				'Indicates the level of authority/intentionality associated with the activity and where the request should fit into the workflow chain.',
		},
		intent: {
			type: CodeScalar,
			description:
				'Indicates the level of authority/intentionality associated with the activity and where the request should fit into the workflow chain.',
		},
		_priority: {
			type: require('./element.schema.js'),
			description:
				'Indicates how quickly the activity  should be addressed with respect to other requests.',
		},
		priority: {
			type: CodeScalar,
			description:
				'Indicates how quickly the activity  should be addressed with respect to other requests.',
		},
		_doNotPerform: {
			type: require('./element.schema.js'),
			description:
				'Set this to true if the definition is to indicate that a particular activity should NOT be performed. If true, this element should be interpreted to reinforce a negative coding. For example NPO as a code with a doNotPerform of true would still indicate to NOT perform the action.',
		},
		doNotPerform: {
			type: GraphQLBoolean,
			description:
				'Set this to true if the definition is to indicate that a particular activity should NOT be performed. If true, this element should be interpreted to reinforce a negative coding. For example NPO as a code with a doNotPerform of true would still indicate to NOT perform the action.',
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
		timingAge: {
			type: require('./age.schema.js'),
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
		timingDuration: {
			type: require('./duration.schema.js'),
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
		bodySite: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				"Indicates the sites on the subject's body where the procedure should be performed (I.e. the target sites).",
		},
		specimenRequirement: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name:
						'ActivityDefinitionspecimenRequirement_specimenRequirement_Union',
					description:
						'Defines specimen requirements for the action to be performed, such as required specimens for a lab test.',
					types: () => [require('./specimendefinition.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'SpecimenDefinition') {
							return require('./specimendefinition.schema.js');
						}
					},
				}),
			),
			description:
				'Defines specimen requirements for the action to be performed, such as required specimens for a lab test.',
		},
		observationRequirement: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name:
						'ActivityDefinitionobservationRequirement_observationRequirement_Union',
					description:
						'Defines observation requirements for the action to be performed, such as body weight or surface area.',
					types: () => [require('./observationdefinition.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'ObservationDefinition') {
							return require('./observationdefinition.schema.js');
						}
					},
				}),
			),
			description:
				'Defines observation requirements for the action to be performed, such as body weight or surface area.',
		},
		observationResultRequirement: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name:
						'ActivityDefinitionobservationResultRequirement_observationResultRequirement_Union',
					description:
						'Defines the observations that are expected to be produced by the action.',
					types: () => [require('./observationdefinition.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'ObservationDefinition') {
							return require('./observationdefinition.schema.js');
						}
					},
				}),
			),
			description:
				'Defines the observations that are expected to be produced by the action.',
		},
		_transform: {
			type: require('./element.schema.js'),
			description:
				'A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.',
		},
		transform: {
			type: CanonicalScalar,
			description:
				'A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.',
		},
		dynamicValue: {
			type: new GraphQLList(
				require('./activitydefinitiondynamicvalue.schema.js'),
			),
			description:
				"Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient's weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the request resource that would contain the result.",
		},
	}),
});
