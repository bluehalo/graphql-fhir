const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary VerificationResultattestation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'VerificationResultattestation_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		who: {
			type: GraphQLString,
			description: 'The individual or organization attesting to information.',
		},
		onBehalfOf: {
			type: GraphQLString,
			description:
				'When the who is asserting on behalf of another (organization or individual).',
		},
		communicationMethod: {
			type: require('./codeableconcept.input.js'),
			description:
				'The method by which attested information was submitted/retrieved (manual; API; Push).',
		},
		_date: {
			type: require('./element.input.js'),
			description: 'The date the information was attested to.',
		},
		date: {
			type: DateScalar,
			description: 'The date the information was attested to.',
		},
		_sourceIdentityCertificate: {
			type: require('./element.input.js'),
			description:
				'A digital identity certificate associated with the attestation source.',
		},
		sourceIdentityCertificate: {
			type: GraphQLString,
			description:
				'A digital identity certificate associated with the attestation source.',
		},
		_proxyIdentityCertificate: {
			type: require('./element.input.js'),
			description:
				'A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.',
		},
		proxyIdentityCertificate: {
			type: GraphQLString,
			description:
				'A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.',
		},
		proxySignature: {
			type: require('./signature.input.js'),
			description:
				'Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.',
		},
		sourceSignature: {
			type: require('./signature.input.js'),
			description:
				'Signed assertion by the attestation source that they have attested to the information.',
		},
	}),
});
