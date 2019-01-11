const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary SubstanceSpecificationrelationship Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SubstanceSpecificationrelationship_Input',
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
		substanceReference: {
			type: GraphQLString,
			description:
				'A pointer to another substance, as a resource or just a representational code.',
		},
		substanceCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description:
				'A pointer to another substance, as a resource or just a representational code.',
		},
		relationship: {
			type: require('./codeableconcept.input.js'),
			description:
				"For example 'salt to parent', 'active moiety', 'starting material'.",
		},
		_isDefining: {
			type: require('./element.input.js'),
			description:
				'For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.',
		},
		isDefining: {
			type: GraphQLBoolean,
			description:
				'For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships.',
		},
		amountQuantity: {
			type: require('./quantity.input.js'),
			description:
				'A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.',
		},
		amountRange: {
			type: require('./range.input.js'),
			description:
				'A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.',
		},
		amountRatio: {
			type: require('./ratio.input.js'),
			description:
				'A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.',
		},
		_amountString: {
			type: require('./element.input.js'),
			description:
				'A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.',
		},
		amountString: {
			type: GraphQLString,
			description:
				'A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other.',
		},
		amountRatioLowLimit: {
			type: require('./ratio.input.js'),
			description: 'For use when the numeric.',
		},
		amountType: {
			type: require('./codeableconcept.input.js'),
			description:
				"An operator for the amount, for example 'average', 'approximately', 'less than'.",
		},
		source: {
			type: new GraphQLList(GraphQLString),
			description: 'Supporting literature.',
		},
	}),
});
