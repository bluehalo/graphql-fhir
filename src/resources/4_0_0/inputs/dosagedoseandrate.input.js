const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary DosagedoseAndRate Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DosagedoseAndRate_Input',
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
		type: {
			type: require('./codeableconcept.input.js'),
			description:
				'The kind of dose or rate specified, for example, ordered or calculated.',
		},
		doseRange: {
			type: require('./range.input.js'),
			description: 'Amount of medication per dose.',
		},
		doseQuantity: {
			type: require('./quantity.input.js'),
			description: 'Amount of medication per dose.',
		},
		rateRatio: {
			type: require('./ratio.input.js'),
			description: 'Amount of medication per unit of time.',
		},
		rateRange: {
			type: require('./range.input.js'),
			description: 'Amount of medication per unit of time.',
		},
		rateQuantity: {
			type: require('./quantity.input.js'),
			description: 'Amount of medication per unit of time.',
		},
	}),
});
