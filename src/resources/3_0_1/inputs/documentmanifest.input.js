const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let DocumentManifestResourceInputType = new GraphQLEnumType({
	name: 'DocumentManifestResourceInputType',
	values: {
		DocumentManifest: { value: 'DocumentManifest' }
	}
});

/**
 * @name exports
 * @summary DocumentManifest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DocumentManifest_Input',
	description: 'Base StructureDefinition for DocumentManifest Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(DocumentManifestResourceInputType),
			description: 'Type of this resource'
		},
		masterIdentifier: {
			type: require('./identifier.input'),
			description: 'A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Other identifiers associated with the document manifest, including version independent  identifiers.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/document-reference-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this document manifest.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of this document manifest.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/c80-doc-typecodes
		type: {
			type: require('./codeableconcept.input'),
			description: 'Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).'
		},
		created: {
			type: DateTimeScalar,
			description: 'When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated, etc.).'
		},
		_created: {
			type: require('./element.input'),
			description: 'When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated, etc.).'
		},
		author: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Identifies who is responsible for creating the manifest, and adding  documents to it.'
		},
		recipient: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A patient, practitioner, or organization for which this set of documents is intended.'
		},
		source: {
			type: UriScalar,
			description: 'Identifies the source system, application, or software that produced the document manifest.'
		},
		_source: {
			type: require('./element.input'),
			description: 'Identifies the source system, application, or software that produced the document manifest.'
		},
		description: {
			type: GraphQLString,
			description: 'Human-readable description of the source document. This is sometimes known as the \'title\'.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Human-readable description of the source document. This is sometimes known as the \'title\'.'
		},
		content: {
			type: new GraphQLList(new GraphQLNonNull(require('./documentmanifestcontent.input'))),
			description: 'The list of Documents included in the manifest.'
		},
		related: {
			type: new GraphQLList(require('./documentmanifestrelated.input')),
			description: 'Related identifiers or resources associated with the DocumentManifest.'
		}
	})
});
