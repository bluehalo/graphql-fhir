const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary SubstanceSpecificationstructurerepresentation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SubstanceSpecificationstructurerepresentation',
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
				'The type of structure (e.g. Full, Partial, Representative).',
		},
		_representation: {
			type: require('./element.schema.js'),
			description:
				'The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX.',
		},
		representation: {
			type: GraphQLString,
			description:
				'The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX.',
		},
		attachment: {
			type: require('./attachment.schema.js'),
			description: 'An attached file with the structural representation.',
		},
	}),
});
