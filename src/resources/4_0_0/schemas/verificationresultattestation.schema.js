const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary VerificationResultattestation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'VerificationResultattestation',
	description: '',
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
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		who: {
			type: new GraphQLUnionType({
				name: 'VerificationResultattestationwho_who_Union',
				description: 'The individual or organization attesting to information.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./organization.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'The individual or organization attesting to information.',
		},
		onBehalfOf: {
			type: new GraphQLUnionType({
				name: 'VerificationResultattestationonBehalfOf_onBehalfOf_Union',
				description:
					'When the who is asserting on behalf of another (organization or individual).',
				types: () => [
					require('./organization.schema.js'),
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
				},
			}),
			description:
				'When the who is asserting on behalf of another (organization or individual).',
		},
		communicationMethod: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The method by which attested information was submitted/retrieved (manual; API; Push).',
		},
		_date: {
			type: require('./element.schema.js'),
			description: 'The date the information was attested to.',
		},
		date: {
			type: DateScalar,
			description: 'The date the information was attested to.',
		},
		_sourceIdentityCertificate: {
			type: require('./element.schema.js'),
			description:
				'A digital identity certificate associated with the attestation source.',
		},
		sourceIdentityCertificate: {
			type: GraphQLString,
			description:
				'A digital identity certificate associated with the attestation source.',
		},
		_proxyIdentityCertificate: {
			type: require('./element.schema.js'),
			description:
				'A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.',
		},
		proxyIdentityCertificate: {
			type: GraphQLString,
			description:
				'A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.',
		},
		proxySignature: {
			type: require('./signature.schema.js'),
			description:
				'Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.',
		},
		sourceSignature: {
			type: require('./signature.schema.js'),
			description:
				'Signed assertion by the attestation source that they have attested to the information.',
		},
	}),
});
