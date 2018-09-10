const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let ContractResourceType = new GraphQLEnumType({
	name: 'ContractResourceType',
	values: {
		Contract: { value: 'Contract' }
	}
});

/**
 * @name exports
 * @summary Contract Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Contract',
	description: 'Base StructureDefinition for Contract Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ContractResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: require('./identifier.schema'),
			description: 'Unique identifier for this Contract.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/contract-status
		status: {
			type: CodeScalar,
			description: 'The status of the resource instance.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the resource instance.'
		},
		issued: {
			type: DateTimeScalar,
			description: 'When this  Contract was issued.'
		},
		_issued: {
			type: require('./element.schema'),
			description: 'When this  Contract was issued.'
		},
		applies: {
			type: require('./period.schema'),
			description: 'Relevant time or time-period when this Contract is applicable.'
		},
		subject: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The target entity impacted by or of interest to parties to the agreement.'
		},
		topic: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The matter of concern in the context of this agreement.'
		},
		authority: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.'
		},
		domain: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/contract-type
		type: {
			type: require('./codeableconcept.schema'),
			description: 'Type of Contract such as an insurance policy, real estate contract, a will, power of attorny, Privacy or Security policy , trust framework agreement, etc.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/contract-subtype
		subType: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'More specific type or specialization of an overarching or more general contract such as auto insurance, home owner  insurance, prenupial agreement, Advanced-Directive, or privacy consent.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/contract-action
		action: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Action stipulated by this Contract.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		actionReason: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Reason for action stipulated by this Contract.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActConsentDirective
		decisionType: {
			type: require('./codeableconcept.schema'),
			description: 'The type of decision made by a grantor with respect to an offer made by a grantee.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/contract-content-derivative
		contentDerivative: {
			type: require('./codeableconcept.schema'),
			description: 'The minimal content derived from the basal information source at a specific stage in its lifecycle.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		securityLabel: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'A set of security labels that define which resources are controlled by this consent. If more than one label is specified, all resources must have all the specified labels.'
		},
		agent: {
			type: new GraphQLList(require('./contractagent.schema')),
			description: 'An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place.'
		},
		signer: {
			type: new GraphQLList(require('./contractsigner.schema')),
			description: 'Parties with legal standing in the Contract, including the principal parties, the grantor(s) and grantee(s), which are any person or organization bound by the contract, and any ancillary parties, which facilitate the execution of the contract such as a notary or witness.'
		},
		valuedItem: {
			type: new GraphQLList(require('./contractvalueditem.schema')),
			description: 'Contract Valued Item List.'
		},
		term: {
			type: new GraphQLList(require('./contractterm.schema')),
			description: 'One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.'
		},
		bindingAttachment: {
			type: require('./attachment.schema'),
			description: 'Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the \'source of truth\' and which would be the basis for legal action related to enforcement of this Contract.'
		},
		bindingReference: {
			type: require('./reference.schema'),
			description: 'Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the \'source of truth\' and which would be the basis for legal action related to enforcement of this Contract.'
		},
		friendly: {
			type: new GraphQLList(require('./contractfriendly.schema')),
			description: 'The \'patient friendly language\' versionof the Contract in whole or in parts. \'Patient friendly language\' means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.'
		},
		legal: {
			type: new GraphQLList(require('./contractlegal.schema')),
			description: 'List of Legal expressions or representations of this Contract.'
		},
		rule: {
			type: new GraphQLList(require('./contractrule.schema')),
			description: 'List of Computable Policy Rule Language Representations of this Contract.'
		}
	})
});
