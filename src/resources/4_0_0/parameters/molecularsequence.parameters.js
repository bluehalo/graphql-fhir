const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the molecularsequence query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/MolecularSequence-chromosome
	chromosome: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MolecularSequence.referenceSeq.chromosome',
		description: 'Chromosome number of the reference sequence',
	},
	// http://hl7.org/fhir/SearchParameter/MolecularSequence-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MolecularSequence.identifier',
		description: 'The unique identity for a particular sequence',
	},
	// http://hl7.org/fhir/SearchParameter/MolecularSequence-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'MolecularSequence.patient',
		description: 'The subject that the observation is about',
	},
	// http://hl7.org/fhir/SearchParameter/MolecularSequence-referenceseqid
	referenceseqid: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MolecularSequence.referenceSeq.referenceSeqId',
		description: 'Reference Sequence of the sequence',
	},
	// http://hl7.org/fhir/SearchParameter/MolecularSequence-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'MolecularSequence.type',
		description: 'Amino Acid Sequence/ DNA Sequence / RNA Sequence',
	},
	// http://hl7.org/fhir/SearchParameter/MolecularSequence-variant-end
	variant_end: {
		type: GraphQLString,
		fhirtype: 'number',
		xpath: 'MolecularSequence.variant.end',
		description:
			'End position (0-based exclusive, which menas the acid at this position will not be included, 1-based inclusive, which means the acid at this position will be included) of the variant.',
	},
	// http://hl7.org/fhir/SearchParameter/MolecularSequence-variant-start
	variant_start: {
		type: GraphQLString,
		fhirtype: 'number',
		xpath: 'MolecularSequence.variant.start',
		description:
			'Start position (0-based inclusive, 1-based inclusive, that means the nucleic acid or amino acid at this position will be included) of the variant.',
	},
	// http://hl7.org/fhir/SearchParameter/MolecularSequence-window-end
	window_end: {
		type: GraphQLString,
		fhirtype: 'number',
		xpath: 'MolecularSequence.referenceSeq.windowEnd',
		description:
			'End position (0-based exclusive, which menas the acid at this position will not be included, 1-based inclusive, which means the acid at this position will be included) of the reference sequence.',
	},
	// http://hl7.org/fhir/SearchParameter/MolecularSequence-window-start
	window_start: {
		type: GraphQLString,
		fhirtype: 'number',
		xpath: 'MolecularSequence.referenceSeq.windowStart',
		description:
			'Start position (0-based inclusive, 1-based inclusive, that means the nucleic acid or amino acid at this position will be included) of the reference sequence.',
	},
	// http://hl7.org/fhir/SearchParameter/MolecularSequence-chromosome-variant-coordinate
	chromosome_variant_coordinate: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'Search parameter by chromosome and variant coordinate. This will refer to part of a locus or part of a gene where search region will be represented in 1-based system. Since the coordinateSystem can either be 0-based or 1-based, this search query will include the result of both coordinateSystem that contains the equivalent segment of the gene or whole genome sequence. For example, a search for sequence can be represented as `chromosome-variant-coordinate=1$lt345$gt123`, this means it will search for the MolecularSequence resource with variants on chromosome 1 and with position >123 and <345, where in 1-based system resource, all strings within region 1:124-344 will be revealed, while in 0-based system resource, all strings within region 1:123-344 will be revealed. You may want to check detail about 0-based v.s. 1-based above.',
	},
	// http://hl7.org/fhir/SearchParameter/MolecularSequence-chromosome-window-coordinate
	chromosome_window_coordinate: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'Search parameter by chromosome and window. This will refer to part of a locus or part of a gene where search region will be represented in 1-based system. Since the coordinateSystem can either be 0-based or 1-based, this search query will include the result of both coordinateSystem that contains the equivalent segment of the gene or whole genome sequence. For example, a search for sequence can be represented as `chromosome-window-coordinate=1$lt345$gt123`, this means it will search for the MolecularSequence resource with a window on chromosome 1 and with position >123 and <345, where in 1-based system resource, all strings within region 1:124-344 will be revealed, while in 0-based system resource, all strings within region 1:123-344 will be revealed. You may want to check detail about 0-based v.s. 1-based above.',
	},
	// http://hl7.org/fhir/SearchParameter/MolecularSequence-referenceseqid-variant-coordinate
	referenceseqid_variant_coordinate: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'Search parameter by reference sequence and variant coordinate. This will refer to part of a locus or part of a gene where search region will be represented in 1-based system. Since the coordinateSystem can either be 0-based or 1-based, this search query will include the result of both coordinateSystem that contains the equivalent segment of the gene or whole genome sequence. For example, a search for sequence can be represented as `referenceSeqId-variant-coordinate=NC_000001.11$lt345$gt123`, this means it will search for the MolecularSequence resource with variants on NC_000001.11 and with position >123 and <345, where in 1-based system resource, all strings within region NC_000001.11:124-344 will be revealed, while in 0-based system resource, all strings within region NC_000001.11:123-344 will be revealed. You may want to check detail about 0-based v.s. 1-based above.',
	},
	// http://hl7.org/fhir/SearchParameter/MolecularSequence-referenceseqid-window-coordinate
	referenceseqid_window_coordinate: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'Search parameter by reference sequence and window. This will refer to part of a locus or part of a gene where search region will be represented in 1-based system. Since the coordinateSystem can either be 0-based or 1-based, this search query will include the result of both coordinateSystem that contains the equivalent segment of the gene or whole genome sequence. For example, a search for sequence can be represented as `referenceSeqId-window-coordinate=NC_000001.11$lt345$gt123`, this means it will search for the MolecularSequence resource with a window on NC_000001.11 and with position >123 and <345, where in 1-based system resource, all strings within region NC_000001.11:124-344 will be revealed, while in 0-based system resource, all strings within region NC_000001.11:123-344 will be revealed. You may want to check detail about 0-based v.s. 1-based above.',
	},
};
