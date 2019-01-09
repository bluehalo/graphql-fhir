const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const InstantScalar = require('../scalars/instant.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const Base64BinaryScalar = require('../scalars/base64Binary.scalar.js');

/**
 * @name exports
 * @summary Signature Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Signature',
	description:
		'Base StructureDefinition for Signature Type: A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		type: {
			type: new GraphQLList(new GraphQLNonNull(require('./coding.schema.js'))),
			description:
				'An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.',
		},
		_when: {
			type: require('./element.schema.js'),
			description: 'When the digital signature was signed.',
		},
		when: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'When the digital signature was signed.',
		},
		who: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'Signaturewho_who_Union',
					description:
						'A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).',
					types: () => [
						require('./practitioner.schema.js'),
						require('./practitionerrole.schema.js'),
						require('./relatedperson.schema.js'),
						require('./patient.schema.js'),
						require('./device.schema.js'),
						require('./organization.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Practitioner') {
							return require('./practitioner.schema.js');
						}
						if (data && data.resourceType === 'PractitionerRole') {
							return require('./practitionerrole.schema.js');
						}
						if (data && data.resourceType === 'RelatedPerson') {
							return require('./relatedperson.schema.js');
						}
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
						if (data && data.resourceType === 'Device') {
							return require('./device.schema.js');
						}
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
					},
				}),
			),
			description:
				'A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).',
		},
		onBehalfOf: {
			type: new GraphQLUnionType({
				name: 'SignatureonBehalfOf_onBehalfOf_Union',
				description:
					'A reference to an application-usable description of the identity that is represented by the signature.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./relatedperson.schema.js'),
					require('./patient.schema.js'),
					require('./device.schema.js'),
					require('./organization.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Device') {
						return require('./device.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				'A reference to an application-usable description of the identity that is represented by the signature.',
		},
		_targetFormat: {
			type: require('./element.schema.js'),
			description:
				'A mime type that indicates the technical format of the target resources signed by the signature.',
		},
		targetFormat: {
			type: CodeScalar,
			description:
				'A mime type that indicates the technical format of the target resources signed by the signature.',
		},
		_sigFormat: {
			type: require('./element.schema.js'),
			description:
				'A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.',
		},
		sigFormat: {
			type: CodeScalar,
			description:
				'A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.',
		},
		_data: {
			type: require('./element.schema.js'),
			description:
				'The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.',
		},
		data: {
			type: Base64BinaryScalar,
			description:
				'The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.',
		},
	}),
});
