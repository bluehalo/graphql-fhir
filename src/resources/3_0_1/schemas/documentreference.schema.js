const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary DocumentReference Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DocumentReference',
	description: 'Base StructureDefinition for DocumentReference Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		masterIdentifier: {
			type: require('./identifier.schema'),
			description: 'Document identifier as assigned by the source of the document. This identifier is specific to this version of the document. This unique identifier may be used elsewhere to identify this version of the document.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Other identifiers associated with the document, including version independent identifiers.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/document-reference-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this document reference.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of this document reference.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/composition-status
		docStatus: {
			type: CodeScalar,
			description: 'The status of the underlying document.'
		},
		_docStatus: {
			type: require('./element.schema'),
			description: 'The status of the underlying document.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/c80-doc-typecodes
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Specifies the particular kind of document referenced  (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the document referenced.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/c80-doc-classcodes
		class: {
			type: require('./codeableconcept.schema'),
			description: 'A categorization for the type of document referenced - helps for indexing and searching. This may be implied by or derived from the code specified in the DocumentReference.type.'
		},
		subject: {
			type: require('./reference.schema'),
			description: 'Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).'
		},
		created: {
			type: DateTimeScalar,
			description: 'When the document was created.'
		},
		_created: {
			type: require('./element.schema'),
			description: 'When the document was created.'
		},
		indexed: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'When the document reference was created.'
		},
		_indexed: {
			type: require('./element.schema'),
			description: 'When the document reference was created.'
		},
		author: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Identifies who is responsible for adding the information to the document.'
		},
		authenticator: {
			type: require('./reference.schema'),
			description: 'Which person or organization authenticates that this document is valid.'
		},
		custodian: {
			type: require('./reference.schema'),
			description: 'Identifies the organization or group who is responsible for ongoing maintenance of and access to the document.'
		},
		relatesTo: {
			type: new GraphQLList(require('./documentreferencerelatesto.schema')),
			description: 'Relationships that this document has with other document references that already exist.'
		},
		description: {
			type: GraphQLString,
			description: 'Human-readable description of the source document. This is sometimes known as the \'title\'.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Human-readable description of the source document. This is sometimes known as the \'title\'.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		securityLabel: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A set of Security-Tag codes specifying the level of privacy/security of the Document. Note that DocumentReference.meta.security contains the security labels of the \'reference\' to the document, while DocumentReference.securityLabel contains a snapshot of the security labels on the document the reference refers to.'
		},
		content: {
			type: new GraphQLList(new GraphQLNonNull(require('./documentreferencecontent.schema'))),
			description: 'The document and format referenced. There may be multiple content element repetitions, each with a different format.'
		},
		context: {
			type: require('./documentreferencecontext.schema'),
			description: 'The clinical context in which the document was prepared.'
		}
	})
});
