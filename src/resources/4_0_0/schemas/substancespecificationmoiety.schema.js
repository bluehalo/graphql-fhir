const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary SubstanceSpecificationmoiety Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SubstanceSpecificationmoiety',
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
		role: {
			type: require('./codeableconcept.schema.js'),
			description: 'Role that the moiety is playing.',
		},
		identifier: {
			type: require('./identifier.schema.js'),
			description: 'Identifier by which this moiety substance is known.',
		},
		_name: {
			type: require('./element.schema.js'),
			description: 'Textual name for this moiety substance.',
		},
		name: {
			type: GraphQLString,
			description: 'Textual name for this moiety substance.',
		},
		stereochemistry: {
			type: require('./codeableconcept.schema.js'),
			description: 'Stereochemistry type.',
		},
		opticalActivity: {
			type: require('./codeableconcept.schema.js'),
			description: 'Optical activity type.',
		},
		_molecularFormula: {
			type: require('./element.schema.js'),
			description: 'Molecular formula.',
		},
		molecularFormula: {
			type: GraphQLString,
			description: 'Molecular formula.',
		},
		amountQuantity: {
			type: require('./quantity.schema.js'),
			description: 'Quantitative value for this moiety.',
		},
		_amountString: {
			type: require('./element.schema.js'),
			description: 'Quantitative value for this moiety.',
		},
		amountString: {
			type: GraphQLString,
			description: 'Quantitative value for this moiety.',
		},
	}),
});
