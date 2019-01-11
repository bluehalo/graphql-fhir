const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');
const Base64BinaryScalar = require('../scalars/base64binary.scalar.js');

/**
 * @name exports
 * @summary MedicationKnowledgedrugCharacteristic Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationKnowledgedrugCharacteristic',
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
				'A code specifying which characteristic of the medicine is being described (for example, colour, shape, imprint).',
		},
		valueCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description: 'Description of the characteristic.',
		},
		_valueString: {
			type: require('./element.schema.js'),
			description: 'Description of the characteristic.',
		},
		valueString: {
			type: GraphQLString,
			description: 'Description of the characteristic.',
		},
		valueQuantity: {
			type: require('./quantity.schema.js'),
			description: 'Description of the characteristic.',
		},
		_valueBase64Binary: {
			type: require('./element.schema.js'),
			description: 'Description of the characteristic.',
		},
		valueBase64Binary: {
			type: Base64BinaryScalar,
			description: 'Description of the characteristic.',
		},
	}),
});
