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
 * @summary Contract Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Contract_Input',
	description: 'Base StructureDefinition for Contract Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Contract_Enum_input',
					values: { Contract: { value: 'Contract' } },
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
			description: 'Unique identifier for this Contract.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'The status of the resource instance.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/contract-status
		status: {
			type: CodeScalar,
			description: 'The status of the resource instance.',
		},
		_issued: {
			type: require('./element.input.js'),
			description: 'When this  Contract was issued.',
		},
		issued: {
			type: DateTimeScalar,
			description: 'When this  Contract was issued.',
		},
		applies: {
			type: require('./period.input.js'),
			description:
				'Relevant time or time-period when this Contract is applicable.',
		},
		subject: {
			type: new GraphQLList(GraphQLString),
			description:
				'The target entity impacted by or of interest to parties to the agreement.',
		},
		topic: {
			type: new GraphQLList(GraphQLString),
			description: 'The matter of concern in the context of this agreement.',
		},
		authority: {
			type: new GraphQLList(GraphQLString),
			description:
				'A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.',
		},
		domain: {
			type: new GraphQLList(GraphQLString),
			description:
				'Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/contract-type
		type: {
			type: require('./codeableconcept.input.js'),
			description:
				'Type of Contract such as an insurance policy, real estate contract, a will, power of attorny, Privacy or Security policy , trust framework agreement, etc.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/contract-subtype
		subType: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'More specific type or specialization of an overarching or more general contract such as auto insurance, home owner  insurance, prenupial agreement, Advanced-Directive, or privacy consent.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/contract-action
		action: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Action stipulated by this Contract.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		actionReason: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Reason for action stipulated by this Contract.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ActConsentDirective
		decisionType: {
			type: require('./codeableconcept.input.js'),
			description:
				'The type of decision made by a grantor with respect to an offer made by a grantee.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/contract-content-derivative
		contentDerivative: {
			type: require('./codeableconcept.input.js'),
			description:
				'The minimal content derived from the basal information source at a specific stage in its lifecycle.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		securityLabel: {
			type: new GraphQLList(require('./coding.input.js')),
			description:
				'A set of security labels that define which resources are controlled by this consent. If more than one label is specified, all resources must have all the specified labels.',
		},
		agent: {
			type: new GraphQLList(require('./contractagent.input.js')),
			description:
				'An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place.',
		},
		signer: {
			type: new GraphQLList(require('./contractsigner.input.js')),
			description:
				'Parties with legal standing in the Contract, including the principal parties, the grantor(s) and grantee(s), which are any person or organization bound by the contract, and any ancillary parties, which facilitate the execution of the contract such as a notary or witness.',
		},
		valuedItem: {
			type: new GraphQLList(require('./contractvalueditem.input.js')),
			description: 'Contract Valued Item List.',
		},
		term: {
			type: new GraphQLList(require('./contractterm.input.js')),
			description:
				'One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.',
		},
		bindingAttachment: {
			type: require('./attachment.input.js'),
			description:
				"Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the 'source of truth' and which would be the basis for legal action related to enforcement of this Contract.",
		},
		bindingReference: {
			type: GraphQLString,
			description:
				"Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the 'source of truth' and which would be the basis for legal action related to enforcement of this Contract.",
		},
		friendly: {
			type: new GraphQLList(require('./contractfriendly.input.js')),
			description:
				"The 'patient friendly language' versionof the Contract in whole or in parts. 'Patient friendly language' means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.",
		},
		legal: {
			type: new GraphQLList(require('./contractlegal.input.js')),
			description:
				'List of Legal expressions or representations of this Contract.',
		},
		rule: {
			type: new GraphQLList(require('./contractrule.input.js')),
			description:
				'List of Computable Policy Rule Language Representations of this Contract.',
		},
	}),
});
