const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Sequence.variant Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SequenceVariant',
	description:
		'The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			start: {
				type: GraphQLInt,
				description:
					'Start position of the variant on the  reference sequence.If the coordinate system is either 0-based or 1-based, then start position is inclusive.',
			},
			_start: {
				type: require('./element.schema'),
				description:
					'Start position of the variant on the  reference sequence.If the coordinate system is either 0-based or 1-based, then start position is inclusive.',
			},
			end: {
				type: GraphQLInt,
				description:
					'End position of the variant on the reference sequence.If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.',
			},
			_end: {
				type: require('./element.schema'),
				description:
					'End position of the variant on the reference sequence.If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.',
			},
			observedAllele: {
				type: GraphQLString,
				description:
					'An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.',
			},
			_observedAllele: {
				type: require('./element.schema'),
				description:
					'An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)).  Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the observed  sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.',
			},
			referenceAllele: {
				type: GraphQLString,
				description:
					'An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.',
			},
			_referenceAllele: {
				type: require('./element.schema'),
				description:
					'An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browser/current_svn/term/SO:0001023)). Nucleotide(s)/amino acids from start position of sequence to stop position of sequence on the positive (+) strand of the reference sequence. When the sequence  type is DNA, it should be the sequence on the positive (+) strand. This will lay in the range between variant.start and variant.end.',
			},
			cigar: {
				type: GraphQLString,
				description:
					'Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).',
			},
			_cigar: {
				type: require('./element.schema'),
				description:
					'Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.illumina.com/help/SequencingAnalysisWorkflow/Content/Vault/Informatics/Sequencing_Analysis/CASAVA/swSEQ_mCA_ExtendedCIGARFormat.htm).',
			},
			variantPointer: {
				type: require('./reference.schema'),
				description:
					'A pointer to an Observation containing variant information.',
			},
		}),
});
