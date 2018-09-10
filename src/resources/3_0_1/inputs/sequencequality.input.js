const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLInt, GraphQLFloat } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Sequence.quality Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SequenceQuality_Input',
	description: 'An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/quality-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'INDEL / SNP / Undefined variant.'
		},
		_type: {
			type: require('./element.input'),
			description: 'INDEL / SNP / Undefined variant.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/sequence-quality-standardSequence
		standardSequence: {
			type: require('./codeableconcept.input'),
			description: 'Gold standard sequence used for comparing against.'
		},
		start: {
			type: GraphQLInt,
			description: 'Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.'
		},
		_start: {
			type: require('./element.input'),
			description: 'Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.'
		},
		end: {
			type: GraphQLInt,
			description: 'End position of the sequence.If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.'
		},
		_end: {
			type: require('./element.input'),
			description: 'End position of the sequence.If the coordinate system is 0-based then end is is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.'
		},
		score: {
			type: require('./quantity.input'),
			description: 'The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/sequence-quality-method
		method: {
			type: require('./codeableconcept.input'),
			description: 'Which method is used to get sequence quality.'
		},
		truthTP: {
			type: GraphQLFloat,
			description: 'True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.'
		},
		_truthTP: {
			type: require('./element.input'),
			description: 'True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.'
		},
		queryTP: {
			type: GraphQLFloat,
			description: 'True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.'
		},
		_queryTP: {
			type: require('./element.input'),
			description: 'True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.'
		},
		truthFN: {
			type: GraphQLFloat,
			description: 'False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.'
		},
		_truthFN: {
			type: require('./element.input'),
			description: 'False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.'
		},
		queryFP: {
			type: GraphQLFloat,
			description: 'False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.'
		},
		_queryFP: {
			type: require('./element.input'),
			description: 'False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.'
		},
		gtFP: {
			type: GraphQLFloat,
			description: 'The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).'
		},
		_gtFP: {
			type: require('./element.input'),
			description: 'The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).'
		},
		precision: {
			type: GraphQLFloat,
			description: 'QUERY.TP / (QUERY.TP + QUERY.FP).'
		},
		_precision: {
			type: require('./element.input'),
			description: 'QUERY.TP / (QUERY.TP + QUERY.FP).'
		},
		recall: {
			type: GraphQLFloat,
			description: 'TRUTH.TP / (TRUTH.TP + TRUTH.FN).'
		},
		_recall: {
			type: require('./element.input'),
			description: 'TRUTH.TP / (TRUTH.TP + TRUTH.FN).'
		},
		fScore: {
			type: GraphQLFloat,
			description: 'Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).'
		},
		_fScore: {
			type: require('./element.input'),
			description: 'Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).'
		}
	})
});
