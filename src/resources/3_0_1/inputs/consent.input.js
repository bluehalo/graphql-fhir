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
 * @summary Consent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Consent_Input',
	description: 'Base StructureDefinition for Consent Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Consent_Enum_input',
					values: { Consent: { value: 'Consent' } },
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/languages
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
		identifier: {
			type: require('./identifier.input.js'),
			description: 'Unique identifier for this copy of the Consent Statement.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'Indicates the current state of this consent.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/consent-state-codes
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the current state of this consent.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/consent-category
		category: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.',
		},
		patient: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The patient/healthcare consumer to whom this consent applies.',
		},
		period: {
			type: require('./period.input.js'),
			description:
				'Relevant time or time-period when this Consent is applicable.',
		},
		_dateTime: {
			type: require('./element.input.js'),
			description: 'When this  Consent was issued / created / indexed.',
		},
		dateTime: {
			type: DateTimeScalar,
			description: 'When this  Consent was issued / created / indexed.',
		},
		consentingParty: {
			type: new GraphQLList(GraphQLString),
			description:
				'Either the Grantor, which is the entity responsible for granting the rights listed in a Consent Directive or the Grantee, which is the entity responsible for complying with the Consent Directive, including any obligations or limitations on authorizations and enforcement of prohibitions.',
		},
		actor: {
			type: new GraphQLList(require('./consentactor.input.js')),
			description:
				"Who or what is controlled by this consent. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/consent-action
		action: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Actions controlled by this consent.',
		},
		organization: {
			type: new GraphQLList(GraphQLString),
			description:
				'The organization that manages the consent, and the framework within which it is executed.',
		},
		sourceAttachment: {
			type: require('./attachment.input.js'),
			description:
				'The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.',
		},
		sourceIdentifier: {
			type: require('./identifier.input.js'),
			description:
				'The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.',
		},
		sourceReference: {
			type: GraphQLString,
			description:
				'The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.',
		},
		policy: {
			type: new GraphQLList(require('./consentpolicy.input.js')),
			description:
				'The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.',
		},
		_policyRule: {
			type: require('./element.input.js'),
			description: 'A referece to the specific computable policy.',
		},
		policyRule: {
			type: UriScalar,
			description: 'A referece to the specific computable policy.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		securityLabel: {
			type: new GraphQLList(require('./coding.input.js')),
			description:
				'A set of security labels that define which resources are controlled by this consent. If more than one label is specified, all resources must have all the specified labels.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		purpose: {
			type: new GraphQLList(require('./coding.input.js')),
			description:
				'The context of the activities a user is taking - why the user is accessing the data - that are controlled by this consent.',
		},
		dataPeriod: {
			type: require('./period.input.js'),
			description:
				'Clinical or Operational Relevant period of time that bounds the data controlled by this consent.',
		},
		data: {
			type: new GraphQLList(require('./consentdata.input.js')),
			description:
				'The resources controlled by this consent, if specific resources are referenced.',
		},
		except: {
			type: new GraphQLList(require('./consentexcept.input.js')),
			description:
				'An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.',
		},
	}),
});
