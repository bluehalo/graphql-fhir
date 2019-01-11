const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary Contracttermoffer Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Contracttermoffer',
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
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description: 'Unique identifier for this particular Contract Provision.',
		},
		party: {
			type: new GraphQLList(require('./contracttermofferparty.schema.js')),
			description: 'Offer Recipient.',
		},
		topic: {
			type: new GraphQLUnionType({
				name: 'Contracttermoffertopic_topic_Union',
				description:
					'The owner of an asset has the residual control rights over the asset: the right to decide all usages of the asset in any way not inconsistent with a prior contract, custom, or law (Hart, 1995, p. 30).',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description:
				'The owner of an asset has the residual control rights over the asset: the right to decide all usages of the asset in any way not inconsistent with a prior contract, custom, or law (Hart, 1995, p. 30).',
		},
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.',
		},
		decision: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Type of choice made by accepting party with respect to an offer made by an offeror/ grantee.',
		},
		decisionMode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'How the decision about a Contract was conveyed.',
		},
		answer: {
			type: new GraphQLList(require('./contracttermofferanswer.schema.js')),
			description: 'Response to offer text.',
		},
		_text: {
			type: require('./element.schema.js'),
			description: 'Human readable form of this Contract Offer.',
		},
		text: {
			type: GraphQLString,
			description: 'Human readable form of this Contract Offer.',
		},
		_linkId: {
			type: require('./element.schema.js'),
			description:
				'The id of the clause or question text of the offer in the referenced questionnaire/response.',
		},
		linkId: {
			type: new GraphQLList(GraphQLString),
			description:
				'The id of the clause or question text of the offer in the referenced questionnaire/response.',
		},
		_securityLabelNumber: {
			type: require('./element.schema.js'),
			description: 'Security labels that protects the offer.',
		},
		securityLabelNumber: {
			type: new GraphQLList(UnsignedIntScalar),
			description: 'Security labels that protects the offer.',
		},
	}),
});
