const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const IdScalar = require('../scalars/id.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let StructureDefinitionResourceType = new GraphQLEnumType({
	name: 'StructureDefinitionResourceType',
	values: {
		StructureDefinition: { value: 'StructureDefinition' }
	}
});

/**
 * @name exports
 * @summary StructureDefinition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'StructureDefinition',
	description: 'Base StructureDefinition for StructureDefinition Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(StructureDefinitionResourceType),
			description: 'Type of this resource.'
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'An absolute URL that is used to identify this structure definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this structure definition is (or will be) published.'
		},
		_url: {
			type: require('./element.schema'),
			description: 'An absolute URL that is used to identify this structure definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this structure definition is (or will be) published.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Formal identifier that is used to identify this StructureDefinition when it is represented in other formats, or referenced in a specification, model, design or an instance  (should be globally unique OID, UUID, or URI), (if it\'s not possible to use the literal URI).'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the StructureDefinition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the StructureDefinition author manually.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The identifier that is used to identify this version of the StructureDefinition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the StructureDefinition author manually.'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A free text natural language name identifying the StructureDefinition.'
		},
		_name: {
			type: require('./element.schema'),
			description: 'A free text natural language name identifying the StructureDefinition.'
		},
		display: {
			type: GraphQLString,
			description: 'Defined so that applications can use this name when displaying the value of the extension to the user.'
		},
		_display: {
			type: require('./element.schema'),
			description: 'Defined so that applications can use this name when displaying the value of the extension to the user.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the StructureDefinition.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the StructureDefinition.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'This StructureDefinition was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.schema'),
			description: 'This StructureDefinition was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the structure definition.'
		},
		_publisher: {
			type: require('./element.schema'),
			description: 'The name of the individual or organization that published the structure definition.'
		},
		contact: {
			type: new GraphQLList(require('./structuredefinitioncontact.schema')),
			description: 'Contacts to assist a user in finding and communicating with the publisher.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date this version of the structure definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The date this version of the structure definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the StructureDefinition and its use.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A free text natural language description of the StructureDefinition and its use.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/use-context
		useContext: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of structure definitions.'
		},
		requirements: {
			type: GraphQLString,
			description: 'Explains why this structure definition is needed and why it\'s been constrained as it has.'
		},
		_requirements: {
			type: require('./element.schema'),
			description: 'Explains why this structure definition is needed and why it\'s been constrained as it has.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.'
		},
		_copyright: {
			type: require('./element.schema'),
			description: 'A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/profile-code
		code: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'A set of terms from external terminologies that may be used to assist with indexing and searching of templates.'
		},
		fhirVersion: {
			type: IdScalar,
			description: 'The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.'
		},
		_fhirVersion: {
			type: require('./element.schema'),
			description: 'The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.'
		},
		mapping: {
			type: new GraphQLList(require('./structuredefinitionmapping.schema')),
			description: 'An external specification that the content is mapped to.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/structure-definition-kind
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Defines the kind of structure that this definition is describing.'
		},
		_kind: {
			type: require('./element.schema'),
			description: 'Defines the kind of structure that this definition is describing.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/defined-types
		constrainedType: {
			type: CodeScalar,
			description: 'The type of type that is being constrained - a data type, an extension, a resource, including abstract ones. If this field is present, it indicates that the structure definition is a constraint. If it is not present, then the structure definition is the definition of a base structure.'
		},
		_constrainedType: {
			type: require('./element.schema'),
			description: 'The type of type that is being constrained - a data type, an extension, a resource, including abstract ones. If this field is present, it indicates that the structure definition is a constraint. If it is not present, then the structure definition is the definition of a base structure.'
		},
		abstract: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'Whether structure this definition describes is abstract or not  - that is, whether an actual exchanged item can ever be of this type.'
		},
		_abstract: {
			type: require('./element.schema'),
			description: 'Whether structure this definition describes is abstract or not  - that is, whether an actual exchanged item can ever be of this type.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/extension-context
		contextType: {
			type: CodeScalar,
			description: 'If this is an extension, Identifies the context within FHIR resources where the extension can be used.'
		},
		_contextType: {
			type: require('./element.schema'),
			description: 'If this is an extension, Identifies the context within FHIR resources where the extension can be used.'
		},
		context: {
			type: new GraphQLList(GraphQLString),
			description: 'Identifies the types of resource or data type elements to which the extension can be applied.'
		},
		_context: {
			type: require('./element.schema'),
			description: 'Identifies the types of resource or data type elements to which the extension can be applied.'
		},
		base: {
			type: UriScalar,
			description: 'An absolute URI that is the base structure from which this set of constraints is derived.'
		},
		_base: {
			type: require('./element.schema'),
			description: 'An absolute URI that is the base structure from which this set of constraints is derived.'
		},
		snapshot: {
			type: require('./structuredefinitionsnapshot.schema'),
			description: 'A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.'
		},
		differential: {
			type: require('./structuredefinitiondifferential.schema'),
			description: 'A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.'
		}
	})
});
