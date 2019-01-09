const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary NutritionOrdersupplement Schema
 */
module.exports = new GraphQLObjectType({
	name: 'NutritionOrdersupplement',
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
		type: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.',
		},
		_productName: {
			type: require('./element.schema.js'),
			description:
				"The product or brand name of the nutritional supplement such as 'Acme Protein Shake'.",
		},
		productName: {
			type: GraphQLString,
			description:
				"The product or brand name of the nutritional supplement such as 'Acme Protein Shake'.",
		},
		schedule: {
			type: new GraphQLList(require('./timing.schema.js')),
			description:
				'The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.',
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description: 'The amount of the nutritional supplement to be given.',
		},
		_instruction: {
			type: require('./element.schema.js'),
			description:
				'Free text or additional instructions or information pertaining to the oral supplement.',
		},
		instruction: {
			type: GraphQLString,
			description:
				'Free text or additional instructions or information pertaining to the oral supplement.',
		},
	}),
});
