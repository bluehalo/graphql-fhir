const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Contractterm Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Contractterm_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: require('./identifier.input.js'),
			description: 'Unique identifier for this particular Contract Provision.',
		},
		_issued: {
			type: require('./element.input.js'),
			description: 'When this Contract Provision was issued.',
		},
		issued: {
			type: DateTimeScalar,
			description: 'When this Contract Provision was issued.',
		},
		applies: {
			type: require('./period.input.js'),
			description:
				'Relevant time or time-period when this Contract Provision is applicable.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/contract-term-type
		type: {
			type: require('./codeableconcept.input.js'),
			description:
				'Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/contract-term-subtype
		subType: {
			type: require('./codeableconcept.input.js'),
			description:
				'Subtype of this Contract Provision, e.g. life time maximum payment for a contract term for specific valued item, e.g. disability payment.',
		},
		topic: {
			type: new GraphQLList(GraphQLString),
			description:
				'The matter of concern in the context of this provision of the agrement.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/contract-action
		action: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Action stipulated by this Contract Provision.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		actionReason: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Reason or purpose for the action stipulated by this Contract Provision.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		securityLabel: {
			type: new GraphQLList(require('./coding.input.js')),
			description:
				'A set of security labels that define which terms are controlled by this condition.',
		},
		agent: {
			type: new GraphQLList(require('./contracttermagent.input.js')),
			description:
				'An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place.',
		},
		_text: {
			type: require('./element.input.js'),
			description: 'Human readable form of this Contract Provision.',
		},
		text: {
			type: GraphQLString,
			description: 'Human readable form of this Contract Provision.',
		},
		valuedItem: {
			type: new GraphQLList(require('./contracttermvalueditem.input.js')),
			description: 'Contract Provision Valued Item List.',
		},
	}),
});
