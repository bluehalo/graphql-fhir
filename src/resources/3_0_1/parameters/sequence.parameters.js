const { GraphQLString } = require('graphql');
const TokenScalar = require('../scalars/token.scalar.js');

/**
 * @name exports
 * @static
 * @summary Arguments for the sequence query
 */
module.exports = {
	// http://hl7.org/fhir/SearchParameter/Sequence-chromosome
	chromosome: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Sequence.referenceSeq.chromosome',
		description: 'Chromosome number of the reference sequence',
	},
	// http://hl7.org/fhir/SearchParameter/Sequence-coordinate
	coordinate: {
		type: GraphQLString,
		fhirtype: 'composite',
		xpath: '',
		description:
			'Search parameter for region of the reference DNA sequence string. This will refer to part of a locus or part of a gene where search region will be represented in 1-based system. Since the coordinateSystem can either be 0-based or 1-based, this search query will include the result of both coordinateSystem that contains the equivalent segment of the gene or whole genome sequence. For example, a search for sequence can be represented as `coordinate=1$lt345$gt123`, this means it will search for the Sequence resource on chromosome 1 and with position >123 and <345, where in 1-based system resource, all strings within region 1:124-344 will be revealed, while in 0-based system resource, all strings within region 1:123-344 will be revealed. You may want to check detail about 0-based v.s. 1-based above.',
	},
	// http://hl7.org/fhir/SearchParameter/Sequence-end
	end: {
		type: GraphQLString,
		fhirtype: 'number',
		xpath: 'Sequence.referenceSeq.windowEnd',
		description:
			'End position (0-based exclusive, which menas the acid at this position will not be included, 1-based inclusive, which means the acid at this position will be included) of the reference sequence.',
	},
	// http://hl7.org/fhir/SearchParameter/Sequence-identifier
	identifier: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Sequence.identifier',
		description: 'The unique identity for a particular sequence',
	},
	// http://hl7.org/fhir/SearchParameter/Sequence-patient
	patient: {
		type: GraphQLString,
		fhirtype: 'reference',
		xpath: 'Sequence.patient',
		description: 'The subject that the observation is about',
	},
	// http://hl7.org/fhir/SearchParameter/Sequence-start
	start: {
		type: GraphQLString,
		fhirtype: 'number',
		xpath: 'Sequence.referenceSeq.windowStart',
		description:
			'Start position (0-based inclusive, 1-based inclusive, that means the nucleic acid or amino acid at this position will be included) of the reference sequence.',
	},
	// http://hl7.org/fhir/SearchParameter/Sequence-type
	type: {
		type: TokenScalar,
		fhirtype: 'token',
		xpath: 'Sequence.type',
		description: 'Amino Acid Sequence/ DNA Sequence / RNA Sequence',
	},
};
