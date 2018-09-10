const DateTimeScalar = require('../scalars/datetime.scalar');
const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let DocumentManifestResourceType = new GraphQLEnumType({
	name: 'DocumentManifestResourceType',
	values: {
		DocumentManifest: { value: 'DocumentManifest' }
	}
});

/**
 * @name exports
 * @summary DocumentManifest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DocumentManifest',
	description: 'Base StructureDefinition for DocumentManifest Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(DocumentManifestResourceType),
			description: 'Type of this resource.'
		},
		masterIdentifier: {
			type: require('./identifier.schema'),
			description: 'A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Other identifiers associated with the document manifest, including version independent  identifiers.'
		},
		subject: {
			type: require('./reference.schema'),
			description: 'Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).'
		},
		recipient: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A patient, practitioner, or organization for which this set of documents is intended.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/c80-doc-typecodes
		type: {
			type: require('./codeableconcept.schema'),
			description: 'Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.'
		},
		author: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Identifies who is responsible for creating the manifest, and adding  documents to it.'
		},
		created: {
			type: DateTimeScalar,
			description: 'When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated, etc.).'
		},
		_created: {
			type: require('./element.schema'),
			description: 'When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated, etc.).'
		},
		source: {
			type: UriScalar,
			description: 'Identifies the source system, application, or software that produced the document manifest.'
		},
		_source: {
			type: require('./element.schema'),
			description: 'Identifies the source system, application, or software that produced the document manifest.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/document-reference-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this document manifest.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of this document manifest.'
		},
		description: {
			type: GraphQLString,
			description: 'Human-readable description of the source document. This is sometimes known as the \'title\'.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Human-readable description of the source document. This is sometimes known as the \'title\'.'
		},
		content: {
			type: new GraphQLList(new GraphQLNonNull(require('./documentmanifestcontent.schema'))),
			description: 'The list of Documents included in the manifest.'
		},
		related: {
			type: new GraphQLList(require('./documentmanifestrelated.schema')),
			description: 'Related identifiers or resources associated with the DocumentManifest.'
		}
	})
});
