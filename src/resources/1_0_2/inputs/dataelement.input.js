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
const DateTimeScalar = require('../scalars/dateTime.scalar.js');

/**
 * @name exports
 * @summary DataElement Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DataElement_Input',
	description: 'Base StructureDefinition for DataElement Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'DataElement_Enum_input',
					values: { DataElement: { value: 'DataElement' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
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
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_url: {
			type: require('./element.input.js'),
			description:
				'An absolute URL that is used to identify this data element when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this data element is (or will be) published.',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute URL that is used to identify this data element when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this data element is (or will be) published.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'Formal identifier that is used to identify this data element when it is represented in other formats, or referenced in a specification, model, design or an instance.',
		},
		_version: {
			type: require('./element.input.js'),
			description:
				'The identifier that is used to identify this version of the data element when it is referenced in a StructureDefinition, Questionnaire or instance. This is an arbitrary value managed by the definition author manually.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the data element when it is referenced in a StructureDefinition, Questionnaire or instance. This is an arbitrary value managed by the definition author manually.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				'The term used by humans to refer to the data element.  Should ideally be unique within the context in which the data element is expected to be used.',
		},
		name: {
			type: GraphQLString,
			description:
				'The term used by humans to refer to the data element.  Should ideally be unique within the context in which the data element is expected to be used.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of the data element.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the data element.',
		},
		_experimental: {
			type: require('./element.input.js'),
			description:
				'A flag to indicate that this search data element definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A flag to indicate that this search data element definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		_publisher: {
			type: require('./element.input.js'),
			description:
				'The name of the individual or organization that published the data element.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the individual or organization that published the data element.',
		},
		contact: {
			type: new GraphQLList(require('./dataelementcontact.input.js')),
			description:
				'Contacts to assist a user in finding and communicating with the publisher.',
		},
		_date: {
			type: require('./element.input.js'),
			description:
				'The date this version of the data element was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the data element  changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date this version of the data element was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the data element  changes.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/use-context
		useContext: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of data element definitions.',
		},
		_copyright: {
			type: require('./element.input.js'),
			description:
				'A copyright statement relating to the definition of the data element. Copyright statements are generally legal restrictions on the use and publishing of the details of the definition of the data element.',
		},
		copyright: {
			type: GraphQLString,
			description:
				'A copyright statement relating to the definition of the data element. Copyright statements are generally legal restrictions on the use and publishing of the details of the definition of the data element.',
		},
		_stringency: {
			type: require('./element.input.js'),
			description:
				'Identifies how precise the data element is in its definition.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/dataelement-stringency
		stringency: {
			type: CodeScalar,
			description:
				'Identifies how precise the data element is in its definition.',
		},
		mapping: {
			type: new GraphQLList(require('./dataelementmapping.input.js')),
			description:
				'Identifies a specification (other than a terminology) that the elements which make up the DataElement have some correspondence with.',
		},
		element: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./elementdefinition.input.js')),
			),
			description:
				'Defines the structure, type, allowed values and other constraining characteristics of the data element.',
		},
	}),
});
