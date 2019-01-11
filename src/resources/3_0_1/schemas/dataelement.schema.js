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
 * @summary DataElement Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DataElement',
	description: 'Base StructureDefinition for DataElement Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'DataElement_Enum_schema',
					values: { DataElement: { value: 'DataElement' } },
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
				'An absolute URI that is used to identify this data element when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this data element is (or will be) published. The URL SHOULD include the major version of the data element. For more information see [Technical and Business Versions](resource.html#versions).',
		},
		url: {
			type: UriScalar,
			description:
				'An absolute URI that is used to identify this data element when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this data element is (or will be) published. The URL SHOULD include the major version of the data element. For more information see [Technical and Business Versions](resource.html#versions).',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'A formal identifier that is used to identify this data element when it is represented in other formats, or referenced in a specification, model, design or an instance.',
		},
		_version: {
			type: require('./element.schema.js'),
			description:
				'The identifier that is used to identify this version of the data element when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the data element author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		version: {
			type: GraphQLString,
			description:
				'The identifier that is used to identify this version of the data element when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the data element author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'The status of this data element. Enables tracking the life-cycle of the content.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The status of this data element. Enables tracking the life-cycle of the content.',
		},
		_experimental: {
			type: require('./element.schema.js'),
			description:
				'A boolean value to indicate that this data element is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		experimental: {
			type: GraphQLBoolean,
			description:
				'A boolean value to indicate that this data element is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.',
		},
		_date: {
			type: require('./element.schema.js'),
			description:
				'The date  (and optionally time) when the data element was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the data element changes.',
		},
		date: {
			type: DateTimeScalar,
			description:
				'The date  (and optionally time) when the data element was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the data element changes.',
		},
		_publisher: {
			type: require('./element.schema.js'),
			description:
				'The name of the individual or organization that published the data element.',
		},
		publisher: {
			type: GraphQLString,
			description:
				'The name of the individual or organization that published the data element.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'A natural language name identifying the data element. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		name: {
			type: GraphQLString,
			description:
				'A natural language name identifying the data element. This name should be usable as an identifier for the module by machine processing applications such as code generation.',
		},
		_title: {
			type: require('./element.schema.js'),
			description:
				'A short, descriptive, user-friendly title for the data element.',
		},
		title: {
			type: GraphQLString,
			description:
				'A short, descriptive, user-friendly title for the data element.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema.js')),
			description:
				'Contact details to assist a user in finding and communicating with the publisher.',
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.schema.js')),
			description:
				'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate data element instances.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A legal or geographic region in which the data element is intended to be used.',
		},
		_copyright: {
			type: require('./element.schema.js'),
			description:
				'A copyright statement relating to the data element and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the data element.',
		},
		copyright: {
			type: GraphQLString,
			description:
				'A copyright statement relating to the data element and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the data element.',
		},
		_stringency: {
			type: require('./element.schema.js'),
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
			type: new GraphQLList(require('./dataelementmapping.schema.js')),
			description:
				'Identifies a specification (other than a terminology) that the elements which make up the DataElement have some correspondence with.',
		},
		element: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./elementdefinition.schema.js')),
			),
			description:
				'Defines the structure, type, allowed values and other constraining characteristics of the data element.',
		},
	}),
});
