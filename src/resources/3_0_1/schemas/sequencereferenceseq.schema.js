const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary SequenceReferenceSeq Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SequenceReferenceSeq',
	description: 'A sequence that is used as a reference to describe variants that are present in a sequence analyzed.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/chromosome-human
		chromosome: {
			type: require('./codeableconcept.schema'),
			description: 'Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).'
		},
		genomeBuild: {
			type: GraphQLString,
			description: 'The Genome Build used for reference, following GRCh build versions e.g. \'GRCh 37\'.  Version number must be included if a versioned release of a primary build was used.'
		},
		_genomeBuild: {
			type: require('./element.schema'),
			description: 'The Genome Build used for reference, following GRCh build versions e.g. \'GRCh 37\'.  Version number must be included if a versioned release of a primary build was used.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/sequence-referenceSeq
		referenceSeqId: {
			type: require('./codeableconcept.schema'),
			description: 'Reference identifier of reference sequence submitted to NCBI. It must match the type in the Sequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences.'
		},
		referenceSeqPointer: {
			type: require('./reference.schema'),
			description: 'A Pointer to another Sequence entity as reference sequence.'
		},
		referenceSeqString: {
			type: GraphQLString,
			description: 'A string like \'ACGT\'.'
		},
		_referenceSeqString: {
			type: require('./element.schema'),
			description: 'A string like \'ACGT\'.'
		},
		strand: {
			type: GraphQLInt,
			description: 'Directionality of DNA sequence. Available values are \'1\' for the plus strand (5\' to 3\')/Watson/Sense/positive  and \'-1\' for the minus strand(3\' to 5\')/Crick/Antisense/negative.'
		},
		_strand: {
			type: require('./element.schema'),
			description: 'Directionality of DNA sequence. Available values are \'1\' for the plus strand (5\' to 3\')/Watson/Sense/positive  and \'-1\' for the minus strand(3\' to 5\')/Crick/Antisense/negative.'
		},
		windowStart: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.'
		},
		_windowStart: {
			type: require('./element.schema'),
			description: 'Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.'
		},
		windowEnd: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'End position of the window on the reference sequence. If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.'
		},
		_windowEnd: {
			type: require('./element.schema'),
			description: 'End position of the window on the reference sequence. If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.'
		}
	})
});
