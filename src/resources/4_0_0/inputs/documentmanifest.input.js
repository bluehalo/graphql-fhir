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
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary DocumentManifest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DocumentManifest_Input',
	description:
		'A collection of documents compiled for a purpose together with metadata that applies to the collection.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'DocumentManifest_Enum_input',
					values: { DocumentManifest: { value: 'DocumentManifest' } },
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
		masterIdentifier: {
			type: require('./identifier.input.js'),
			description:
				'A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'Other identifiers associated with the document manifest, including version independent  identifiers.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of this document manifest.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this document manifest.',
		},
		type: {
			type: require('./codeableconcept.input.js'),
			description:
				'The code specifying the type of clinical activity that resulted in placing the associated content into the DocumentManifest.',
		},
		subject: {
			type: GraphQLString,
			description:
				'Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).',
		},
		_created: {
			type: require('./element.input.js'),
			description:
				'When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated, etc.).',
		},
		created: {
			type: DateTimeScalar,
			description:
				'When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated, etc.).',
		},
		author: {
			type: new GraphQLList(GraphQLString),
			description:
				'Identifies who is the author of the manifest. Manifest author is not necessarly the author of the references included.',
		},
		recipient: {
			type: new GraphQLList(GraphQLString),
			description:
				'A patient, practitioner, or organization for which this set of documents is intended.',
		},
		_source: {
			type: require('./element.input.js'),
			description:
				'Identifies the source system, application, or software that produced the document manifest.',
		},
		source: {
			type: UriScalar,
			description:
				'Identifies the source system, application, or software that produced the document manifest.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				"Human-readable description of the source document. This is sometimes known as the 'title'.",
		},
		description: {
			type: GraphQLString,
			description:
				"Human-readable description of the source document. This is sometimes known as the 'title'.",
		},
		content: {
			type: new GraphQLList(new GraphQLNonNull(GraphQLString)),
			description:
				'The list of Resources that consist of the parts of this manifest.',
		},
		related: {
			type: new GraphQLList(require('./documentmanifestrelated.input.js')),
			description:
				'Related identifiers or resources associated with the DocumentManifest.',
		},
	}),
});
