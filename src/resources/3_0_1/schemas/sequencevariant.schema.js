const {
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Sequencevariant Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Sequencevariant',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_start: {
			type: require('./element.schema.js'),
			description:
				'Start position of the variant on the  reference sequence.If the coordinate system is either 0-based or 1-based, then start position is inclusive.',
		},
		start: {
			type: GraphQLInt,
			description:
				'Start position of the variant on the  reference sequence.If the coordinate system is either 0-based or 1-based, then start position is inclusive.',
		},
		_end: {
			type: require('./element.schema.js'),
			description:
				'End position of the variant on the reference sequence.If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.',
		},
		end: {
			type: GraphQLInt,
			description:
				'End position of the variant on the reference sequence.If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.',
		},
		_observedAllele: {
			type: require('./element.schema.js'),
			description:
				'An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.',
		},
		observedAllele: {
			type: GraphQLString,
			description:
				'An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.',
		},
		_referenceAllele: {
			type: require('./element.schema.js'),
			description:
				'An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.',
		},
		referenceAllele: {
			type: GraphQLString,
			description:
				'An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.',
		},
		_cigar: {
			type: require('./element.schema.js'),
			description:
				'Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).',
		},
		cigar: {
			type: GraphQLString,
			description:
				'Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).',
		},
		variantPointer: {
			type: new GraphQLUnionType({
				name: 'SequencevariantvariantPointer_variantPointer_Union',
				description:
					'A pointer to an Observation containing variant information.',
				types: () => [require('./observation.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Observation') {
						return require('./observation.schema.js');
					}
				},
			}),
			description:
				'A pointer to an Observation containing variant information.',
		},
	}),
});
