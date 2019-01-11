const {
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary SubstanceProteinsubunit Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SubstanceProteinsubunit',
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
		_subunit: {
			type: require('./element.schema.js'),
			description:
				'Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.',
		},
		subunit: {
			type: GraphQLInt,
			description:
				'Index of primary sequences of amino acids linked through peptide bonds in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts.',
		},
		_sequence: {
			type: require('./element.schema.js'),
			description:
				'The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence.',
		},
		sequence: {
			type: GraphQLString,
			description:
				'The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence.',
		},
		_length: {
			type: require('./element.schema.js'),
			description:
				'Length of linear sequences of amino acids contained in the subunit.',
		},
		length: {
			type: GraphQLInt,
			description:
				'Length of linear sequences of amino acids contained in the subunit.',
		},
		sequenceAttachment: {
			type: require('./attachment.schema.js'),
			description:
				'The sequence information shall be provided enumerating the amino acids from N- to C-terminal end using standard single-letter amino acid codes. Uppercase shall be used for L-amino acids and lowercase for D-amino acids. Transcribed SubstanceProteins will always be described using the translated sequence; for synthetic peptide containing amino acids that are not represented with a single letter code an X should be used within the sequence. The modified amino acids will be distinguished by their position in the sequence.',
		},
		nTerminalModificationId: {
			type: require('./identifier.schema.js'),
			description:
				'Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.',
		},
		_nTerminalModification: {
			type: require('./element.schema.js'),
			description:
				'The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified.',
		},
		nTerminalModification: {
			type: GraphQLString,
			description:
				'The name of the fragment modified at the N-terminal of the SubstanceProtein shall be specified.',
		},
		cTerminalModificationId: {
			type: require('./identifier.schema.js'),
			description:
				'Unique identifier for molecular fragment modification based on the ISO 11238 Substance ID.',
		},
		_cTerminalModification: {
			type: require('./element.schema.js'),
			description: 'The modification at the C-terminal shall be specified.',
		},
		cTerminalModification: {
			type: GraphQLString,
			description: 'The modification at the C-terminal shall be specified.',
		},
	}),
});
