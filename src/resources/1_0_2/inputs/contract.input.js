const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Contract Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Contract_Input',
	description: 'Base StructureDefinition for Contract Resource.',
	fields: () => extendSchema({
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'Unique identifier for this Contract.'
		},
		issued: {
			type: DateTimeScalar,
			description: 'When this  Contract was issued.'
		},
		_issued: {
			type: require('./element.input'),
			description: 'When this  Contract was issued.'
		},
		applies: {
			type: require('./period.input'),
			description: 'Relevant time or time-period when this Contract is applicable.'
		},
		subject: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Who and/or what this Contract is about: typically a Patient, Organization, or valued items such as goods and services.'
		},
		authority: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies.'
		},
		domain: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/contract-type
		type: {
			type: require('./codeableconcept.input'),
			description: 'Type of Contract such as an insurance policy, real estate contract, a will, power of attorny, Privacy or Security policy , trust framework agreement, etc.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/contract-subtype
		subType: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'More specific type or specialization of an overarching or more general contract such as auto insurance, home owner  insurance, prenupial agreement, Advanced-Directive, or privacy consent.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/contract-action
		action: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Action stipulated by this Contract.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		actionReason: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Reason for action stipulated by this Contract.'
		},
		actor: {
			type: new GraphQLList(require('./contractactor.input')),
			description: 'List of Contract actors.'
		},
		valuedItem: {
			type: new GraphQLList(require('./contractvalueditem.input')),
			description: 'Contract Valued Item List.'
		},
		signer: {
			type: new GraphQLList(require('./contractsigner.input')),
			description: 'Party signing this Contract.'
		},
		term: {
			type: new GraphQLList(require('./contractterm.input')),
			description: 'One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.'
		},
		bindingAttachment: {
			type: require('./attachment.input'),
			description: 'Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the \'source of truth\' and which would be the basis for legal action related to enforcement of this Contract.'
		},
		bindingReference: {
			type: require('./reference.input'),
			description: 'Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the \'source of truth\' and which would be the basis for legal action related to enforcement of this Contract.'
		},
		friendly: {
			type: new GraphQLList(require('./contractfriendly.input')),
			description: 'The \'patient friendly language\' versionof the Contract in whole or in parts. \'Patient friendly language\' means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.'
		},
		legal: {
			type: new GraphQLList(require('./contractlegal.input')),
			description: 'List of Legal expressions or representations of this Contract.'
		},
		rule: {
			type: new GraphQLList(require('./contractrule.input')),
			description: 'List of Computable Policy Rule Language Representations of this Contract.'
		}
	})
});
