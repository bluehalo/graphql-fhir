const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary SubstanceNucleicAcidsubunitlinkage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SubstanceNucleicAcidsubunitlinkage',
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
		_connectivity: {
			type: require('./element.schema.js'),
			description:
				'The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified.',
		},
		connectivity: {
			type: GraphQLString,
			description:
				'The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified.',
		},
		identifier: {
			type: require('./identifier.schema.js'),
			description:
				'Each linkage will be registered as a fragment and have an ID.',
		},
		_name: {
			type: require('./element.schema.js'),
			description:
				'Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage.',
		},
		name: {
			type: GraphQLString,
			description:
				'Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage.',
		},
		_residueSite: {
			type: require('./element.schema.js'),
			description: 'Residues shall be captured as described in 5.3.6.8.3.',
		},
		residueSite: {
			type: GraphQLString,
			description: 'Residues shall be captured as described in 5.3.6.8.3.',
		},
	}),
});
