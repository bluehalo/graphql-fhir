const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary SupplyRequestorderedItem Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SupplyRequestorderedItem_Input',
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
		quantity: {
			type: new GraphQLNonNull(require('./quantity.input.js')),
			description: 'The amount that is being ordered of the indicated item.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/supply-item
		itemCodeableConcept: {
			type: require('./codeableconcept.input.js'),
			description:
				'The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/supply-item
		itemReference: {
			type: GraphQLString,
			description:
				'The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.',
		},
	}),
});
