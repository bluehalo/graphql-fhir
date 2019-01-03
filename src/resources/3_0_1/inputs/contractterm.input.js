const DateTimeScalar = require('../scalars/datetime.scalar');
const {
	GraphQLInputObjectType,
	GraphQLList,
	GraphQLString,
} = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Contract.term Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ContractTerm_Input',
	description:
		'One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.',
	fields: () =>
		extendSchema(require('./backboneelement.input'), {
			identifier: {
				type: require('./identifier.input'),
				description:
					'Unique identifier for this particular Contract Provision.',
			},
			issued: {
				type: DateTimeScalar,
				description: 'When this Contract Provision was issued.',
			},
			_issued: {
				type: require('./element.input'),
				description: 'When this Contract Provision was issued.',
			},
			applies: {
				type: require('./period.input'),
				description:
					'Relevant time or time-period when this Contract Provision is applicable.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/contract-term-type
			type: {
				type: require('./codeableconcept.input'),
				description:
					'Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/contract-term-subtype
			subType: {
				type: require('./codeableconcept.input'),
				description:
					'Subtype of this Contract Provision, e.g. life time maximum payment for a contract term for specific valued item, e.g. disability payment.',
			},
			topic: {
				type: new GraphQLList(require('./reference.input')),
				description:
					'The matter of concern in the context of this provision of the agrement.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/contract-action
			action: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description: 'Action stipulated by this Contract Provision.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
			actionReason: {
				type: new GraphQLList(require('./codeableconcept.input')),
				description:
					'Reason or purpose for the action stipulated by this Contract Provision.',
			},
			// ValueSetReference: http://hl7.org/fhir/ValueSet/security-labels
			securityLabel: {
				type: new GraphQLList(require('./coding.input')),
				description:
					'A set of security labels that define which terms are controlled by this condition.',
			},
			agent: {
				type: new GraphQLList(require('./contracttermagent.input')),
				description:
					'An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place.',
			},
			text: {
				type: GraphQLString,
				description: 'Human readable form of this Contract Provision.',
			},
			_text: {
				type: require('./element.input'),
				description: 'Human readable form of this Contract Provision.',
			},
			valuedItem: {
				type: new GraphQLList(require('./contracttermvalueditem.input')),
				description: 'Contract Provision Valued Item List.',
			},
		}),
});
