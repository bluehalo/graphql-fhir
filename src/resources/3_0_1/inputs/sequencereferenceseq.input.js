const {
	GraphQLString,
	GraphQLList,
	GraphQLInt,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary SequencereferenceSeq Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SequencereferenceSeq_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/chromosome-human
		chromosome: {
			type: require('./codeableconcept.input.js'),
			description:
				'Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)).',
		},
		_genomeBuild: {
			type: require('./element.input.js'),
			description:
				"The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.  Version number must be included if a versioned release of a primary build was used.",
		},
		genomeBuild: {
			type: GraphQLString,
			description:
				"The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.  Version number must be included if a versioned release of a primary build was used.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/sequence-referenceSeq
		referenceSeqId: {
			type: require('./codeableconcept.input.js'),
			description:
				'Reference identifier of reference sequence submitted to NCBI. It must match the type in the Sequence.type field. For example, the prefix, “NG_” identifies reference sequence for genes, “NM_” for messenger RNA transcripts, and “NP_” for amino acid sequences.',
		},
		referenceSeqPointer: {
			type: GraphQLString,
			description:
				'A Pointer to another Sequence entity as reference sequence.',
		},
		_referenceSeqString: {
			type: require('./element.input.js'),
			description: "A string like 'ACGT'.",
		},
		referenceSeqString: {
			type: GraphQLString,
			description: "A string like 'ACGT'.",
		},
		_strand: {
			type: require('./element.input.js'),
			description:
				"Directionality of DNA sequence. Available values are '1' for the plus strand (5' to 3')/Watson/Sense/positive  and '-1' for the minus strand(3' to 5')/Crick/Antisense/negative.",
		},
		strand: {
			type: GraphQLInt,
			description:
				"Directionality of DNA sequence. Available values are '1' for the plus strand (5' to 3')/Watson/Sense/positive  and '-1' for the minus strand(3' to 5')/Crick/Antisense/negative.",
		},
		_windowStart: {
			type: require('./element.input.js'),
			description:
				'Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.',
		},
		windowStart: {
			type: new GraphQLNonNull(GraphQLInt),
			description:
				'Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.',
		},
		_windowEnd: {
			type: require('./element.input.js'),
			description:
				'End position of the window on the reference sequence. If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.',
		},
		windowEnd: {
			type: new GraphQLNonNull(GraphQLInt),
			description:
				'End position of the window on the reference sequence. If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.',
		},
	}),
});
