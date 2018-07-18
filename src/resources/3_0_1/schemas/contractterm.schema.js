const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ContractTerm Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ContractTerm',
	description: 'One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		identifier: {
			type: require('./identifier.schema'),
			description: 'Unique identifier for this particular Contract Provision.'
		},
		issued: {
			type: DateTimeScalar,
			description: 'When this Contract Provision was issued.'
		},
		_issued: {
			type: require('./element.schema'),
			description: 'When this Contract Provision was issued.'
		},
		applies: {
			type: require('./period.schema'),
			description: 'Relevant time or time-period when this Contract Provision is applicable.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/contract-term-type
		type: {
			type: require('./codeableconcept.schema'),
			description: 'Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/contract-term-subtype
		subType: {
			type: require('./codeableconcept.schema'),
			description: 'Subtype of this Contract Provision, e.g. life time maximum payment for a contract term for specific valued item, e.g. disability payment.'
		},
		topic: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The matter of concern in the context of this provision of the agrement.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/contract-action
		action: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Action stipulated by this Contract Provision.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		actionReason: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Reason or purpose for the action stipulated by this Contract Provision.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		securityLabel: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'A set of security labels that define which terms are controlled by this condition.'
		},
		agent: {
			type: new GraphQLList(require('./contracttermagent.schema')),
			description: 'An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place.'
		},
		text: {
			type: GraphQLString,
			description: 'Human readable form of this Contract Provision.'
		},
		_text: {
			type: require('./element.schema'),
			description: 'Human readable form of this Contract Provision.'
		},
		valuedItem: {
			type: new GraphQLList(require('./contracttermvalueditem.schema')),
			description: 'Contract Provision Valued Item List.'
		}
	})
});
