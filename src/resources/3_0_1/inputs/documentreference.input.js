const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let DocumentReferenceResourceInputType = new GraphQLEnumType({
	name: 'DocumentReferenceResourceInputType',
	values: {
		DocumentReference: { value: 'DocumentReference' }
	}
});

/**
 * @name exports
 * @summary DocumentReference Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DocumentReference_Input',
	description: 'Base StructureDefinition for DocumentReference Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(DocumentReferenceResourceInputType),
			description: 'Type of this resource.'
		},
		masterIdentifier: {
			type: require('./identifier.input'),
			description: 'Document identifier as assigned by the source of the document. This identifier is specific to this version of the document. This unique identifier may be used elsewhere to identify this version of the document.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Other identifiers associated with the document, including version independent identifiers.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/document-reference-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this document reference.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of this document reference.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/composition-status
		docStatus: {
			type: CodeScalar,
			description: 'The status of the underlying document.'
		},
		_docStatus: {
			type: require('./element.input'),
			description: 'The status of the underlying document.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/c80-doc-typecodes
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Specifies the particular kind of document referenced  (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the document referenced.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/c80-doc-classcodes
		class: {
			type: require('./codeableconcept.input'),
			description: 'A categorization for the type of document referenced - helps for indexing and searching. This may be implied by or derived from the code specified in the DocumentReference.type.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).'
		},
		created: {
			type: DateTimeScalar,
			description: 'When the document was created.'
		},
		_created: {
			type: require('./element.input'),
			description: 'When the document was created.'
		},
		indexed: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'When the document reference was created.'
		},
		_indexed: {
			type: require('./element.input'),
			description: 'When the document reference was created.'
		},
		author: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Identifies who is responsible for adding the information to the document.'
		},
		authenticator: {
			type: require('./reference.input'),
			description: 'Which person or organization authenticates that this document is valid.'
		},
		custodian: {
			type: require('./reference.input'),
			description: 'Identifies the organization or group who is responsible for ongoing maintenance of and access to the document.'
		},
		relatesTo: {
			type: new GraphQLList(require('./documentreferencerelatesto.input')),
			description: 'Relationships that this document has with other document references that already exist.'
		},
		description: {
			type: GraphQLString,
			description: 'Human-readable description of the source document. This is sometimes known as the \'title\'.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Human-readable description of the source document. This is sometimes known as the \'title\'.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		securityLabel: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A set of Security-Tag codes specifying the level of privacy/security of the Document. Note that DocumentReference.meta.security contains the security labels of the \'reference\' to the document, while DocumentReference.securityLabel contains a snapshot of the security labels on the document the reference refers to.'
		},
		content: {
			type: new GraphQLList(new GraphQLNonNull(require('./documentreferencecontent.input'))),
			description: 'The document and format referenced. There may be multiple content element repetitions, each with a different format.'
		},
		context: {
			type: require('./documentreferencecontext.input'),
			description: 'The clinical context in which the document was prepared.'
		}
	})
});
