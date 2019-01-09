const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary Contracttermoffer Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Contracttermoffer_Input',
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
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description: 'Unique identifier for this particular Contract Provision.',
		},
		party: {
			type: new GraphQLList(require('./contracttermofferparty.input.js')),
			description: 'Offer Recipient.',
		},
		topic: {
			type: GraphQLString,
			description:
				'The owner of an asset has the residual control rights over the asset: the right to decide all usages of the asset in any way not inconsistent with a prior contract, custom, or law (Hart, 1995, p. 30).',
		},
		type: {
			type: require('./codeableconcept.input.js'),
			description:
				'Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.',
		},
		decision: {
			type: require('./codeableconcept.input.js'),
			description:
				'Type of choice made by accepting party with respect to an offer made by an offeror/ grantee.',
		},
		decisionMode: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'How the decision about a Contract was conveyed.',
		},
		answer: {
			type: new GraphQLList(require('./contracttermofferanswer.input.js')),
			description: 'Response to offer text.',
		},
		_text: {
			type: require('./element.input.js'),
			description: 'Human readable form of this Contract Offer.',
		},
		text: {
			type: GraphQLString,
			description: 'Human readable form of this Contract Offer.',
		},
		_linkId: {
			type: require('./element.input.js'),
			description:
				'The id of the clause or question text of the offer in the referenced questionnaire/response.',
		},
		linkId: {
			type: new GraphQLList(GraphQLString),
			description:
				'The id of the clause or question text of the offer in the referenced questionnaire/response.',
		},
		_securityLabelNumber: {
			type: require('./element.input.js'),
			description: 'Security labels that protects the offer.',
		},
		securityLabelNumber: {
			type: new GraphQLList(UnsignedIntScalar),
			description: 'Security labels that protects the offer.',
		},
	}),
});
