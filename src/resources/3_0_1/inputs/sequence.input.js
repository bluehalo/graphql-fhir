const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLInt } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let SequenceResourceInputType = new GraphQLEnumType({
	name: 'SequenceResourceInputType',
	values: {
		Sequence: { value: 'Sequence' }
	}
});

/**
 * @name exports
 * @summary Sequence Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Sequence_Input',
	description: 'Base StructureDefinition for Sequence Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(SequenceResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'A unique identifier for this particular sequence instance. This is a FHIR-defined id.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/sequence-type
		type: {
			type: CodeScalar,
			description: 'Amino Acid Sequence/ DNA Sequence / RNA Sequence.'
		},
		_type: {
			type: require('./element.input'),
			description: 'Amino Acid Sequence/ DNA Sequence / RNA Sequence.'
		},
		coordinateSystem: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).'
		},
		_coordinateSystem: {
			type: require('./element.input'),
			description: 'Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end).'
		},
		patient: {
			type: require('./reference.input'),
			description: 'The patient whose sequencing results are described by this resource.'
		},
		specimen: {
			type: require('./reference.input'),
			description: 'Specimen used for sequencing.'
		},
		device: {
			type: require('./reference.input'),
			description: 'The method for sequencing, for example, chip information.'
		},
		performer: {
			type: require('./reference.input'),
			description: 'The organization or lab that should be responsible for this result.'
		},
		quantity: {
			type: require('./quantity.input'),
			description: 'The number of copies of the seqeunce of interest. (RNASeq).'
		},
		referenceSeq: {
			type: require('./sequencereferenceseq.input'),
			description: 'A sequence that is used as a reference to describe variants that are present in a sequence analyzed.'
		},
		variant: {
			type: new GraphQLList(require('./sequencevariant.input')),
			description: 'The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/current_svn/term/variant_of)). This element can represent amino acid or nucleic sequence change(including insertion,deletion,SNP,etc.)  It can represent some complex mutation or segment variation with the assist of CIGAR string.'
		},
		observedSeq: {
			type: GraphQLString,
			description: 'Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall starts from referenceSeq.windowStart and end by referenceSeq.windowEnd.'
		},
		_observedSeq: {
			type: require('./element.input'),
			description: 'Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall starts from referenceSeq.windowStart and end by referenceSeq.windowEnd.'
		},
		quality: {
			type: new GraphQLList(require('./sequencequality.input')),
			description: 'An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).'
		},
		readCoverage: {
			type: GraphQLInt,
			description: 'Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.'
		},
		_readCoverage: {
			type: require('./element.input'),
			description: 'Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence.'
		},
		repository: {
			type: new GraphQLList(require('./sequencerepository.input')),
			description: 'Configurations of the external repository. The repository shall store target\'s observedSeq or records related with target\'s observedSeq.'
		},
		pointer: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Pointer to next atomic sequence which at most contains one variant.'
		}
	})
});
