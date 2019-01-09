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

/**
 * @name exports
 * @summary StructureDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'StructureDefinition',
	description: 'Base StructureDefinition for StructureDefinition Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'StructureDefinition_Enum_schema',
					values: { StructureDefinition: { value: 'StructureDefinition' } },
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
				'An absolute URL that is used to identify this structure definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this structure definition is (or will be) published.',
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description:
				'An absolute URL that is used to identify this structure definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this structure definition is (or will be) published.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				"Formal identifier that is used to identify this StructureDefinition when it is represented in other formats, or referenced in a specification, model, design or an instance  (should be globally unique OID, UUID, or URI), (if it's not possible to use the literal URI).",
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'The identifier that is used to identify this version of the StructureDefinition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the StructureDefinition author manually.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the StructureDefinition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the StructureDefinition author manually.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'A free text natural language name identifying the StructureDefinition.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'A free text natural language name identifying the StructureDefinition.',
		},
		_display: {
			type: require('./element.schema.js'),
			description:
				'Defined so that applications can use this name when displaying the value of the extension to the user.',
		},
		display: {
			type: GraphQLString,
			description:
				'Defined so that applications can use this name when displaying the value of the extension to the user.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The status of the StructureDefinition.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the StructureDefinition.',
		},
		_experimental: {
			type: require('./element.schema.js'),
			description:
				'This StructureDefinition was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'This StructureDefinition was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		_publisher: {
			type: require('./element.schema.js'),
			description:
				'The name of the individual or organization that published the structure definition.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the individual or organization that published the structure definition.',
		},
		contact: {
			type: new GraphQLList(require('./structuredefinitioncontact.schema.js')),
			description:
				'Contacts to assist a user in finding and communicating with the publisher.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'The date this version of the structure definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date this version of the structure definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'A free text natural language description of the StructureDefinition and its use.',
		},
		description: {
			type: GraphQLString,
			description:
				'A free text natural language description of the StructureDefinition and its use.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/use-context
		useContext: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of structure definitions.',
		},
		_requirements: {
			type: require('./element.schema.js'),
			description:
				"Explains why this structure definition is needed and why it's been constrained as it has.",
		},
		requirements: {
			type: GraphQLString,
			description:
				"Explains why this structure definition is needed and why it's been constrained as it has.",
		},
		_copyright: {
			type: require('./element.schema.js'),
			description:
				'A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.',
		},
		copyright: {
			type: GraphQLString,
			description:
				'A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/profile-code
		code: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				'A set of terms from external terminologies that may be used to assist with indexing and searching of templates.',
		},
		_fhirVersion: {
			type: require('./element.schema.js'),
			description:
				'The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.',
		},
		fhirVersion: {
			type: IdScalar,
			description:
				'The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.',
		},
		mapping: {
			type: new GraphQLList(require('./structuredefinitionmapping.schema.js')),
			description: 'An external specification that the content is mapped to.',
		},
		_kind: {
			type: require('./element.schema.js'),
			description:
				'Defines the kind of structure that this definition is describing.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/structure-definition-kind
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Defines the kind of structure that this definition is describing.',
		},
		_constrainedType: {
			type: require('./element.schema.js'),
			description:
				'The type of type that is being constrained - a data type, an extension, a resource, including abstract ones. If this field is present, it indicates that the structure definition is a constraint. If it is not present, then the structure definition is the definition of a base structure.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/defined-types
		constrainedType: {
			type: CodeScalar,
			description:
				'The type of type that is being constrained - a data type, an extension, a resource, including abstract ones. If this field is present, it indicates that the structure definition is a constraint. If it is not present, then the structure definition is the definition of a base structure.',
		},
		_abstract: {
			type: require('./element.schema.js'),
			description:
				'Whether structure this definition describes is abstract or not  - that is, whether an actual exchanged item can ever be of this type.',
		},
		abstract: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description:
				'Whether structure this definition describes is abstract or not  - that is, whether an actual exchanged item can ever be of this type.',
		},
		_contextType: {
			type: require('./element.schema.js'),
			description:
				'If this is an extension, Identifies the context within FHIR resources where the extension can be used.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/extension-context
		contextType: {
			type: CodeScalar,
			description:
				'If this is an extension, Identifies the context within FHIR resources where the extension can be used.',
		},
		_context: {
			type: require('./element.schema.js'),
			description:
				'Identifies the types of resource or data type elements to which the extension can be applied.',
		},
		context: {
			type: new GraphQLList(GraphQLString),
			description:
				'Identifies the types of resource or data type elements to which the extension can be applied.',
		},
		_base: {
			type: require('./element.schema.js'),
			description:
				'An absolute URI that is the base structure from which this set of constraints is derived.',
		},
		base: {
			type: UriScalar,
			description:
				'An absolute URI that is the base structure from which this set of constraints is derived.',
		},
		snapshot: {
			type: require('./structuredefinitionsnapshot.schema.js'),
			description:
				'A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.',
		},
		differential: {
			type: require('./structuredefinitiondifferential.schema.js'),
			description:
				'A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.',
		},
	}),
});
