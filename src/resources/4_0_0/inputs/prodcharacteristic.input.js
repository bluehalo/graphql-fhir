const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary ProdCharacteristic Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ProdCharacteristic_Input',
	description:
		'Base StructureDefinition for ProdCharacteristic Type: The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.',
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
		height: {
			type: require('./quantity.input.js'),
			description:
				'Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.',
		},
		width: {
			type: require('./quantity.input.js'),
			description:
				'Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.',
		},
		depth: {
			type: require('./quantity.input.js'),
			description:
				'Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.',
		},
		weight: {
			type: require('./quantity.input.js'),
			description:
				'Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.',
		},
		nominalVolume: {
			type: require('./quantity.input.js'),
			description:
				'Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.',
		},
		externalDiameter: {
			type: require('./quantity.input.js'),
			description:
				'Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.',
		},
		_shape: {
			type: require('./element.input.js'),
			description:
				'Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.',
		},
		shape: {
			type: GraphQLString,
			description:
				'Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.',
		},
		_color: {
			type: require('./element.input.js'),
			description:
				'Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.',
		},
		color: {
			type: new GraphQLList(GraphQLString),
			description:
				'Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.',
		},
		_imprint: {
			type: require('./element.input.js'),
			description: 'Where applicable, the imprint can be specified as text.',
		},
		imprint: {
			type: new GraphQLList(GraphQLString),
			description: 'Where applicable, the imprint can be specified as text.',
		},
		image: {
			type: new GraphQLList(require('./attachment.input.js')),
			description:
				'Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations.',
		},
		scoring: {
			type: require('./codeableconcept.input.js'),
			description:
				'Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.',
		},
	}),
});
