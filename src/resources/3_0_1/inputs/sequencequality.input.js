const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLFloat,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Sequencequality Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Sequencequality_Input',
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
		_type: {
			type: require('./element.input.js'),
			description: 'INDEL / SNP / Undefined variant.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/quality-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'INDEL / SNP / Undefined variant.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/sequence-quality-standardSequence
		standardSequence: {
			type: require('./codeableconcept.input.js'),
			description: 'Gold standard sequence used for comparing against.',
		},
		_start: {
			type: require('./element.input.js'),
			description:
				'Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.',
		},
		start: {
			type: GraphQLInt,
			description:
				'Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.',
		},
		_end: {
			type: require('./element.input.js'),
			description:
				'End position of the sequence.If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.',
		},
		end: {
			type: GraphQLInt,
			description:
				'End position of the sequence.If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.',
		},
		score: {
			type: require('./quantity.input.js'),
			description:
				'The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/sequence-quality-method
		method: {
			type: require('./codeableconcept.input.js'),
			description: 'Which method is used to get sequence quality.',
		},
		_truthTP: {
			type: require('./element.input.js'),
			description:
				'True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.',
		},
		truthTP: {
			type: GraphQLFloat,
			description:
				'True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.',
		},
		_queryTP: {
			type: require('./element.input.js'),
			description:
				'True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.',
		},
		queryTP: {
			type: GraphQLFloat,
			description:
				'True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.',
		},
		_truthFN: {
			type: require('./element.input.js'),
			description:
				'False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.',
		},
		truthFN: {
			type: GraphQLFloat,
			description:
				'False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.',
		},
		_queryFP: {
			type: require('./element.input.js'),
			description:
				'False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.',
		},
		queryFP: {
			type: GraphQLFloat,
			description:
				'False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.',
		},
		_gtFP: {
			type: require('./element.input.js'),
			description:
				'The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).',
		},
		gtFP: {
			type: GraphQLFloat,
			description:
				'The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).',
		},
		_precision: {
			type: require('./element.input.js'),
			description: 'QUERY.TP / (QUERY.TP + QUERY.FP).',
		},
		precision: {
			type: GraphQLFloat,
			description: 'QUERY.TP / (QUERY.TP + QUERY.FP).',
		},
		_recall: {
			type: require('./element.input.js'),
			description: 'TRUTH.TP / (TRUTH.TP + TRUTH.FN).',
		},
		recall: {
			type: GraphQLFloat,
			description: 'TRUTH.TP / (TRUTH.TP + TRUTH.FN).',
		},
		_fScore: {
			type: require('./element.input.js'),
			description:
				'Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).',
		},
		fScore: {
			type: GraphQLFloat,
			description:
				'Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).',
		},
	}),
});
