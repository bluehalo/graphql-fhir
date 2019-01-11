const {
	GraphQLString,
	GraphQLList,
	GraphQLBoolean,
	GraphQLInt,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary MolecularSequencestructureVariant Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MolecularSequencestructureVariant_Input',
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
		variantType: {
			type: require('./codeableconcept.input.js'),
			description:
				'Information about chromosome structure variation DNA change type.',
		},
		_exact: {
			type: require('./element.input.js'),
			description:
				'Used to indicate if the outer and inner start-end values have the same meaning.',
		},
		exact: {
			type: GraphQLBoolean,
			description:
				'Used to indicate if the outer and inner start-end values have the same meaning.',
		},
		_length: {
			type: require('./element.input.js'),
			description: 'Length of the variant chromosome.',
		},
		length: {
			type: GraphQLInt,
			description: 'Length of the variant chromosome.',
		},
		outer: {
			type: require('./molecularsequencestructurevariantouter.input.js'),
			description: 'Structural variant outer.',
		},
		inner: {
			type: require('./molecularsequencestructurevariantinner.input.js'),
			description: 'Structural variant inner.',
		},
	}),
});
